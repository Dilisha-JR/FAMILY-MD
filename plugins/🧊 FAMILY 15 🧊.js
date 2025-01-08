cmd({
    pattern: "ytmxdl",
    react: '⬆',    
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isDev, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
	

							 
  

var Seedr = require("seedr");
var seedr = new Seedr();
await seedr.login("email","password");

const ad_mg = await conn.sendMessage(from, { text : 'ᴜᴘʟᴏᴀᴅɪɴɢ magnet file...📥' }, {quoted: mek} )
const magnet = await seedr.addMagnet(q);


for (let i = 0; i < vajiralod.length; i++) {
await conn.sendMessage(from, {text: vajiralod[i], edit: key })
}


    if (magnet.code === 400 || magnet.result !== true) {
        console.log("Error adding magnet " + JSON.stringify(magnet, null, 2))
        return null;
    }
    var contents = []
	do {
		contents = await seedr.getVideos();
	} while (contents.length === 0);


		var file = await seedr.getFile(contents[0][0].id);
		var folder_id=  contents[0][0].fid 

	const link = file.url
await conn.sendMessage(config.JID,{document:await getBuffer(link),mimetype:"video/mp4",fileName:`${file.name} | ${uploader}.mp4`,caption:`> ${file.name}`}
)
	await seedr.deleteFolder(folder_id)
await conn.sendMessage(from, { text : `Movie send ${config.JID} Successfull ✔` }, {quoted: mek} )
	
} catch (e) {
await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
console.log(e)
reply(`❌ *Error Accurated !!*\n\n${e}`)
}
})

const url = `https://yts.mx/browse-movies/${q}/all/all/0/latest/0/all`
const response = await axios.get(url);	
const $ = cheerio.load(response.data);

let results = [];
    $("section > div.row > div").each((c, d) => {
        results.push({
             title: $(d).find("div.browse-movie-bottom > a").text(),
             year: $(d).find("div.browse-movie-bottom > div").text(),
             link: $(d).find("a").attr("href"),
             image: $(d).find("a > figure > img").attr("src"),
             rating: $(d).find("a > figure > figcaption > h4.rating").text(),
             danne: $(d).find("a > figure > figcaption > h4").eq(1).text(),
             danne1: $(d).find("a > figure > figcaption > h4").eq(2).text(),
           

        })
    })



const response = await axios.get(q);	
const $ = cheerio.load(response.data);

	const title = $("#mobile-movie-info > h1").text();
        const year = $("#mobile-movie-info > h2:nth-child(2)").eq(0).text();
        const language = $("#mobile-movie-info > h2 > span").text();
        const image = $("#movie-poster > img").attr("src");
        const enter = $("#mobile-movie-info > h2").eq(1).text();
        let results = [];
      $("div.modal.modal-download.hidden-xs.hidden-sm > div > div > div").each((c, d) => {
          results.push({ 
               quality: $(d).find("div > span").text(),
               type: $(d).find("p.quality-size").eq(0).text(),
               size: $(d).find("p.quality-size").eq(1).text(),
               torrent_file: $(d).find("a").attr("href"),
               magnet: $(d).find("a.magnet-download.download-torrent.magnet").attr("href"),
          })
      })
