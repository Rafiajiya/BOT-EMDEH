let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
    if (!text) throw `Harap masukkan URL sebagai parameter.\n\nContoh: ${usedPrefix + command} https://vt.tiktok.com/ZSeSCAN1W/`
    let res = await fetch(global.API('zekais', '/tiktokmusic', { url: text }, 'apikey'))
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    await conn.sendFile(m.chat, json.result, 'tt.mp3', '', m)
}
handler.help = ['tiktokaudio <url>']
handler.tags = ['downloader']
handler.command = /^tiktokaudio <url>$/i
handler.limit = 6
module.exports = handler


