const Discord = require("discord.js")
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
        RPGDay.enemy[Math.floor(Math.random() * RPGDay.enemy.length)] + ", " +
        RPGDay.enemy[Math.floor(Math.random() * RPGDay.enemy.length)] + ", " +
        RPGDay.enemy[Math.floor(Math.random() * RPGDay.enemy.length)] + ", " +
        RPGDay.enemy[Math.floor(Math.random() * RPGDay.enemy.length)] + "```";

    let edibles = "```diff\n+ " + RPGDay.edible[Math.floor(Math.random() * RPGDay.edible.length)] + " + " +
        RPGDay.edible[Math.floor(Math.random() * RPGDay.edible.length)] + " + " +
        RPGDay.edible[Math.floor(Math.random() * RPGDay.edible.length)] + " + " +
        RPGDay.edible[Math.floor(Math.random() * RPGDay.edible.length)] + " +```";

    let luckyLoots = RPGDay.loot[Math.floor(Math.random() * RPGDay.loot.length)] + "\n" +
        RPGDay.loot[Math.floor(Math.random() * RPGDay.loot.length)] + "\n" +
        RPGDay.loot[Math.floor(Math.random() * RPGDay.loot.length)] + "\n";

    let unluckyLoots = RPGDay.loot[Math.floor(Math.random() * RPGDay.loot.length)] + "\n" +
        RPGDay.loot[Math.floor(Math.random() * RPGDay.loot.length)] + "\n" +
        RPGDay.loot[Math.floor(Math.random() * RPGDay.loot.length)] + "\n";


    embedRPGDayMessage = new Discord.MessageEmbed()
        .setColor("#44DD00")
        .setTitle("Your RPG Day today")
        .setDescription("```fix\nUser: " + receivedMessage.author.username + "```")
        .setThumbnail(receivedMessage.author.avatarURL())
        .addField("Status", RPGDay.status[Math.floor(Math.random() * RPGDay.status.length)], true)
        .addField("Zones", zones, true)
        .addField("Top ally", topAllySigns, true)
        .addField("Top 3 pets", topPets, true)
        .addField("Lucky Loots", luckyLoots, true)
        .addField("Unlucky Loots", unluckyLoots, true)
        .addField("Arsenal", arsenal)
        .addField("Skills", skills)
        .addField("Enemies you will confront", enemies)
        .addField("Edibles you will obtain", edibles)
        .setFooter("Have a nice day!")
        .setTimestamp()
    //receivedMessage.channel.send("Status: " + RPGDay.status[Math.floor(Math.random() * RPGDay.status.length)])
    //receivedMessage.channel.send("Sign: " + RPGDay.astrology[Math.floor(Math.random() * RPGDay.astrology.length)])
    receivedMessage.channel.send(embedRPGDayMessage)
}

module.exports.rpgday = rpgday;
