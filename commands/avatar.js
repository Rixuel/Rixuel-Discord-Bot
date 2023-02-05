const { EmbedBuilder } = require("discord.js")

function avatar(arguments, receivedMessage) {
    const userForAvatar = receivedMessage.mentions.users.first() || receivedMessage.author;
    const displayUserAvatar = userForAvatar.displayAvatarURL({ dynamic: true, size: 1024, extension: 'png' })
    //console.log("userForAvatar= " + userForAvatar)
    //console.log("displayUserAvatar= " + displayUserAvatar)

    const avatarEmbed = new EmbedBuilder()
        .setColor('#000000')
        .setAuthor({ name: userForAvatar.tag })
        .setImage(displayUserAvatar)

    receivedMessage.channel.send({ embeds : [avatarEmbed] })
}

module.exports.avatar = avatar;
