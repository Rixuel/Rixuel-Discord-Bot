const Discord = require("discord.js")

function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
};

let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
let region = {
    "brazil": ":flag_br: Brazil",
    "eu-central": ":flag_eu: Central Europe",
    "singapore": ":flag_sg: Singapore",
    "us-central": ":flag_us: U.S. Central",
    "sydney": ":flag_au: Sydney",
    "us-east": ":flag_us: U.S. East",
    "us-south": ":flag_us: U.S. South",
    "us-west": ":flag_us: U.S. West",
    "eu-west": ":flag_eu: Western Europe",
    "vip-us-east": ":flag_us: VIP U.S. East",
    "london": ":flag_gb: London",
    "amsterdam": ":flag_nl: Amsterdam",
    "hongkong": ":flag_hk: Hong Kong",
    "russia": ":flag_ru: Russia",
    "southafrica": ":flag_za: South Africa"
};

function serverinfo(arguments, receivedMessage) {
    const embed = new Discord.RichEmbed()
        .setAuthor(receivedMessage.guild.name, receivedMessage.guild.iconURL)
        .addField("Name", receivedMessage.guild.name, true)
        .addField("ID", receivedMessage.guild.id, true)
        .addField("Owner", `${receivedMessage.guild.owner.user.username}#${receivedMessage.guild.owner.user.discriminator}`, true)
        .addField("Region", region[receivedMessage.guild.region], true)
        .addField("Total | Humans | Bots", `${receivedMessage.guild.members.size} | ${receivedMessage.guild.members.filter(member => !member.user.bot).size} | ${receivedMessage.guild.members.filter(member => member.user.bot).size}`, true)
        .addField("Verification Level", verifLevels[receivedMessage.guild.verificationLevel], true)
        .addField("Channels", receivedMessage.guild.channels.size, true)
        .addField("Roles", receivedMessage.guild.roles.size, true)
        .addField("Creation Date", `${receivedMessage.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(receivedMessage.channel.guild.createdAt)})`, true)
        .setThumbnail(receivedMessage.guild.iconURL)

    receivedMessage.channel.send(embed)
}

module.exports.serverinfo = serverinfo;
