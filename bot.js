const Discord = require("discord.js")
const client = new Discord.Client()
const cooldown = new Set();
var Alias = require("./alias.json");
var RPGDay = require("./rpgday.json");
var auth = require("./auth.json");
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

    switch (primaryCommand) {
        case "help":
            helpCommand(arguments, receivedMessage)
            break;
        case "alias":
        case "ag":
            aliasCommand(arguments, receivedMessage)
            break;
        case "alterna":
            const webAttachment = new Discord.Attachment("https://alternaland.github.io/img/alternalogo.png")
            receivedMessage.channel.send(webAttachment)
            break;
        case "avatar":
            const userForAvatar = receivedMessage.mentions.users.first() || receivedMessage.author;

            if (arguments.length > 1) {
                return
            }
            if (userForAvatar != receivedMessage.mentions.users.first() && (arguments.length == 1)) {
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
        case "hi":
            receivedMessage.channel.send("Hiya ^^")
            break;
        case "note":
            noteCommand(arguments, receivedMessage)
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
        case "rpgday":
        case "rd":
            if (cooldown.has(receivedMessage.author.id)) {
                receivedMessage.channel.send("Wait 1 hour before getting typing this again, " + receivedMessage.author);
            } else {
                rpgdayCommand(arguments, receivedMessage);

                // Adds the user to the set so that they can't talk
                cooldown.add(receivedMessage.author.id);
                setTimeout(() => {
                    // Removes the user from the set after a minute
                    cooldown.delete(receivedMessage.author.id);
                }, 3600000);
            }
            break;
        case "dm":
            directMessageCommand(arguments, receivedMessage)
            break;
        case "c":
            receivedMessage.channel.send("Test")
            break;
        default:
            receivedMessage.channel.send("I don't understand the command. Try `" + prefix + "help`")
    }
}

function helpCommand(arguments, receivedMessage) {
    var helpMessage = "";

    helpMessage = "Prefix : " + prefix + "\n" +
        "-----\n" +
        "`alias`, `ag` : Alias name generator\n" +
        "`avatar` : Get user avatar\n" +
        "`base64` : Encoding\n" +
        "`countwords` : Counting words\n" +
        "`hex` : Encoding\n" +
        "`note` : Note for yourself\n" +
        "`ping` : Pong!\n" +
        "`prefix` : Bot's prefix\n" +
        "`rpgday`, `rd` : Check your RPG Day\n" +
        "`dm` : Rixuel only command\n" +
        "-----\n";

    embedHelpMessage = new Discord.RichEmbed()
        .setColor("#DFDAD0")
        .setTitle("List of Commands")
        .setDescription(helpMessage)
        .setTimestamp()
        .setFooter("Bot made by Rixuel");

    receivedMessage.channel.send(embedHelpMessage)
}

function aliasCommand(arguments, receivedMessage) {
    let aliasHelpMessage = "Please use `" + prefix + "alias <gender> <title>` or `" + prefix + "ag <gender> <title>`\n" +
    "\n**Values for:**\n" +
    "`<gender>` = `female`, `f`, `male`, `m`\n" +
    "`<title>` = `title`, `t`\n" +
    "\n**Examples:**\n" +
    "`" + prefix + "alias male title`\n" +
    "`" + prefix + "ag female t`\n" +
    "`" + prefix + "ag male`\n" +
    "`" + prefix + "ag f`\n";

    let f_prefixArray = Alias.female.prefix;
    let f_SuffixArray = Alias.female.suffix;
    let m_prefixArray = Alias.male.prefix;
    let m_SuffixArray = Alias.male.suffix;
    let titleArray = Alias.title;

    let f_PrefixLength = Alias.female.prefix.length;
    let f_SuffixLength = Alias.female.suffix.length;
    let m_PrefixLength = Alias.male.prefix.length;
    let m_SuffixLength = Alias.male.suffix.length;
    let titleLength = Alias.title.length;

    let t_alias = titleArray[Math.floor(Math.random()*titleLength)] + " ";
    let m_alias = m_prefixArray[Math.floor(Math.random()*m_PrefixLength)]+m_SuffixArray[Math.floor(Math.random()*m_SuffixLength)];
    let f_alias = f_prefixArray[Math.floor(Math.random()*f_PrefixLength)]+f_SuffixArray[Math.floor(Math.random()*f_SuffixLength)];

    if (arguments[0] == "female" || arguments[0] == "f") {
        if ((arguments[1] == "title" || arguments[1] == "t") && arguments.length==2) {
            receivedMessage.channel.send("**Your female fantasy alias will be:**")
            receivedMessage.channel.send("`" +
                t_alias +
                f_alias +
                "`"
            )
        } else if (arguments.length==1){
            receivedMessage.channel.send("**Your female fantasy alias will be:**")
            receivedMessage.channel.send("`" +
                f_alias +
                "`"
            )
        } else {
            receivedMessage.channel.send(aliasHelpMessage)
        }
    } else if (arguments[0] == "male" || arguments[0] == "m") {
        if ((arguments[1] == "title" || arguments[1] == "t") && arguments.length==2) {
            receivedMessage.channel.send("**Your male fantasy alias will be:**")
            receivedMessage.channel.send("`" +
                t_alias +
                m_alias +
                "`"
            )
        } else if (arguments.length==1){
            receivedMessage.channel.send("**Your male fantasy alias will be:**")
            receivedMessage.channel.send("`" +
                m_alias +
                "`"
            )
        } else {
            receivedMessage.channel.send(aliasHelpMessage)
        }
    } else {
        receivedMessage.channel.send(aliasHelpMessage)
    }
}

