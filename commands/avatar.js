const Discord = require("discord.js")

function avatar(arguments, receivedMessage) {
    const userForAvatar = receivedMessage.mentions.users.first() || receivedMessage.author;

    const avatarEmbed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setAuthor(userForAvatar.username + "#" + userForAvatar.discriminator)
        .setImage(userForAvatar.avatarURL({ format: 'png', dynamic: true, size: 1024 }))

    receivedMessage.channel.send(avatarEmbed)
}

module.exports.avatar = avatar;
