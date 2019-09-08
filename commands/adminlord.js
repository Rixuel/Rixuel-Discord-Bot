const Discord = require("discord.js")

function directmessage(prefix, arguments, receivedMessage) {
    const getSpecificUser = receivedMessage.mentions.users.first() || receivedMessage.author;
    var embedDirectMessage = "";
    var str = "";

    console.log("receivedMessage.author : " + receivedMessage.author)
    console.log("getSpecificUser: " + getSpecificUser + " = " + arguments[0])
    console.log("getSpecificUser.id: " + getSpecificUser.id)

    if (receivedMessage.author.id != "216440326796214274") {
        receivedMessage.channel.send("Only Rixuel can give me this command >:D")
        return
    }

    if (arguments.length < 2) {
        receivedMessage.channel.send("Please use `" + prefix + "dm @user <text>`")
        return
    }

    for (var i = 1; i < arguments.length; i++) {
        str += arguments[i];
        if (i < arguments.length - 1) {
            str += " ";
        }
    }

    embedDirectMessage = new Discord.RichEmbed()
        .setColor("#CCCC00")
        .setTitle("Message")
        .setDescription(str)
        .setFooter("This is a bot message. Don't reply back.");

    //console.log("str: " + str)

    getSpecificUser.send(embedDirectMessage).catch(function() {
        receivedMessage.channel.send("Wait... Message is not delivered because you can't direct message a bot :(")
        return
    });

    receivedMessage.channel.send("Message delivered ;)")
}

module.exports.directmessage = directmessage;
