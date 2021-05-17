const Discord = require("discord.js")
const client = new Discord.Client()

function tryCommands(arguments, receivedMessage) {
    receivedMessage.channel.send("Try commands")
}

module.exports.tryCommands = tryCommands; // export your function
