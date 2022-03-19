let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
  let res = await fetch(global.API('jojo', '/api/jadwaltv?ch=' + command, {}))
  if (res.status != 200) throw await res.te}
handler.help = ['nettv', 'rcti', 'mnctv', 'sctv', 'antv', 'indosiar', 'trans7', 'transtv', 'gtv']
handler.tags = ['jadwaltv']
handler.command = /^nettv|rcti|mnctv|sctv|antv|indosiar|trans7|transtv|gtv$/i

handler.premium = true

//JADWAL TV KAMI PREMIUM 

module.exports = handler
