const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~LNVBlYxD#gNs-Nh9UdZBoq3xdA3FBQOIXrzvKa5HHh0-8viIPc60",
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "Seen your status.",
    WELCOME: process.env.WELCOME || "false",
    ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
    PREFIX: process.env.PREFIX || ".",
    MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "",
    BOT_NAME: process.env.BOT_NAME || "BY ADMIN ABDULLAH ASAD",
    STICKER_NAME: process.env.STICKER_NAME || "BY ADMIN ABDULLAH ASAD",
    CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
    DELETE_LINKS: process.env.DELETE_LINKS || "false",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "923348544535,923415039609,923216538057",
    OWNER_NAME: process.env.OWNER_NAME || "ADMIN ABDULLAH ASAD",
    DESCRIPTION: process.env.DESCRIPTION || "© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ADMIN ABDULLAH ASAD",
    ALIVE_IMG: process.env.ALIVE_IMG || "",
    LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *ADMIN ABDULLAH ASAD*⚡",
    READ_MESSAGE: process.env.READ_MESSAGE || "false",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    ANTI_BAD: process.env.ANTI_BAD || "false",
    MODE: process.env.MODE || "public",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "true",
    AUTO_REPLY: process.env.AUTO_REPLY || "true",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
    AUTO_TYPING: process.env.AUTO_TYPING || "false",
    READ_CMD: process.env.READ_CMD || "false",
    DEV: process.env.DEV || "923348544535",
    ANTI_VV: process.env.ANTI_VV || "true",
    ANTI_CALL: process.env.ANTI_CALL || "false",
    REJECT_MSG: process.env.REJECT_MSG || "*_SORRY MY BOSS IS BUSY PLEASE DON'T CALL ME_*",
    ANTI_DELETE: process.env.ANTI_DELETE || "true",
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
};
