module.exports.config = {
  name: "info",
  version: "1.0.0",
  permission: 0,
  credits: "Rimon",
  prefix: true,
  description: "search results on google",
  category: "without prefix",
  usages: "google [text]",
  cooldowns: 5,
  dependencies: 
{
  "request":"",
  "fs-extra":"",
  "axios":""
}
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.imgur.com/8RYq2Tc.jpeg", 

            "https://i.imgur.com/848klKa.mp4", 

            "https://i.imgur.com/Z94D2Yn.jpeg",

"",

            ""];

var callback = () => api.sendMessage({body:`𝙸𝙽𝙵𝙾 𝙰𝙽𝙳 𝙱𝙾𝚃 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙸𝙾𝙽
________________________________________

❇️𝙱𝙾𝚃 𝙽𝙰𝙼𝙴 : ${global.config.BOTNAME}

❇️𝙱𝙾𝚃 𝙰𝙳𝙼𝙸𝙽 :『 𝗥𝗶𝗺𝗼𝗻 𝗖𝗵𝗼𝘄𝗱𝗵𝘂𝗿𝘆 』

❇️𝙰𝙳𝙳𝚁𝙴𝚂𝚂 : 𝗗𝗶𝗻𝗮𝗷𝗽𝘂𝗿,𝗦𝗼𝗱𝗼𝗿

_____________𝙲𝙾𝙽𝚃𝙰𝙲𝚃_____________

❇️𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺 𝙸𝙳 : https://www.facebook.com/profile.php?id=61552209843370

❇️𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝚔 𝙿𝙰𝙶𝙴: 𝗡𝗼 

❇️𝙱𝙾𝚃 𝙿𝚁𝙴𝙵𝙸𝚇 : ${global.config.PREFIX}

❇️𝙱𝙾𝚃 𝙾𝚆𝙽𝙴𝚁 : 𝗥𝗜𝗠𝗢𝗡 

𝙾𝚃𝙷𝙴𝚁 𝙸𝙽𝙵𝙾𝙼𝙰𝚃𝙸𝙾𝙽____________________

𝚃𝚈𝙿𝙴 /𝚊𝚍𝚖𝚒𝚗

➟ 𝚄𝙿𝚃𝙸𝙼𝙴

𝚃𝙾𝙳𝙰𝚈 𝙸𝚂 𝚃𝙸𝙼𝙴 : ${juswa} 

𝙱𝙾𝚃 𝙸𝚂 𝚁𝚄𝙽𝙽𝙸𝙽𝙶 ${hours}:${minutes}:${seconds}.

𝚃𝙷𝙰𝙽𝙺𝚂 𝙵𝙾𝚁 𝚄𝚂𝙸𝙽𝙶 ${global.config.BOTNAME} 『🤖🖤』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpeg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpeg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpeg")).on("close",() => callback());
   }; 
