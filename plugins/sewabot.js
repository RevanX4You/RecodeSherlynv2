let handler = async m => m.reply(`
*「 LIST HARGA SEWA BOT 」*

❒ Sewa = _2k/grup (1 minggu)_
❒ Sewa = _5k/grup (2 minggu)_
❒ Sewa = _10k/grup (Permanen)_
❒ Free = _30 menit Bot Masuk Ke Group Kalian Setelah Itu Bot Akan Keluar_

◪ *PEMBAYARAN BISA MELALUI*

❒ _PULSA_
❒ _GOPAY_
❒ KOSONG
❒ KOSONG

◪ 𝙆𝙀𝙐𝙉𝙏𝙐𝙉𝙂𝘼𝙉 𝙎𝙀𝙒𝘼 𝘽𝙊𝙏

❒ *BISA LIAT B0K3P*
❒ *Limit UNLIMITED*
❒ *Bisa Menyuruh Bot Buka/Tutup Group*
❒ *Kick Orang*
❒ *Add Orang*
❒ *Anti Link On*
❒ *Fitur Game Banyak Sepuas Nya Main*
❒ *Bisa Memasukkan Bot Ke dalam Grup*

◪ *Jika Minat Hubungi owner kami*
◪ *Atau Masuk Group Official Bot*
https://chat.whatsapp.com/HElCJddnzFuJH8uCHkhJuH

Ingin Jadi Bot Seperti ini?
ketik #jadibot
`.trim()) // Tambah sendiri kalo mau
handler.help = ['sewabot', 'buypremium']
handler.tags = ['main']
handler.command = /^(sewabot|buypremium)$/i

handler.limit = false

module.exports = handler
