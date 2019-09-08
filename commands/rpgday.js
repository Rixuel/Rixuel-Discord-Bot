const Discord = require("discord.js")
var RPGDay = require("./rpgday.json");

function rpgday(arguments, receivedMessage) {
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

module.exports.rpgday = rpgday;
