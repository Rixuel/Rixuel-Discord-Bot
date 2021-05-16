const Discord = require("discord.js")

function note(prefix, arguments, receivedMessage) {
    var str = "";
    let embedDirectMessage = "";

    if (arguments.length > 0) {
        for (var i = 0; i < arguments.length; i++) {
            str += arguments[i];
            if (i < arguments.length - 1) {
                str += " ";
            }
        }

        embedDirectMessage = new Discord.MessageEmbed()
            .setColor("#44DD00")
            .setTitle("Discord Note")
            .setDescription(str)
            .setTimestamp()
            .setFooter("The human whose name is written in this note shall be discorded.");

        receivedMessage.author.send(embedDirectMessage)
    } else {
        receivedMessage.channel.send("Please use `" + prefix + "note <text>`")
    }
}

module.exports.note = note;
