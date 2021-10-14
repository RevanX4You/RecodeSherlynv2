let handler = m => m

handler.all = async function (m) {
    if (m.mtype === 'groupInviteMessage') {
        m.reply(`Lihat Anak Anjg Mau ngulik Gua Makanya sewa Tod:v`)
        this.sendContact(m.chat, '6285714897009', 'RamadhanXdあ', m)
    }
}

module.exports = handler
