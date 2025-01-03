const { cmd } = require('../command');
const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');

cmd({
  pattern: "sinhalasub3",
  alias: ["movie"],
  react: "🎥",
  category: "download",
  desc: "Search movies on SinhalaSub and get download links",
  filename: __filename,
}, async (bot, message, args, { from, q, reply }) => {
  try {
    // Step 1: Validate query
    if (!q) {
      return await reply("*Please provide a search query! (e.g., Deadpool)*");
    }

    // Step 2: Search SinhalaSub for movies
    const sinhala = await sinhalaSub();
    const results = await sinhala.search(q);
    const movies = results.result.slice(0, 10);

    if (!movies.length) {
      return await reply(`No results found for: ${q}`);
    }

    // Step 3: Send movie list to the user
    let movieList = `📽️ *Search Results for* "${q}":\n\n`;
    movies.forEach((movie, index) => {
      movieList += `*${index + 1}.* ${movie.title}\n🔗 Link: ${movie.link}\n\n`;
    });

    const selectionMessage = await bot.sendMessage(from, { text: movieList }, { quoted: message });

    // Step 4: Wait for user to select a movie
    bot.ev.on("messages.upsert", async (response) => {
      const selectedMessage = response.messages[0];
      if (!selectedMessage.message) return;

      const selectionText = selectedMessage.message.conversation || selectedMessage.message.extendedTextMessage?.text;
      const isValidSelection = selectedMessage.message.extendedTextMessage?.contextInfo.stanzaId === selectionMessage.key.id;

      if (isValidSelection) {
        const selectedIndex = parseInt(selectionText.trim());
        if (isNaN(selectedIndex) || selectedIndex <= 0 || selectedIndex > movies.length) {
          return await reply("Invalid selection. Please reply with a valid number.");
        }

        const selectedMovie = movies[selectedIndex - 1];
        const apiUrl = `https://api-site-2.vercel.app/api/sinhalasub/movie?url=${encodeURIComponent(selectedMovie.link)}`;

        try {
          // Step 5: Fetch download links
          const { data } = await axios.get(apiUrl);
          const movieDetails = data.result;
          const downloadLinks = movieDetails.dl_links || [];

          if (!downloadLinks.length) {
            return await reply("No PixelDrain links found.");
          }

          // Step 6: Send quality options to the user
          let qualityList = `🎥 *${movieDetails.title}*\n\n*Available PixelDrain Download Links:*\n`;
          downloadLinks.forEach((link, index) => {
            qualityList += `*${index + 1}.* ${link.quality} - ${link.size}\n🔗 Link: ${link.link}\n\n`;
          });

          const qualityMessage = await bot.sendMessage(from, { text: qualityList }, { quoted: selectedMessage });

          // Step 7: Wait for quality selection
          bot.ev.on("messages.upsert", async (qualityResponse) => {
            const qualityMessage = qualityResponse.messages[0];
            if (!qualityMessage.message) return;

            const qualitySelection = qualityMessage.message.conversation || qualityMessage.message.extendedTextMessage?.text;
            const isValidQuality = qualityMessage.message.extendedTextMessage?.contextInfo.stanzaId === qualityMessage.key.id;

            if (isValidQuality) {
              const qualityIndex = parseInt(qualitySelection.trim());
              if (isNaN(qualityIndex) || qualityIndex <= 0 || qualityIndex > downloadLinks.length) {
                return await reply("Invalid selection. Please reply with a valid number.");
              }

              const selectedQuality = downloadLinks[qualityIndex - 1];
              const fileId = selectedQuality.link.split("/").pop();
              const downloadUrl = `https://pixeldrain.com/api/file/${fileId}`;

              // Step 8: Send the file
              await bot.sendMessage(from, {
                document: { url: downloadUrl },
                mimetype: "video/mp4",
                fileName: `${movieDetails.title} - ${selectedQuality.quality}.mp4`,
                caption: `${movieDetails.title}\nQuality: ${selectedQuality.quality}\nPowered by SinhalaSub`,
              }, { quoted: qualityMessage });
            }
          });
        } catch (error) {
          console.error("Error fetching movie details:", error);
          await reply("An error occurred while fetching movie details. Please try again.");
        }
      }
    });
  } catch (error) {
    console.error("Error during search:", error);
    await reply("*An error occurred while searching!*");
  }
});                                                       