function base64Command(arguments, receivedMessage) {
    var str = "";
    if (arguments[0] == "encode") {
        for (var i = 1; i < arguments.length; i++) {
            str += arguments[i];
            if (i < arguments.length - 1) {
                str += " ";
            }
        }
        receivedMessage.channel.send(Buffer.from(str).toString("base64"))
    } else if (arguments[0] == "decode") {
        for (var i = 1; i < arguments.length; i++) {
            str += arguments[i];
            if (i < arguments.length - 1) {
                str += " ";
            }
        }
        receivedMessage.channel.send(Buffer.from(str, "base64").toString("utf-8"))
    } else {
        receivedMessage.channel.send("Please use `" + prefix + "base64 encode <text>` or `" + prefix + "base64 decode <text>`")
    }
}

function countwordsCommand(arguments, receivedMessage) {
    if (arguments.length < 1) {
        receivedMessage.channel.send("I can\'t count nothing, silly! <_<")
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
        .setDescription(str);

    ///console.log("str: " + str)

    client.users.get(getSpecificUser.id).send(embedDirectMessage).catch(function() {
        return
    });
    receivedMessage.channel.send("Message delivered ;)")
}

function hexCommand(arguments, receivedMessage) {
    var str = "";
    if (arguments[0] == "encode") {
        for (var i = 1; i < arguments.length; i++) {
            str += arguments[i];
            if (i < arguments.length - 1) {
                str += " ";
            }
        }
        receivedMessage.channel.send(Buffer.from(str).toString("hex"))
    } else if (arguments[0] == "decode") {
        for (var i = 1; i < arguments.length; i++) {
            str += arguments[i];
            if (i < arguments.length - 1) {
                str += " ";
            }
        }
        receivedMessage.channel.send(Buffer.from(str, "hex").toString("utf-8"))
    } else {
        receivedMessage.channel.send("Please use `" + prefix + "hex encode <text>` or `" + prefix + "hex decode <text>`")
    }
}

function noteCommand(arguments, receivedMessage) {
    var str = "";
    let embedDirectMessage = "";

    if (arguments.length > 0) {
        for (var i = 0; i < arguments.length; i++) {
            str += arguments[i];
            if (i < arguments.length - 1) {
                str += " ";
            }
        }

        embedDirectMessage = new Discord.RichEmbed()
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

function rpgdayCommand(arguments, receivedMessage) {
    let embedRPGDayMessage = "";

    let zones = RPGDay.zone[Math.floor(Math.random() * RPGDay.zone.length)] + "\n" +
        RPGDay.zone[Math.floor(Math.random() * RPGDay.zone.length)] + "\n" +
        RPGDay.zone[Math.floor(Math.random() * RPGDay.zone.length)] + "\n";

    let topAllySigns = RPGDay.astrology[Math.floor(Math.random() * RPGDay.astrology.length)] + "\n" +
        RPGDay.astrology[Math.floor(Math.random() * RPGDay.astrology.length)] + "\n" +
        RPGDay.astrology[Math.floor(Math.random() * RPGDay.astrology.length)] + "\n";

    let topPets = RPGDay.pet[Math.floor(Math.random() * RPGDay.pet.length)] + "\n" +
        RPGDay.pet[Math.floor(Math.random() * RPGDay.pet.length)] + "\n" +
        RPGDay.pet[Math.floor(Math.random() * RPGDay.pet.length)] + "\n";

    let arsenal = RPGDay.arsenal[Math.floor(Math.random() * RPGDay.arsenal.length)] + " | " +
        RPGDay.arsenal[Math.floor(Math.random() * RPGDay.arsenal.length)] + " | " +
        RPGDay.arsenal[Math.floor(Math.random() * RPGDay.arsenal.length)] + " | " +
        RPGDay.arsenal[Math.floor(Math.random() * RPGDay.arsenal.length)] + " | " +
        RPGDay.arsenal[Math.floor(Math.random() * RPGDay.arsenal.length)];

    let skills = RPGDay.skill[Math.floor(Math.random() * RPGDay.skill.length)] + " | " +
        RPGDay.skill[Math.floor(Math.random() * RPGDay.skill.length)] + " | " +
        RPGDay.skill[Math.floor(Math.random() * RPGDay.skill.length)] + " | " +
        RPGDay.skill[Math.floor(Math.random() * RPGDay.skill.length)] + " | " +
        RPGDay.skill[Math.floor(Math.random() * RPGDay.skill.length)];

    let enemies = RPGDay.enemy[Math.floor(Math.random() * RPGDay.enemy.length)] + " | " +
        RPGDay.enemy[Math.floor(Math.random() * RPGDay.enemy.length)] + " | " +
        RPGDay.enemy[Math.floor(Math.random() * RPGDay.enemy.length)] + " | " +
        RPGDay.enemy[Math.floor(Math.random() * RPGDay.enemy.length)] + " | " +
        RPGDay.enemy[Math.floor(Math.random() * RPGDay.enemy.length)];

    let edibles = RPGDay.edible[Math.floor(Math.random() * RPGDay.edible.length)] + " | " +
        RPGDay.edible[Math.floor(Math.random() * RPGDay.edible.length)] + " | " +
        RPGDay.edible[Math.floor(Math.random() * RPGDay.edible.length)] + " | " +
        RPGDay.edible[Math.floor(Math.random() * RPGDay.edible.length)] + " | " +
        RPGDay.edible[Math.floor(Math.random() * RPGDay.edible.length)];

    let luckyLoots = RPGDay.loot[Math.floor(Math.random() * RPGDay.loot.length)] + " | " +
        RPGDay.loot[Math.floor(Math.random() * RPGDay.loot.length)] + " | " +
        RPGDay.loot[Math.floor(Math.random() * RPGDay.loot.length)] + " | " +
        RPGDay.loot[Math.floor(Math.random() * RPGDay.loot.length)] + " | " +
        RPGDay.loot[Math.floor(Math.random() * RPGDay.loot.length)];

    let unluckyLoots = RPGDay.loot[Math.floor(Math.random() * RPGDay.loot.length)] + " | " +
        RPGDay.loot[Math.floor(Math.random() * RPGDay.loot.length)] + " | " +
        RPGDay.loot[Math.floor(Math.random() * RPGDay.loot.length)] + " | " +
        RPGDay.loot[Math.floor(Math.random() * RPGDay.loot.length)] + " | " +
        RPGDay.loot[Math.floor(Math.random() * RPGDay.loot.length)];


    embedRPGDayMessage = new Discord.RichEmbed()
        .setColor("#44DD00")
        .setTitle("Your RPG Day today")
        .setDescription("User: " + receivedMessage.author)
        .setThumbnail(receivedMessage.author.avatarURL)
        .addField("Status", RPGDay.status[Math.floor(Math.random() * RPGDay.status.length)], true)
        .addField("Zones", zones, true)
        .addField("Top 3 allies", topAllySigns, true)
        .addField("Top 3 pets", topPets, true)
        .addField("Arsenal", arsenal)
        .addField("Skills", skills)
        .addField("Enemies you will confront", enemies)
        .addField("Edibles you will obtain", edibles)
        .addField("Lucky Loots", luckyLoots)
        .addField("Unlucky Loots", unluckyLoots)
        .setFooter("Have a nice day!")
        .setTimestamp()
    //receivedMessage.channel.send("Status: " + RPGDay.status[Math.floor(Math.random() * RPGDay.status.length)])
    //receivedMessage.channel.send("Sign: " + RPGDay.astrology[Math.floor(Math.random() * RPGDay.astrology.length)])
    receivedMessage.channel.send(embedRPGDayMessage)
}

// https://discordapp.com/developers/applications/
// Application -> Bot -> Token

client.login(auth.token)
//client.login(process.env.BOT_TOKEN)
