let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('http://docs-jojo.herokuapp.com/api/jadwaltvnow')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.result) throw 'Error!'
  conn.reply(m.chat, json.result, m)
}
handler.help = ['tvnow']
handler.tags = ['tv']
handler.command = /^(tvnow)$/i

handler.premium = true
handler.register = true
//MADE JADWAL TV KAMI PREMIUM BOSS
module.exports = handler
