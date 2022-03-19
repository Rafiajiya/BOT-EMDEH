let fetch = require('node-fetch')
let handler = async function (m, { text, isPrems, isOwner }) {
	let user = global.db.data.users[m.sender]
    if (!text) throw '_Ingin Cari Apa_'
    await m.reply(global.wait)
  let res = await fetch('http://docs-jojo.herokuapp.com/api/mediafire?url=' + encodeURIComponent(text))
let json= await res.json()
  const raku =  `*NAMA FILE :* "${json.filename}"\n\n*UKURAN FILE:* ${json.filesize}\n\n*TGL UPLOAD :* ${json.uploaded}\n\n*TYPE FILE:* ${json.filetype}\n\n*DESKRIPSI:* ${json.desc}\n\n*URL:* ${json.url}`
     conn.sendFile(m.chat, json.url, '', raku, m)
}
handler.help = ['mediafire <url>']
handler.tags = ['downloader']
handler.command = /^mediafire$/i
handler.group = false

handler.premium = true

module.exports = handler


//jgn di bully bg msih pemula

