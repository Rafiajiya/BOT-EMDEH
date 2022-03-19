let fetch = require('node-fetch')
let handler = async function (m, { text, isPrems, isOwner }) {
	let user = global.db.data.users[m.sender]
    if (!text) throw '_Ingin Cari Apa_'
    await m.reply(global.wait)
  let res = await fetch('https://zekais-api.herokuapp.com/spotify?query=' + encodeURIComponent(text))
let json= await res.json()
  const raku =  `*JUDUL :* "${json.title}"\n\n*Artis:* ${json.artist}\n\n*ID :* ${json.id}\n\n*POPULER:* ${json.popularity}\n\n*durasi:* ${json.duration}`
     conn.sendFile(m.chat,json.result, 'spotify.mp3', raku, m)
}
handler.help = ['spotify <judul>']
handler.tags = ['downloader']
handler.command = /^spotify$/i
handler.group = false

handler.premium = true

module.exports = handler


//jgn di bully bg msih pemula