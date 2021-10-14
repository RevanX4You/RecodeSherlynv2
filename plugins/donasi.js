let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Pulsa1 [081524805420]
│ • GOPAY [MINTA KE OWNER TOD!]
│ • pulsa2 [085714897009]
│ • udah mainin fitur kok ga donasi:v
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
