const { Client, EmbedBuilder, Events, GatewayIntentBits } = require("discord.js")
const client = new Client({ 
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.MessageContent
    ]
});
const cooldown = new Set();
//const { token } = require("./auth.json");

var AdminLord = require("./commands/adminlord.js");
var Advice = require("./commands/advice.js");
var Alias = require("./commands/alias.js");
var Avatar = require("./commands/avatar.js");
var Bored = require("./commands/bored.js");
var CountWords = require("./commands/countwords.js");
var CountChars = require("./commands/countchars.js");
var Cryptode = require("./commands/cryptode.js");
var Dictum = require("./commands/dictum.js");
var Drunk = require("./commands/drunk.js");
var Fortune = require("./commands/fortune.js");
var Note = require("./commands/note.js");
var Roll = require("./commands/roll.js");
var RPGday = require("./commands/rpgday.js");
var ServerInfo = require("./commands/serverinfo.js");
var Techy = require("./commands/techy.js");
var UselessFacts = require("./commands/uselessfacts.js");
var UserInfo = require("./commands/userinfo.js");
var Xkcd = require("./commands/xkcd.js");
var tryCMD = require("./commands/try.js");
var prefix = "c!";

client.once(Events.ClientReady, c => {
	console.log(`Connected as ${c.user.tag}`);

    // Bot status Type: Playing=0, Streaming=1, Listening=2, Watching=3, Custom=4, Competing=5
    client.user.setPresence({ 
        activities: [{ 
            name: "by Rixuel orders", 
            type: 1,
            url: "https://www.twitch.tv/LordRixuel"
        }] 
    });

    // List servers the bot is connected to
    console.log("Servers:")
    client.guilds.cache.forEach((guild) => {
        console.log("-- " + guild.name)
    })
});

