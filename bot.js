// Tuto: https://www.devdungeon.com/content/javascript-discord-bot-tutorial
const Discord = require('discord.js')
const client = new Discord.Client()
var auth = require('./auth.json');
var prefix = "c!";

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)

    // Set bot status to: "Playing with JavaScript"
    client.user.setActivity("Rixuel", {type: "PLAYING"})

    // List servers the bot is connected to
    console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log("-- " + guild.name)
    })
})

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return
    }

    if (receivedMessage.content.startsWith(prefix)) {
        processCommand(receivedMessage)
    }
})

function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(2) // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    // console.log("Command received: " + primaryCommand)
    // console.log("Arguments: " + arguments) // There may not be any arguments

    switch(primaryCommand) {
        case "help":
            helpCommand(arguments, receivedMessage)
        break;
        case "alterna":
            const webAttachment = new Discord.Attachment('https://alternaland.github.io/img/alternalogo.png')
            receivedMessage.channel.send(webAttachment)
        break;
        case "avatar":
            const userForAvatar = receivedMessage.mentions.users.first() || receivedMessage.author;

            if (arguments.length > 1){
                return
            }
            if (userForAvatar!=receivedMessage.mentions.users.first() && (arguments.length == 1)) {
                return
            }
            receivedMessage.channel.send("User: " + userForAvatar)
            receivedMessage.channel.send(userForAvatar.avatarURL)
        break;
        case "base64":
            base64Command(arguments, receivedMessage)
        break;
        case "countwords":
            countwordsCommand(arguments, receivedMessage)
        break;
        case "hex":
            hexCommand(arguments, receivedMessage)
        break;
        case "rixuel":
            receivedMessage.channel.send("Our lord and savior :3")
        break;
        case "dm":
            directMessageCommand(arguments, receivedMessage)
        break;
        default:
            receivedMessage.channel.send("I don't understand the command. Try `!help` or `!multiply`")
    }
}

function helpCommand(arguments, receivedMessage) {
    var helpMessage = "";

    helpMessage = "Prefix : " + prefix + "\n"
    + "-----\n"
    + "`avatar` : Get user avatar\n"
    + "`base64` : Encoding\n"
    + "`countwords` : Counting words\n"
    + "`hex` : Encoding\n"
    + "`dm` : Rixuel only command\n"
    + "-----\n";

    embedHelpMessage = new Discord.RichEmbed()
    .setColor('#44DD00')
	.setTitle('List of Commands')
	.setDescription(helpMessage)
	.setTimestamp()

    receivedMessage.channel.send(embedHelpMessage)
}

function base64Command(arguments, receivedMessage) {
    var str = '';
    if (arguments[0] == "encode") {
        for(var i=1; i<arguments.length; i++) {
            str += arguments[i];
            if (i<arguments.length-1){
                str += ' ';
            }
        }
        receivedMessage.channel.send(Buffer.from(str).toString('base64'))
    } else if (arguments[0] == "decode") {
        for(var i=1; i<arguments.length; i++) {
            str += arguments[i];
            if (i<arguments.length-1){
                str += ' ';
            }
        }
        receivedMessage.channel.send(Buffer.from(str, 'base64').toString('utf-8'))
    } else {
        receivedMessage.channel.send("Please use `" + prefix + "base64 encode <text>` or `" + prefix + "base64 decode <text>`")
    }
}

function countwordsCommand(arguments, receivedMessage) {
    if (arguments.length < 1) {
        receivedMessage.channel.send('I can\'t count nothing, silly! <_<')
    } else {
        receivedMessage.channel.send(arguments.length + " words")
    }
}

function directMessageCommand(arguments, receivedMessage) {
    var str = "";
    const getSpecificUser = receivedMessage.mentions.users.first() || receivedMessage.author;
    let embedDirectMessage = "";

    console.log("receivedMessage.author : " + receivedMessage.author)
    console.log("getSpecificUser: " + getSpecificUser + " = " + arguments[0])
    console.log("getSpecificUser.id: " + getSpecificUser.id)

    if (receivedMessage.author.id != "216440326796214274") {
        receivedMessage.channel.send("Only Rixuel can give me this command >:D")
        return
    }

    if ((arguments.length < 2)) {
        receivedMessage.channel.send("Please use `" + prefix + "dm @user <text>`")
        return
    }

    for(var i=1; i<arguments.length; i++) {
        str += arguments[i];
        if (i<arguments.length-1){
            str += ' ';
        }
    }

    embedDirectMessage = new Discord.RichEmbed()
    .setColor('#CCCC00')
    .setDescription(str);

    ///console.log("str: " + str)

    client.users.get(getSpecificUser.id).send(embedDirectMessage).catch(function () {
        return
    });
    receivedMessage.channel.send("Message delivered ;)")
}

function hexCommand(arguments, receivedMessage) {
    var str = '';
    if (arguments[0] == "encode") {
        for(var i=1; i<arguments.length; i++) {
            str += arguments[i];
            if (i<arguments.length-1){
                str += ' ';
            }
        }
        receivedMessage.channel.send(Buffer.from(str).toString('hex'))
    } else if (arguments[0] == "decode") {
        for(var i=1; i<arguments.length; i++) {
            str += arguments[i];
            if (i<arguments.length-1){
                str += ' ';
            }
        }
        receivedMessage.channel.send(Buffer.from(str, 'hex').toString('utf-8'))
    } else {
        receivedMessage.channel.send("Please use `" + prefix + "hex encode <text>` or `" + prefix + "hex decode <text>`")
    }
}


// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"

//bot_secret_token = auth.token
//client.login(bot_secret_token)
client.login(process.env.BOT_TOKEN)
