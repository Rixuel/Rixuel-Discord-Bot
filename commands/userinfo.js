const { EmbedBuilder } = require("discord.js")

async function userinfo(arguments, receivedMessage) {
    const theUser = receivedMessage.mentions.users.first() || receivedMessage.author;
    const member = await receivedMessage.guild.members.fetch(theUser.id);

    const embed = new EmbedBuilder()
        .setColor("#44DD00")
        .setTitle(receivedMessage.guild.members.cache.get(theUser.id).displayName)
        .setDescription(`**${theUser.username}**#${theUser.discriminator}`)
        .setThumbnail(theUser.displayAvatarURL())
        .addFields([
            {
                name: "Roles",
                value: `[ ${member.roles.cache.map(r => `${r}`).join(' | ')} ]`,
                inline: false
            },
            {
                name: "Joined Server",
                value: 
                `<t:${parseInt(member.joinedAt / 1000)}:F> ` + 
                `[<t:${parseInt(member.joinedAt / 1000)}:R>]`,
                inline: false
            },
            {
                name: "Joined Discord",
                value: 
                `<t:${parseInt(theUser.createdAt / 1000)}:F> ` +
                `[<t:${parseInt(theUser.createdAt / 1000)}:R>]`,
                inline: false
            }
        ])
        .setFooter({ text: theUser.id })
        .setTimestamp()

    if ((arguments.length > 1) || (!receivedMessage.mentions.users.first() && (arguments.length == 1))) {
        return
    }

    receivedMessage.channel.send({ embeds : [embed] })
}

module.exports.userinfo = userinfo;
