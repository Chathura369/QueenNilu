
const fs = require('fs')
const chalk = require('chalk')

/*
⚙️ Owner SETTINGS  ⚙️
*/

//Owner Number & Name 
global.owner = ['94742514900'] //ur owner number
global.ownername = "Ƈʜᴀᴛʜᴜツ..." //ur owner name

//Bot Name 
global.botname = 'ǫᴜᴇᴇɴ ɴɪʟᴜ' //ur bot name
global.wm = "ǫᴜᴇᴇɴ ɴɪʟᴜ" //ur watermark

global.keyopenai = "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",
//React Messages 
global.OWNER_REACT = '🥀' //Owner's Messages react emoji
global.AUTO_REACT = 'true' // React Messags auto


/*
BOT SETTINGS
*/

//Language English = 'EN' , Sinhala = 'SI' , Tamil= 'TL'
global.LANG = 'SI'

global.READ_MASSAGE = true

// enable desable Girls Voice Reply
global.VOICE_REPLY = true

// Do you want show time on your bio use "true" want desable use "false"
global.AUTO_BIO = false

// Inbox massage block PM block
global.INBOX_BLOCK = false

//Inbox Block MSG
global.INBOX_BLOCK_MSG = 'blockedd'

//Anti Bad word
global.ANTI_BADWORD = 'true'


global.cap = '© 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 QUEEN NILU ²⁰²³'

// Menu imoji 
global.MENU_IMOJI = '💃|🧸'
//Time & Location
global.TIME_ZONE = 'Asia/Colombo'
global.location = "colombo, India, Aizawl" //ur location
//Song Download Message
global.SONG_DOWN = '```⬇️ Downloading Your Song...```' 
// Song Uplode massage 
global.SONG_UP = '```⬆️ Uploding Your Song...```'

//SEX_VIDEO_DOWNLOAD
global.SEX_VIDEO_DOWNLOAD ='true'

//Kick Message 
global.KICK_MSG = 'true ' 

//Links (URLS)
global.ytname = "YT: janithsadanuwan" //ur yt chanel name
global.socialm = "GitHub: janithsadanuwan" //ur github or insta name
global.linkz = "https://chat.whatsapp.com/" //your theme url which will be displayed on whatsapp
global.websitex = "https://youtu.be/c/janithsadanuwan" //ur website to be displayed
global.botscript = 'https://github.com/janithsadanuwan/QueenNilu' //script link

//Alive 
global.alivelogo = process.env.ALIVE_LOGO || `https://te.legra.ph/file/a9293226a7c660ecbfffb.jpg`
global.alive = process.env.ALIVE_MESSAGE 

//Sticker Making 
global.packname = "ǫᴜᴇᴇɴ ɴɪʟᴜ 💃" 

//Anti Bad Word
global.ANTI_BADWORD = 'true'

//Antilink
global.antilink = 'true'


//OTHERS  
global.autoTyping = true //auto tying in gc (true to on, false to off)
global.autoRecord = true //auto recording (true to on, false to off)


global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'


// Other
global.sessionName = 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVBiWEIzWTFIcUZ3eG9KVDFOWkQ3bDVZdXlEdlE4S2gwUVF6UEhEQmZuZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieTdNeHZoazhKTXRaNEpFeDNuVEhlajVNWVJOSHdvMnhZVlI1TzNwaVVDaz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSVgwdjhpUHBkYkdKNXFSTksrc25tUUZUMVhTMEljRW1OQmx3c0g4WjNnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJheWFBaDZWb29HdUtrT0lZbHBoTUs4MysvbmRvODV2V0ZqZTRrZWVrVUVrPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFLLzhoQ0hDaDFWMExPM1hDN0dZOEZFZzFFM21wKzBUTUZnTndDZGhkbHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkgxZXJzbXBla2ptNm1aK3VGQkxhcFNoZmI5Y3JoOE8rV2ZJV0NPMGUzM0U9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZazMzUDZOekFwVVdkMGVaaUQzTjBtbEtjV29IcmdKejdXWG80a01EMnBlRjdIdG5RZE1SK3ZuVnJ0eTczQnhSaTdLcDRBNTlJTmRDQnMrR1FuNVpoUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjU0LCJhZHZTZWNyZXRLZXkiOiJMcEpRQUMwaDFpYkMxRW5iZTlPNm8rTE9EakJMaVFyYXU4R3A0dTRHWTV3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNR25qZGNERUp5djA2TUdHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imk4ejdIdWZXSUhEUzFNSnJZMHZaUFRSQ1kyUmExZ2ZaL2Z6R3RHUVlYWGM9IiwiYWNjb3VudFNpZ25hdHVyZSI6Imt5WnZ4WVArSndTWmpXaWdQR3RyWDV5YWhZTmxURXZvUnFIRjFsTTBYeWlGenU4QSs0NXZzZjFPcW1qa21ORkQ3SGhKZjE2V0Q2ZEFqQ2pEY2pmd0NBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJIV2RvSzdWM0ZTc1I5d2k4dGZjeTl2S3o4cTN1YjgzVE1FK0huZ3BpYzYwRFRSd0dIZ3Z3L2xzMUJ6ejRpZlRuZldqOGx5bzNPN1V2L3dwZDJEREppQT09In0sIm1lIjp7ImlkIjoiOTQ3MjE3MzIyMDY6MzFAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjE3MzIyMDY6MzFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWXZNK3g3bjFpQncwdFRDYTJOTDJUMDBRbU5rV3RZSDJmMzh4clJrR0YxMyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTY4NTM3ODk3NH0='
global.prefa = ['','!','.','#','&']
global.sp = ''
global.themeemoji ='💃'
//messages
global.mess = {
    success: 'Here you go!',
    admin: 'This feature could be used by admins only!',
    botAdmin: 'Bot Must Be Admin First!',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: 'This feature could be used by owner only',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'Wait Nilu bot processing...💃',
    linkm: 'Where is the link?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
}

//media target
global.thum = fs.readFileSync("./Media/bot.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./Media/bot.jpg") //ur logo pic
global.err4r = fs.readFileSync("./Media/bot.jpg") //ur error pic
global.thumb = fs.readFileSync("./Media/bot.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//adventure1
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

//adventure2
global.emot = {
role: '🏆',
level: '🎚️',
limit: '📊',
health: '❤️',
exp: '💫',
money: '💵',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🎁',
mythic: '🗳️',
legendary: '🗃️',
pet: '🎁',
trash: '🗑',
armor: '👕',
sword: '⚔️',
wood: '🪵',
batu: '🪨',
string: '🕸️',
horse: '🐎',
cat: '🐈',
dog: '🐕',
fox: '🦊',
petFood: '🍖',
iron: '⛓️',
gold: '👑',
emerald: '💚',
budak: '🏃',
busur: '🏹',
panah: '💘',
kapak: '🪓'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
