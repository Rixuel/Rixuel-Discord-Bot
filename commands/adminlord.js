const { EmbedBuilder } = require("discord.js")

function directmessage(prefix, arguments, receivedMessage) {
    const getSpecificUser = receivedMessage.mentions.users.first(); // || receivedMessage.author;
    let str = "";
    
    //console.log("arguments.length: " + arguments.length);
    //console.log("arguments[0]: " + arguments[0]);
    //console.log("receivedMessage.author : " + receivedMessage.author)
    //console.log("getSpecificUser: " + getSpecificUser + " = " + arguments[0])

    if (arguments.length < 2 || arguments[0].slice(2, -1) != getSpecificUser) {
        receivedMessage.channel.send("Please use `" + prefix + "dm @user <text>`")
        return
    }

    if (receivedMessage.author.id != "216440326796214274") {
        receivedMessage.channel.send("Only Rixuel can give me this command >:D")
        return
    }

    for (var i = 1; i < arguments.length; i++) {
        str += arguments[i];
        if (i < arguments.length - 1) {
            str += " ";
        }
    }

    const embedDirectMessage = new EmbedBuilder()
        .setColor("#CCCC00")
        .setTitle("Message")
        .setDescription(str)
        .setFooter({ text: "This is a bot message. Don't reply back." });

    //console.log("str: " + str)

    getSpecificUser.send({ embeds : [embedDirectMessage] }).catch(function() {
        receivedMessage.channel.send("Wait... Message is not delivered because you can't direct message a bot o.o")
        return
    });

    receivedMessage.channel.send("Message delivered ;)")
}

function getid(prefix, arguments, receivedMessage) {
    const getSpecificUser = receivedMessage.mentions.users.first();
    let privateMessage = "";

    if (receivedMessage.author.id != "216440326796214274") {
        receivedMessage.channel.send("Only Rixuel can give me this command >:D")
        return
    }

    //console.log("arguments: " + arguments);
    //console.log("arguments.length: " + arguments.length);
    if (arguments.length != 1 || !getSpecificUser) {
        receivedMessage.channel.send("Please use `" + prefix + "getid @user`")
        return
    }

    privateMessage = "**" + getSpecificUser.tag + "** ID is: `" + getSpecificUser.id + "`";

    receivedMessage.author.send(privateMessage).catch(function() {
        return
    });
    receivedMessage.channel.send("You got it")
}

module.exports.directmessage = directmessage;
module.exports.getid = getid;
