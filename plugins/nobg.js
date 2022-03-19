const uploadImage = require('../lib/uploadImage') 
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
 try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img)
  let wanted = `http://docs-jojo.herokuapp.com/api/remove-bg?url=${url}`
    conn.sendFile(m.chat, wanted, '', 'bg nya gnti g sih ?', m)
 } catch (e) {
   m.reply('Mungkin background tidak terdeteksi')
  }
}
handler.help = ['removebg <reply foto>']
handler.tags = ['maker']
handler.command = /^removebg$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
