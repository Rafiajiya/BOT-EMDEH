let fetch = require('node-fetch')
let handler = async function (m, { text, isPrems, isOwner }) {
	let user = global.db.data.users[m.sender]
    if (!text) throw '_Soalnya Mana ?_'
    await m.reply(global.wait)
  let res = await fetch(global.API('xteam', '/brainly', { soal: text}, 'apikey'))
let json= await res.json()
  const raku =  `${json.soal}\n\n{json.jawaban}`
     conn.reply(m.chat, raku, m)
}
handler.help = ['brainly <soal>']
handler.tags = ['edukasi']
handler.command = /^brainly$/i
handler.group = false

handler.limit = 5


module.exports = handler


//jgn di bully bg msih pemula