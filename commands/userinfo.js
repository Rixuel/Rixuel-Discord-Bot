const Discord = require("discord.js")

function userinfo(arguments, receivedMessage) {
    const theUser = receivedMessage.mentions.users.first() || receivedMessage.author;

    let activities = theUser.presence.activities.toString();
    // MessageEmbed doesn't allow empty value
    if (activities == "") {
        activities = "None";
    }

    const embed = new Discord.MessageEmbed()
        .setColor("#44DD00")
        .setTitle(receivedMessage.guild.members.cache.get(theUser.id).displayName)
        .setDescription(`**${theUser.username}**#${theUser.discriminator}`)
        .setThumbnail(theUser.avatarURL())
        .addField("Status", String(theUser.presence.status).toUpperCase(), true)
        .addField("Activities", `${activities}`, true)
        .addField("Roles: \n", `[ ${receivedMessage.guild.member(theUser).roles.cache.map(r => `${r}`).join(' | ')} ]`)
        .addField("Joined Discord: \n", theUser.createdAt.toUTCString())
        .addField("Joined Server: \n", receivedMessage.guild.member(theUser).joinedAt.toUTCString())
        .setFooter(theUser.id)
        .setTimestamp()

    if ((arguments.length > 1) || (!receivedMessage.mentions.users.first() && (arguments.length == 1))) {
        return
    }

    receivedMessage.channel.send(embed)
}

module.exports.userinfo = userinfo;
