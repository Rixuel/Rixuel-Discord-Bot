var Art = require("./fortune/art.json");
var Computers = require("./fortune/computers.json");
var Cookie = require("./fortune/cookie.json");
var Debian = require("./fortune/debian.json");
var Definitions = require("./fortune/definitions.json");
var Disclaimer = require("./fortune/disclaimer.json");
var Drugs = require("./fortune/drugs.json");
var Education = require("./fortune/education.json");
var Ethnic = require("./fortune/ethnic.json");
var Food = require("./fortune/food.json");
var Fortunes = require("./fortune/fortunes.json");
var Goedel = require("./fortune/goedel.json");
var Humorists = require("./fortune/humorists.json");
var Kids = require("./fortune/kids.json");
var Knghtbrd = require("./fortune/knghtbrd.json");
var Law = require("./fortune/law.json");
var Linux = require("./fortune/linux.json");
var LinuxCookie = require("./fortune/linuxcookie.json");
var Literature = require("./fortune/literature.json");
var Love = require("./fortune/love.json");
var Magic = require("./fortune/magic.json");
var Medicine = require("./fortune/medicine.json");
var MenWomen = require("./fortune/men-women.json");
var Miscellaneous = require("./fortune/miscellaneous.json");
var News = require("./fortune/news.json");
var Paradoxum = require("./fortune/paradoxum.json");
var People = require("./fortune/people.json");
var Perl = require("./fortune/perl.json");
var Pets = require("./fortune/pets.json");
var Platitudes = require("./fortune/platitudes.json");
var Politics = require("./fortune/politics.json");
// Fortune data by github.com/shlomif
const Discord = require("discord.js")

function fortune(prefix, arguments, receivedMessage) {
    let fortuneMessage = "";
    let fortuneHelpMessage = new Discord.RichEmbed()
        .setColor("#FF5500")
        .setTitle("Fortune Help Message")
        .setDescription("Please use `" + prefix + "fortune` or `" + prefix + "fortune <category>`\n")
        .addField("<category>",
        "`art`\n" +
        "`computers`\n" +
        "`cookie`\n" +
        "`debian`\n" +
        "`definitions`\n" +
        "`disclaimer`\n" +
        "`drugs`\n" +
        "`education`\n" +
        "`ethnic`\n" +
        "`food`\n" +
        "`fortunes`\n" +
        "`goedel`\n" +
        "`humorists`\n" +
        "`kids`\n",
        true)
        .addField("<category>",
        "`knghtbrd`\n" +
        "`law`\n" +
        "`linux`\n" +
        "`linuxcookie`\n" +
        "`literature`\n" +
        "`love`\n" +
        "`magic`\n" +
        "`medicine`\n" +
        "`men-women`\n" +
        "`miscellaneous`\n" +
        "`news`\n" +
        "`paradoxum`\n" +
        "`people`\n" +
        "`perl`\n" +
        "`pets`\n" +
        "`platitudes`\n" +
        "`politics`\n",
        true)
        .addField("<category>", "...", true)
        .setFooter("Fortune data by github.com/shlomif")

    const fortuneObject = {
        "art": Art.art,
        "computers": Computers.computers,
        "cookie": Cookie.cookie,
        "debian": Debian.debian,
        "definitions": Definitions.definitions,
        "disclaimer": Disclaimer.disclaimer,
        "drugs": Drugs.drugs,
        "education": Education.education,
        "ethnic": Ethnic.ethnic,
        "food": Food.food,
        "fortunes": Fortunes.fortunes,
        "goedel": Goedel.goedel,
        "humorists": Humorists.humorists,
        "kids": Kids.kids,
        "knghtbrd": Knghtbrd.knghtbrd,
        "law": Law.law,
        "linux": Linux.linux,
        "linuxcookie": LinuxCookie.linuxcookie,
        "literature": Literature.literature,
        "love": Love.love,
        "magic": Magic.magic,
        "medicine": Medicine.medicine,
        "men-women": MenWomen.menwomen,
        "miscellaneous": Miscellaneous.miscellaneous,
        "news": News.news,
        "paradoxum": Paradoxum.paradoxum,
        "people": People.people,
        "perl": Perl.perl,
        "pets": Pets.pets,
        "platitudes": Platitudes.platitudes,
        "politics": Politics.politics
    };

    if (arguments.length==0) {
        fortuneMessage = randomFortunes(fortuneObject);
        receivedMessage.channel.send(fortuneMessage)
    }
    else if (arguments.length==1 && fortuneObject[arguments[0].toLowerCase()]) {
        fortuneMessage = resultFortunes(fortuneObject[arguments[0].toLowerCase()]);
        receivedMessage.channel.send("**`Category: " + arguments[0].toUpperCase() +
        "`**\n" + "```" + fortuneMessage + "```")
    }
    else {
        receivedMessage.channel.send(fortuneHelpMessage);
    }
}

function randomFortunes(fortuneObject) {
    let randomMessage = "";
    let randomArray = [
        "art",
        "computers",
        "cookie",
        "debian",
        "definitions",
        "disclaimer",
        "drugs",
        "education",
        "ethnic",
        "food",
        "fortunes",
        "goedel",
        "humorists",
        "kids",
        "knghtbrd",
        "law",
        "linux",
        "linuxcookie",
        "literature",
        "love",
        "magic",
        "medicine",
        "men-women",
        "miscellaneous",
        "news",
        "paradoxum",
        "people",
        "perl",
        "pets",
        "platitudes",
        "politics"
    ];
    let randomNum = Math.floor(Math.random() * randomArray.length);

    randomMessage = "**`Category: " + randomArray[randomNum].toUpperCase() +
    "`**\n" + "```" + resultFortunes(fortuneObject[randomArray[randomNum]]) + "```";

    return randomMessage;
}

function resultFortunes(jsondata) {
    let data = jsondata;
    let length = data.length;
    let result = data[Math.floor(Math.random()*length)];
    return result;
}

module.exports.fortune = fortune;
