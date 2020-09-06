const Discord = require("discord.js")
const client = new Discord.Client()
const cooldown = new Set();
//var auth = require("./auth.json");
var AdminLord = require("./commands/adminlord.js");
var Alias = require("./commands/alias.js");
var CountWords = require("./commands/countwords.js");
var Cryptode = require("./commands/cryptode.js");
var Drunk = require("./commands/drunk.js");
var Fortune = require("./commands/fortune.js");
var Note = require("./commands/note.js");
var Roll = require("./commands/roll.js");
var RPGday = require("./commands/rpgday.js");
var ServerInfo = require("./commands/serverinfo.js");
var UserInfo = require("./commands/userinfo.js");
var tryCMD = require("./commands/try.js");
var prefix = "c!";

client.on("ready", () => {
    console.log("Connected as " + client.user.tag)

    // Set bot status to: "Playing with JavaScript"
    client.user.setActivity("Rixuel", {
        type: "LISTENING"
    })

    // List servers the bot is connected to
    console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log("-- " + guild.name)
    })
})

client.on("message", (receivedMessage) => {
    const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
    const thisPrefix = receivedMessage.content.match(prefixMention) ? receivedMessage.content.match(prefixMention)[0] : prefix;

    if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return
    }

    if (receivedMessage.content.startsWith(thisPrefix)) {
        processCommand(receivedMessage, thisPrefix)
    }
})

function processCommand(receivedMessage, thisPrefix) {
    let fullCommand = receivedMessage.content.substr(thisPrefix.length) // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    //console.log("thisPrefix.length: " + thisPrefix.length)
    //console.log("Command received: " + primaryCommand)
    //console.log("Arguments: " + arguments) // There may not be any arguments

    switch (primaryCommand) {
        case "help":
            help(arguments, receivedMessage)
            break;
        case "alias":
        case "ag":
            Alias.alias(prefix, arguments, receivedMessage)
            break;
        case "alterna":
            const webAttachment = new Discord.Attachment("https://alternaland.github.io/img/alternalogo.png")
            receivedMessage.channel.send(webAttachment)
            break;
        case "avatar":
            const userForAvatar = receivedMessage.mentions.users.first() || receivedMessage.author;

            if ((arguments.length > 1) || (!receivedMessage.mentions.users.first() && (arguments.length == 1))) {
                return
            }

            receivedMessage.channel.send(
                "Avatar of " + userForAvatar + "\n" +
                userForAvatar.avatarURL
            )
            break;
        case "base64":
            Cryptode.base64(prefix, arguments, receivedMessage)
            break;
        case "countwords":
        case "cw":
            CountWords.countwords(arguments, receivedMessage)
            break;
        case "drunk":
            Drunk.drunk(arguments, receivedMessage)
            break;
        case "fortune":
            Fortune.fortune(prefix, arguments, receivedMessage)
            break;
        case "galatea":
            receivedMessage.channel.send("Yep, that's me")
            break;
        case "hex":
            Cryptode.hex(prefix, arguments, receivedMessage)
            break;
        case "hi":
            receivedMessage.channel.send("Hiya ^^")
            break;
        case "note":
            Note.note(prefix, arguments, receivedMessage)
            break;
        case "ping":
            receivedMessage.channel.send("`" + (new Date().getTime() - receivedMessage.createdTimestamp) + " ms`");
            break;
        case "prefix":
            receivedMessage.channel.send("The prefix is: `" + prefix + "`")
            break;
        case "rixuel":
            receivedMessage.channel.send("Our lord and savior :3")
            break;
        case "roll":
            Roll.roll(prefix, arguments, receivedMessage)
            break;
        case "rpgday":
        case "rd":
            if (cooldown.has(receivedMessage.author.id)) {
                receivedMessage.channel.send("Wait 1 hour before getting typing this again, " + receivedMessage.author);
            } else {
                RPGday.rpgday(arguments, receivedMessage);

                // Adds the user to the set so that they can't talk
                cooldown.add(receivedMessage.author.id);
                setTimeout(() => {
                    // Removes the user from the set after a minute
                    cooldown.delete(receivedMessage.author.id);
                }, 3600000);
            }
            break;
        case "serverinfo":
            ServerInfo.serverinfo(arguments, receivedMessage)
            break;
        case "shame":
            const shameAttachment = new Discord.Attachment("https://i.imgur.com/TVm8XCy.jpg")
            receivedMessage.channel.send(shameAttachment)
            break;
        case "userinfo":
            UserInfo.userinfo(arguments, receivedMessage)
            break;
        case "wrong":
            const wrongAttachment = new Discord.Attachment("https://media.giphy.com/media/L4aGJ659bvSRtw07RZ/giphy.gif")
            receivedMessage.channel.send(wrongAttachment)
            break;
        case "troll":
            receivedMessage.channel.send("<Troll message here>")
            break;
        case "dm":
            AdminLord.directmessage(prefix, arguments, receivedMessage)
            break;
        case "getid":
            AdminLord.getid(prefix, arguments, receivedMessage)
            break;
        case "c":
            tryCMD.tryCommands(arguments, receivedMessage)
            break;
        default:
            receivedMessage.channel.send("I don't understand the command. Try `" + prefix + "help`")
    }
}

function help(arguments, receivedMessage) {
    let embedHelpMessage = new Discord.RichEmbed()
        .setColor("#DFDAD0")
        .setTitle("List of Commands")
        .setDescription("Prefix : " + prefix)
        .addField("Basic",
        "`avatar` : Get user avatar\n" +
        "`ping` : Pong!\n" +
        "`prefix` : Bot's prefix\n" +
        "`serverinfo` : Server information\n" +
        "`userinfo` : User information\n"
        )
        .addField("Encoding",
        "`base64` : Encoding\n" +
        "`hex` : Encoding\n"
        )
        .addField("Fun",
        "`alias`, `ag` : Alias name generator\n" +
        "`drunk` : Bot is drunk and isn't making sense\n" +
        "`fortune` : Imitation of Fortune UNIX Command\n" +
        "`roll` : Roll a dice or between a range of numbers\n" +
        "`rpgday`, `rd` : Check your RPG Day\n" +
        "`shame` : Game of Thrones Shame\n" +
        "`wrong` : IGA throwing glass of wine\n"
        )
        .addField("Utility",
        "`countwords`, `cw` : Counting words\n" +
        "`note` : Note for yourself\n"
        )
        .setTimestamp()
        .setFooter("Bot made by Rixuel");

    receivedMessage.channel.send(embedHelpMessage)
}

// https://discordapp.com/developers/applications/
// Application -> Bot -> Token

//client.login(auth.token)
client.login(process.env.BOT_TOKEN)
