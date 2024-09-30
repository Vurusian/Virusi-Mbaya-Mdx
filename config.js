// VIRUSI-MBAYA-MD 

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "null";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ngwathegang3@gmai.com";
global.location = "Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://giftedte:SER3spXjIJSOwrPT@cluster0.ni61idp.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/Vurusian/Virusi-Mbaya-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VafL5zUKbYMKza6vAv1V";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VafL5zUKbYMKza6vAv1V";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://https://telegra.ph/file/7f03fb699a244da228740.jpg";
global.devs = "254748721079,254762016957,254728782591,254700505700";
global.sudo = process.env.SUDO || "254748721079";
global.owner = process.env.OWNER_NUMBER || "254748721079,254700505700";
global.style = process.env.STYLE || "4";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/8aa6951466328563add47.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "2547xxxx";
global.read_status_from = process.env.READ_STATUS_FROM || "2547xxxx";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://pearni-3db1e9057508.herokuapp.com";

global.SESSION_ID =
  process.env.SESSION_ID |Virusi;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEFKTTQvZnVRVHFzdHg1T2JuUld5SlZxYlhuejRyRW1lcnlZU2pIRHFtND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmRtc1NNMDZ6a09UTlc1aDhBUVFsNjhxbHgrVUwvY3JhV0pRcUVQQ0VWST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVSkxLOXdnazVJZ2NRVHNkTmc5bitscFAwTjl5WHdZY0NvVW1aSUI3dFhjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyZnF4NUN5T0xTZ1hyS3o5SEFwcnVRamMvVGZveWM4VFdSQ3Y2WUlyejI0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZObHQzRDk1c0dwa20rMElQMVIvOWVFeHhPU2dBRTlaNFNncjllMjc5azg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhvWk9PWGFpYkNuQ3c2THFBZzdIZmRyN1FoWWFIekdPdU9FZ3kwcXBmbm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUJvU2Z5c2hLckI3NWdCTmc0eldoYUQ1SUFyS2xyakc2c3hCYzZwZERtRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnJScVQ2SURPcnZJL0ZDUUZRZ3dCa3VBdnFBVkp1bkVqYVdONXc0M25Ubz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpLOUZYeU10bkNaZHJ6MEFGSlU0K2tVR2hadzJScUJ1eTU5c2kwbEF4OE42bnp3VGtyYXRERE5xQlpRT3VhaUFyWEwxd2s0d0JlUzNrWmQyb21wRWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTcsImFkdlNlY3JldEtleSI6IkorbmNBdnFBenBjZ1dGbnRRRWFoNVVSMnozQnhlM21VamkrMkExcUdUdFE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InNpVVQzY0VPU0dhRk1hS01fUjVPREEiLCJwaG9uZUlkIjoiYTBmNmJjY2QtZjBkMi00Yjg1LTllODMtYmJjZjg3ODJkOGI5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IncveEFXYjBzaWJTeEtWY0J3bnFxUFF3UWlmWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrZ2lMdmhjZzlXZlZhcFNrL203c0xmOWtJbTg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWVdYMkFTR1giLCJtZSI6eyJpZCI6IjI1NDcwMDYzOTUxODo1NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJtM21+w7hqISJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSW5PNTE4UW1ybnN0d1lZQnlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRTZQZUtOTzJVeFdOZ1Q4aTIvNzI2OWdWay9CK2RkU0JQcFJTdWcrRFdBMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoieE5LNklxMTZXZUwyaDFFajJjWDNtRmNBd3A4MytuM1JxN3RsQWJ0c3JWeHg1UE94TmwzZXVqeHZiWGJuWUxlQlR3K0RvS1QzTGo2VFZMUVF2WnB5RFE9PSIsImRldmljZVNpZ25hdHVyZSI6IkRPTzlpdUZHaStHK1JwZHZEYVNwSTI0TzhsY09QSURmRk12NWo3d0pVb1B0bm83N0ZkT3p6dnZtNDJxUCtGUVdCWTBuUXhkZ1hXV050OXJiS2RKcmlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzAwNjM5NTE4OjU1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJPajNpalR0bE1WallFL0l0dis5dXZZRlpQd2ZuWFVnVDZVVXJvUGcxZ04ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjc3MzI5MDQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQVBhIn0=|
module.exports = {
  menu: process.env.MENU || "2", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "🦠𝗩𝗜𝗥𝗨𝗦𝗜-𝗠𝗕𝗔𝗬𝗔-𝗠𝗗🦠🦟",
  author: process.env.PACK_AUTHER || "Virusi-Md",
  packname: process.env.PACK_NAME || "🦠",
  botname: process.env.BOT_NAME || "𝗩𝗜𝗥𝗨𝗦𝗜-𝗠𝗕𝗔𝗬𝗔-𝗠𝗗",
  ownername: process.env.OWNER_NAME || "Vurusian",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VIRUSI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
  
