var Fortune = require("./fortune.json");
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

function fortune(prefix, arguments, receivedMessage) {
    let fortuneHelpMessage = "Please use `" + prefix + "fortune` or `" + prefix + "fortune <category>`\n" +
    "\n**List of <category>**\n" +
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
    "`kids`\n";
    let fortuneMessage = "";

    if (arguments.length==0) {
        fortuneMessage = randomFortunes();
    }
    else if (arguments[0] == "art") {
        receivedMessage.channel.send("**`Category: Art`**")
        fortuneMessage = art();
    }
    else if (arguments[0] == "computers") {
        receivedMessage.channel.send("**`Category: Computers`**")
        fortuneMessage = computers();
    }
    else if (arguments[0] == "cookie") {
        receivedMessage.channel.send("**`Category: Cookie`**")
        fortuneMessage = cookie();
    }
    else if (arguments[0] == "debian") {
        receivedMessage.channel.send("**`Category: Debian`**")
        fortuneMessage = debian();
    }
    else if (arguments[0] == "definitions") {
        receivedMessage.channel.send("**`Category: Definitions`**")
        fortuneMessage = definitions();
    }
    else if (arguments[0] == "disclaimer") {
        receivedMessage.channel.send("**`Category: Disclaimer`**")
        fortuneMessage = disclaimer();
    }
    else if (arguments[0] == "drugs") {
        receivedMessage.channel.send("**`Category: Drugs`**")
        fortuneMessage = drugs();
    }
    else if (arguments[0] == "education") {
        receivedMessage.channel.send("**`Category: Education`**")
        fortuneMessage = education();
    }
    else if (arguments[0] == "ethnic") {
        receivedMessage.channel.send("**`Category: Ethnic`**")
        fortuneMessage = ethnic();
    }
    else if (arguments[0] == "food") {
        receivedMessage.channel.send("**`Category: Food`**")
        fortuneMessage = food();
    }
    else if (arguments[0] == "fortunes") {
        receivedMessage.channel.send("**`Category: Fortunes`**")
        fortuneMessage = fortunes();
    }
    else if (arguments[0] == "goedel") {
        receivedMessage.channel.send("**`Category: Goedel`**")
        fortuneMessage = goedel();
    }
    else if (arguments[0] == "humorists") {
        receivedMessage.channel.send("**`Category: Humorists`**")
        fortuneMessage = humorists();
    }
    else if (arguments[0] == "kids") {
        receivedMessage.channel.send("**`Category: Kids`**")
        fortuneMessage = kids();
    }
    else {
        receivedMessage.channel.send(fortuneHelpMessage);
        fortuneMessage = "End of the list";
    }

    receivedMessage.channel.send("```" + fortuneMessage + "```")
}

function randomFortunes() {
    let randomMessage = "";
    let randomNum = Math.floor(Math.random() * 3);

    switch(randomNum) {
        case 0:
            randomMessage = tempfortune();
            break;
        case 1:
            randomMessage = art();
            break;
        case 2:
            randomMessage = computers();
            break;
    }

    return randomMessage;
}

function tempfortune() {
    let getfortune = Fortune.fortune;
    let fortuneLength = Fortune.fortune.length;
    let theFortune = getfortune[Math.floor(Math.random()*fortuneLength)];
    return theFortune;
}

function art() {
    let data = Art.art;
    let length = Art.art.length;
    let result = data[Math.floor(Math.random()*length)];
    return result;
}

function computers() {
    let data = Computers.computers;
    let length = Computers.computers.length;
    let result = data[Math.floor(Math.random()*length)];
    return result;
}

function cookie() {
    let data = Cookie.cookie;
    let length = Cookie.cookie.length;
    let result = data[Math.floor(Math.random()*length)];
    return result;
}

function debian() {
    let data = Debian.debian;
    let length = Debian.debian.length;
    let result = data[Math.floor(Math.random()*length)];
    return result;
}

function definitions() {
    let data = Definitions.definitions;
    let length = Definitions.definitions.length;
    let result = data[Math.floor(Math.random()*length)];
    return result;
}

function disclaimer() {
    let data = Disclaimer.disclaimer;
    let length = Disclaimer.disclaimer.length;
    let result = data[Math.floor(Math.random()*length)];
    return result;
}

function drugs() {
    let data = Drugs.drugs;
    let length = Drugs.drugs.length;
    let result = data[Math.floor(Math.random()*length)];
    return result;
}

function education() {
    let data = Education.education;
    let length = Education.education.length;
    let result = data[Math.floor(Math.random()*length)];
    return result;
}

function ethnic() {
    let data = Ethnic.ethnic;
    let length = Ethnic.ethnic.length;
    let result = data[Math.floor(Math.random()*length)];
    return result;
}

function food() {
    let data = Food.food;
    let length = Food.food.length;
    let result = data[Math.floor(Math.random()*length)];
    return result;
}

function fortunes() {
    let data = Fortunes.fortunes;
    let length = Fortunes.fortunes.length;
    let result = data[Math.floor(Math.random()*length)];
    return result;
}

function goedel() {
    let data = Goedel.goedel;
    let length = Goedel.goedel.length;
    let result = data[Math.floor(Math.random()*length)];
    return result;
}

function humorists() {
    let data = Humorists.humorists;
    let length = Humorists.humorists.length;
    let result = data[Math.floor(Math.random()*length)];
    return result;
}

function kids() {
    let data = Kids.kids;
    let length = Kids.kids.length;
    let result = data[Math.floor(Math.random()*length)];
    return result;
}

module.exports.fortune = fortune;
