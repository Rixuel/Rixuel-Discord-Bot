const { EmbedBuilder } = require("discord.js")
var RPGDay = require("./rpgday.json");

function rpgday(arguments, receivedMessage) {
    let embedRPGDayMessage = "";

    let zones = RPGDay.zone[Math.floor(Math.random() * RPGDay.zone.length)] + "\n" +
        RPGDay.zone[Math.floor(Math.random() * RPGDay.zone.length)] + "\n" +
        RPGDay.zone[Math.floor(Math.random() * RPGDay.zone.length)] + "\n";

    let topAllySigns = RPGDay.astrology[Math.floor(Math.random() * RPGDay.astrology.length)] + "\n";

    let topPets = RPGDay.pet[Math.floor(Math.random() * RPGDay.pet.length)] + "\n" +
        RPGDay.pet[Math.floor(Math.random() * RPGDay.pet.length)] + "\n" +
        RPGDay.pet[Math.floor(Math.random() * RPGDay.pet.length)] + "\n";

    let arsenal = "```ini\n[" + RPGDay.arsenal[Math.floor(Math.random() * RPGDay.arsenal.length)] + "] [" +
        RPGDay.arsenal[Math.floor(Math.random() * RPGDay.arsenal.length)] + "]```";

    let skills = "```yaml\n[" + RPGDay.skill[Math.floor(Math.random() * RPGDay.skill.length)] + "] [" +
        RPGDay.skill[Math.floor(Math.random() * RPGDay.skill.length)] + "]```";

    let enemies = "```prolog\n" + RPGDay.enemy[Math.floor(Math.random() * RPGDay.enemy.length)] + ", " +
        RPGDay.enemy[Math.floor(Math.random() * RPGDay.enemy.length)] + ", " +
        RPGDay.enemy[Math.floor(Math.random() * RPGDay.enemy.length)] + "```";

    let edibles = "```diff\n+ " + RPGDay.edible[Math.floor(Math.random() * RPGDay.edible.length)] + " + " +
        RPGDay.edible[Math.floor(Math.random() * RPGDay.edible.length)] + " +```";

    let luckyLoots = RPGDay.loot[Math.floor(Math.random() * RPGDay.loot.length)] + "\n" +
        RPGDay.loot[Math.floor(Math.random() * RPGDay.loot.length)] + "\n" +
        RPGDay.loot[Math.floor(Math.random() * RPGDay.loot.length)] + "\n";

    let unluckyLoots = RPGDay.loot[Math.floor(Math.random() * RPGDay.loot.length)] + "\n" +
        RPGDay.loot[Math.floor(Math.random() * RPGDay.loot.length)] + "\n" +
        RPGDay.loot[Math.floor(Math.random() * RPGDay.loot.length)] + "\n";


    embedRPGDayMessage = new EmbedBuilder()
        .setColor("#44DD00")
        .setTitle("Your RPG Day today")
        .setDescription("```diff\n- Player: " + receivedMessage.author.username + " -```")
        .setThumbnail(receivedMessage.author.displayAvatarURL())
        .addFields([
            {
                name: "Status",
                value: RPGDay.status[Math.floor(Math.random() * RPGDay.status.length)],
                inline: true
            },
            {
                name: "Zones",
                value: zones,
                inline: true
            },
            {
                name: "Top ally",
                value: topAllySigns,
                inline: true
            },
            {
                name: "Top 3 pets",
                value: topPets,
                inline: true
            },
            {
                name: "Lucky Loots",
                value: luckyLoots,
                inline: true
            },
            {
                name: "Unlucky Loots",
                value: unluckyLoots,
                inline: true
            },
            {
                name: "Arsenal",
                value: arsenal
            },
            {
                name: "Skills",
                value: skills
            },
            {
                name: "Enemies you will confront",
                value: enemies
            },
            {
                name: "Edibles you will obtain",
                value: edibles
            },
        ])
        .setFooter({ text: "Have a nice day!" })
        .setTimestamp()
    //receivedMessage.channel.send("Status: " + RPGDay.status[Math.floor(Math.random() * RPGDay.status.length)])
    //receivedMessage.channel.send("Sign: " + RPGDay.astrology[Math.floor(Math.random() * RPGDay.astrology.length)])
    receivedMessage.channel.send({ embeds : [embedRPGDayMessage] })
}

module.exports.rpgday = rpgday;
