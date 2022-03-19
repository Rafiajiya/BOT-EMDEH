let fetch = require('node-fetch')
let handler = async function (m, { text, isPrems, isOwner }) {
	let user = global.db.data.users[m.sender]
    if (!text) throw '_Ingin Cari Apa_'
    await m.reply(global.wait)
  let res = await fetch('http://docs-jojo.herokuapp.com/api/samehadaku?q=' + encodeURIComponent(text))
let json= await res.json()
  const raku =  `*JUDUL :* "${json.title}"\n\n*link:* ${json.link}\n\n*sinopsis :* ${json.desc}`
     conn.sendFile(m.chat,json.thumb, 'image.jpg', raku, m)
}
handler.help = ['samehadaku <judul>']
handler.tags = ['search']
handler.command = /^samehadaku$/i
handler.group = false

handler.limit = 6

module.exports = handler


//jgn di bully bg msih pemula