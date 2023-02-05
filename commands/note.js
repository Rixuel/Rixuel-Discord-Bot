const { EmbedBuilder } = require("discord.js")

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

        embedDirectMessage = new EmbedBuilder()
            .setColor("#44DD00")
            .setTitle("Discord Note")
            .setDescription(str)
            .setTimestamp()
            .setFooter({ text: "The human whose name is written in this note shall be discorded." });

        receivedMessage.author.send({ embeds : [embedDirectMessage] })
    } else {
        receivedMessage.channel.send("Please use `" + prefix + "note <text>`")
    }
}

module.exports.note = note;
