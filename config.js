const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "hK1jmAhb#lp6__zjP10c-XYvNbCmt2waYCrjIsGObuFAJhAybFmU",
ALIVE_IMG : process.env.ALIVE_IMG || "https://i.ibb.co/Tk76N76/9752.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "*𝐇𝐈 𝐁𝐎𝐓 𝐈𝐒 𝐀𝐋𝐈𝐕𝐄 𝐍𝐎𝐖\n\n𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐃: = ꧁𓊈𒆜 ᗪIᒪIᔕᕼᗩ 𒆜𓊉꧂\n\n𝐓𝐄𝐀𝐌: = ✿.｡.:* ☆:**:. 𝕐𝔸𝕂𝕌ℤ𝔸 .:**:.☆*.:｡.✿\n\nYOUTUBE: https://www.youtube.com/@shanstudio-n1x \n\nWHATSAPP: https://chat.whatsapp.com/Fz9ycW1PBIU5idc37JqMNv \n\n𝐓𝐎: 𝚃𝙷𝙰𝙽𝙺𝚂 𝙵𝙾𝚁 𝚄𝚂𝙸𝙽𝙶 𝙵𝙰𝙼𝙸𝙻𝚈-𝙼𝙳*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
