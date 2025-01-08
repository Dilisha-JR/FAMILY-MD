const url = `https://sinhalasub.lk?s=${q}`;
const response = await axios.get(url);  
const $ = cheerio.load(response.data);
   
    const data = [];
    $("div.result-item").each((c, d) => {

        data.push({
             
       link: $(d).find("div.title > a").attr("href"),
         title: $(d).find("div.title > a").text(),       
        })
    })


 const response1 = await axios.get(url);  
const $1 = cheerio.load(response1.data);
const next1 = $1("div.pagination > a.arrow_pag").attr("href")
      const nextall = $1("div.resppages > a:nth-child(2)").attr("href")

if (q.includes("https://sinhalasub.lk/movies")) {
const response = await axios.get(q);
		    const $x = cheerio.load(response.data);
		    const newsArticle = $x(".sheader").first();
                    const newsHeadline = newsArticle.find(".data .head h1").text();
                    const newsDate = newsArticle.find(".extra .tagline").text().trim();
                    const newsTime = newsArticle.find(".poster img").attr("src");
                    const date = newsArticle.find(".extra .date").text().trim();
                    const duration = newsArticle.find(".extra .runtime").text().trim();
                    const infoMovie = $x("#info").first();
                    const desc = infoMovie.find(".wp-content p").text().trim();
                    const rat = infoMovie.find("#repimdb strong").text().trim();
                    const img = infoMovie.find("#dt_galery .owl-item a").attr("src");
                    const country = $x("#single > div.content.right > div.sheader > div.data > div.extra > span.country").text().trim();
const response1 = await axios.get(q);  
const $ = cheerio.load(response1.data);
   
    const data = [];
    $("div#download.sbox > div > div > table > tbody > tr").each((c, d) => {
        data.push({             
         link: $(d).find("td > a").attr("href"),
         quality: $(d).find("td > strong").text(),
         size: $(d).find("td:nth-child(3)").text()       
        })
    })
const response2 = await axios.get(q);  
const $1 = cheerio.load(response2.data);   
    const data1 = [];
    $1("div#download-02.sbox > div > div > table > tbody > tr").each((c, d) => {
        data1.push({           
         link: $1(d).find("td > a").attr("href"),
         quality: $1(d).find("td > strong").text(),
         size: $1(d).find("td:nth-child(3)").text()         
        })
    })
const response3 = await axios.get(q);  
const $2 = cheerio.load(response3.data);
    const data2 = [];
    $2("div#download-03.sbox > div > div > table > tbody > tr").each((c, d) => {
        data2.push({           
         link: $2(d).find("td > a").attr("href"),
         quality: $2(d).find("td > strong").text(),
         size: $2(d).find("td:nth-child(3)").text()        
        })
    })

const response4 = await axios.get(q);  
const $3 = cheerio.load(response4.data);
const images = []
        $3("div.g-item").each((i, el) => {
	images.push({	
             url2: $3(el).find("a").attr("href").replace("\n" , ""),
             
	})    
 })

cmd({
    pattern: `mp4`,
    react: "📥",
    dontAddCommandList: true,
    filename: __filename
}, async (conn, mek, m, { from, q, isDev, reply }) => {
	if ( !isDev ) return reply('⚠️ ⚠️ *Contact owner to Active your number To Premium user*')
    if (!q) {
        return await reply('*Please provide a direct URL!*');
    }


    try {


	    
        //const mediaUrl = q.trim();
        const mediaUrl = q.split("|")[0]
        const title = q.split("|")[1]  || 'tc_movie_dl_system'
	    
     const response = await axios.get(mediaUrl);  
const $ = cheerio.load(response.data);
    const link = $("#link").attr("href")
const drain = link.replace(/u/g, 'api/file')   
console.log(drain)

var vajiralod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙸𝙽𝙸𝚃𝙸𝙰𝙻𝙸𝚉𝙴𝙳 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."
]
let { key } = await conn.sendMessage(from, {text: 'ᴜᴘʟᴏᴀᴅɪɴɢ ᴍᴏᴠɪᴇ...'})

for (let i = 0; i < vajiralod.length; i++) {
await conn.sendMessage(from, {text: vajiralod[i], edit: key })
}