client.on(Events.MessageCreate, async receivedMessage => {
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
        case "advice":
            Advice.advice(arguments, receivedMessage)
            break
        case "alias":
        case "ag":
            Alias.alias(prefix, arguments, receivedMessage)
            break;
        case "alterna":
            receivedMessage.channel.send({ files: [{ attachment: 'https://alternaland.github.io/img/alternalogo.png' }] })
            break;
        case "avatar":
            Avatar.avatar(arguments, receivedMessage)
            break;
        case "base64":
        case "b64":
            Cryptode.base64(prefix, arguments, receivedMessage)
            break;
        case "binary":
        case "bin":
            Cryptode.binary(prefix, arguments, receivedMessage)
            break;
        case "bored":
            Bored.bored(arguments, receivedMessage)
            break;
        case "countwords":
        case "cw":
            CountWords.countwords(arguments, receivedMessage)
            break;
        case "countchars":
        case "cc":
            CountChars.countchars(arguments, receivedMessage)
            break;
        case "dictum":
            Dictum.dictum(arguments, receivedMessage)
            break;
        case "drunk":
        case "high":
            Drunk.drunk(arguments, receivedMessage)
            break;
        case "fortune":
            Fortune.fortune(prefix, arguments, receivedMessage)
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
            receivedMessage.channel.send(`:ping_pong: Latency is `+
                `**${Date.now() - receivedMessage.createdTimestamp}ms**. `+
                `API Latency is **${Math.round(client.ws.ping)}ms**.`);
            break;
        case "prefix":
            receivedMessage.channel.send("The prefix is: `" + prefix + "`")
            break;
        case "rixuel":
            receivedMessage.channel.send({ content: "The creator" })
            break;
        case "roll":
            Roll.roll(prefix, arguments, receivedMessage)
            break;
        case "rpgday":
        case "rd":
            if (cooldown.has(receivedMessage.author.id)) {
                receivedMessage.channel.send("Wait 1 hour before getting typing this again, " + receivedMessage.author.username);
            } else {
                RPGday.rpgday(arguments, receivedMessage);

                // Adds the user to the set so that they can't talk
                cooldown.add(receivedMessage.author.id);
                setTimeout(() => {
                    // Removes the user from the set after a minute
                    cooldown.delete(receivedMessage.author.id);
                }, 3600000); // 3600000 = 1 hour
            }
            break;
        case "rot":
            Cryptode.rot(prefix, arguments, receivedMessage)
            break;
        case "say":
            let sayStr = receivedMessage.content
            if (arguments.length == 0) {
                receivedMessage.channel.send("Please use `" + prefix + "say <text>`")
                return
            } else {
                receivedMessage.channel.send(sayStr.replace(prefix + "say", ""))
                receivedMessage.delete()
            }
            break;
        case "serverinfo":
        case "si":
            ServerInfo.serverinfo(arguments, receivedMessage)
            break;
        case "shame":
            receivedMessage.channel.send({ files: [{ attachment: 'https://i.imgur.com/TVm8XCy.jpg' }] })
            break;
        case "techy":
            Techy.techy(arguments, receivedMessage)
            break;
        case "uselessfacts":
        case "uf":
            UselessFacts.uselessfacts(arguments, receivedMessage)
            break;
        case "userinfo":
        case "ui":
            UserInfo.userinfo(arguments, receivedMessage)
            break;
        case "wrong":
            receivedMessage.channel.send({ files: [{ attachment: 'https://media.giphy.com/media/L4aGJ659bvSRtw07RZ/giphy.gif' }] })
            break;
        case "troll":
            receivedMessage.channel.send("<Troll message here>")
            break;
        case "xkcd":
            Xkcd.xkcd(arguments, receivedMessage)
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
    let embedHelpMessage = new EmbedBuilder()
        .setColor("#DFDAD0")
        .setTitle("List of Commands")
        .setDescription("Prefix : `" + prefix + "`")
        .addFields([
            { 
                name: "Basic", 
                value: 
                "`avatar` : Get user avatar\n" +
                "`ping` : Pong!\n" +
                "`prefix` : Bot's prefix\n" +
                "`say` : Tell the bot what to say\n" +
                "`serverinfo`, `si` : Server information\n" +
                "`userinfo`, `ui` : User information\n",
                inline: true
            },
            { 
                name: "Encoding", 
                value: 
                "`base64`, `b64` : Encoding\n" +
                "`binary`, `bin` : Encoding\n" +
                "`hex` : Encoding\n" +
                "`rot` : Substitution cipher\n",
                inline: true
            },
            { 
                name: "Utility", 
                value: 
                "`countchars`, `cc` : Counting characters (including space)\n" +
                "`countwords`, `cw` : Counting words\n" +
                "`note` : Note for yourself\n"
            },
            { 
                name: "Fun", 
                value: 
                "`alias`, `ag` : Alias name generator\n" +
                "`drunk`, `high` : Bot is drunk or high and makes no sense\n" +
                "`fortune` : Imitation of Fortune UNIX Command\n" +
                "`roll` : Roll a dice or between a range of numbers\n" +
                "`rpgday`, `rd` : Check your RPG Day\n" +
                "`shame` : Game of Thrones Shame\n" +
                "`wrong` : IGA throwing glass of wine\n",
                inline: false
            },
            { 
                name: "Random", 
                value: 
                "`advice` : Generate random advice slips\n" +
                "`bored` : Random activities to fight boredom\n" +
                "`dictum` : Expressions of mankind\n" +
                "`techy` : Tech-savvy sounding phrases\n" +
                "`uselessfacts`, `uf` : Get useless, but true facts\n" +
                "`xkcd` : xkcd comics\n"
            }
        ])
        .setFooter({ text: "Bot made by Rixuel" })
        .setTimestamp();

    receivedMessage.channel.send({ embeds : [embedHelpMessage] })
}

// https://discordapp.com/developers/applications/
// Application -> Bot -> Token

//client.login(token)
client.login(process.env.TOKEN)
//