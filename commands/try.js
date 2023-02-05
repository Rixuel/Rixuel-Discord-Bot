const { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle } = require("discord.js")

function tryCommands(arguments, receivedMessage) {
    receivedMessage.channel.send("Try commands")
}

module.exports.tryCommands = tryCommands; // export your function
