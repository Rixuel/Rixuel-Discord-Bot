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
var Riddles = require("./fortune/riddles.json");
var Science = require("./fortune/science.json");
var SongsPoems = require("./fortune/songs-poems.json");
var Sports = require("./fortune/sports.json");
var StarTrek = require("./fortune/startrek.json");
var Tao = require("./fortune/tao.json");
var TranslateMe = require("./fortune/translate-me.json");
var Wisdom = require("./fortune/wisdom.json");
var Work = require("./fortune/work.json");
var Zippy = require("./fortune/zippy.json");
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
        "`misc`\n" +
        "`news`\n" +
        "`paradoxum`\n" +
        "`people`\n" +
        "`perl`\n",
        true)
        .addField("<category>",
        "`pets`\n" +
        "`platitudes`\n" +
        "`politics`\n" +
        "`riddles`\n" +
        "`science`\n" +
        "`songs-poems`\n" +
        "`sports`\n" +
        "`startrek`\n" +
        "`tao`\n" +
        "`translate-m`\n" +
        "`wisdom`\n" +
        "`work`\n" +
        "`zippy`\n",
        true)
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
        "misc": Miscellaneous.miscellaneous,
        "news": News.news,
        "paradoxum": Paradoxum.paradoxum,
        "people": People.people,
        "perl": Perl.perl,
        "pets": Pets.pets,
        "platitudes": Platitudes.platitudes,
        "politics": Politics.politics,
        "riddles": Riddles.riddles,
        "science": Science.science,
        "songs-poems": SongsPoems.songspoems,
        "sports": Sports.sports,
        "startrek": StarTrek.startrek,
        "tao": Tao.tao,
        "translate-me": TranslateMe.translateme,
        "wisdom": Wisdom.wisdom,
        "work": Work.work,
        "zippy": Zippy.zippy
    };

    if (arguments.length==0) {
        fortuneMessage = randomFortunes(fortuneObject);
        receivedMessage.channel.send(fortuneMessage)
    }
    else if (arguments.length==1 && fortuneObject[arguments[0].toLowerCase()]) {
        fortuneMessage = new Discord.RichEmbed()
        .setColor("#FFAA00")
        .setTitle("Category: " + arguments[0].toUpperCase())
        .setDescription("```" + resultFortunes(fortuneObject[arguments[0].toLowerCase()]) + "```")
        receivedMessage.channel.send(fortuneMessage)
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
        "misc",
        "news",
        "paradoxum",
        "people",
        "perl",
        "pets",
        "platitudes",
        "politics",
        "riddles",
        "science",
        "songs-poems",
        "sports",
        "startrek",
        "tao",
        "translate-me",
        "wisdom",
        "work",
        "zippy"
    ];
    let randomNum = Math.floor(Math.random() * randomArray.length);

    randomMessage = new Discord.RichEmbed()
    .setColor("#FFAA00")
    .setTitle("Category: " + randomArray[randomNum].toUpperCase())
    .setDescription("```" + resultFortunes(fortuneObject[randomArray[randomNum]]) + "```")

    return randomMessage;
}

function resultFortunes(jsondata) {
    let data = jsondata;
    let length = data.length;
    let result = data[Math.floor(Math.random()*length)];
    return result;
}

module.exports.fortune = fortune;
