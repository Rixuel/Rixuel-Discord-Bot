var Drunk = require("./drunk.json");

function drunk(arguments, receivedMessage) {
    let randomNum = Math.floor(Math.random() * 3);
    let drunkMessage = "";

    switch(randomNum) {
        case 0:
            drunkMessage = "**" + Sentence1() + "**";
            break;
        case 1:
            drunkMessage = "**" + Sentence2() + "**";
            break;
        case 2:
            drunkMessage = "**" + Sentence3() + "**";
            break;
    }

    receivedMessage.channel.send(":wine_glass: " + drunkMessage)
}

function Sentence1() {
    // I have a house.
    let sentence = ""
    let subjects = Drunk.subjects[Math.floor(Math.random() * Drunk.subjects.length)]
    let SingleVerbFps = Drunk.SingleVerbFps[Math.floor(Math.random() * Drunk.SingleVerbFps.length)]
    let SingleVerbTps = Drunk.SingleVerbTps[Math.floor(Math.random() * Drunk.SingleVerbTps.length)]
    let SingleVerb = Drunk.SingleVerb[Math.floor(Math.random() * Drunk.SingleVerb.length)]
    let determiner = Drunk.determiner[Math.floor(Math.random() * Drunk.determiner.length)]
    let noun = Drunk.noun[Math.floor(Math.random() * Drunk.noun.length)]


    sentence = subjects + " ";

    if (subjects == "i") {
        sentence += SingleVerbFps + " ";
    } else if (subjects == "he" || subjects == "she" || subjects == "it") {
        sentence += SingleVerbTps + " ";
    } else {
        sentence += SingleVerb + " ";
    }

    sentence += determiner + " ";

    if (determiner == "both" ||
        determiner == "many" ||
        determiner == "some" ||
        determiner == "these" ||
        determiner == "those") {
        sentence += pluralForm(noun) + ".";
    } else {
        sentence += noun + ".";
    }

    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

    return sentence;
}

function Sentence2() {
    // These cats eat the delicious cake.
    let sentence = ""
    let subjects = Drunk.subjects[Math.floor(Math.random() * Drunk.subjects.length)]
    let SingleVerbFps = Drunk.SingleVerbFps[Math.floor(Math.random() * Drunk.SingleVerbFps.length)]
    let SingleVerbTps = Drunk.SingleVerbTps[Math.floor(Math.random() * Drunk.SingleVerbTps.length)]
    let SingleVerb = Drunk.SingleVerb[Math.floor(Math.random() * Drunk.SingleVerb.length)]
    let determiner = Drunk.determiner[Math.floor(Math.random() * Drunk.determiner.length)]
    let determiner2 = Drunk.determiner[Math.floor(Math.random() * Drunk.determiner.length)]
    let noun = Drunk.noun[Math.floor(Math.random() * Drunk.noun.length)]
    let noun2 = Drunk.noun[Math.floor(Math.random() * Drunk.noun.length)]
    let adjective = Drunk.adjective[Math.floor(Math.random() * Drunk.adjective.length)]


    sentence = determiner + " ";

    if (determiner == "both" ||
        determiner == "many" ||
        determiner == "some" ||
        determiner == "these" ||
        determiner == "those") {
        sentence += pluralForm(noun) + " " + SingleVerb + " ";
    } else {
        sentence += noun + " " + SingleVerbTps + " ";
    }

    sentence += determiner2 + " ";

    if (determiner2 == "both" ||
        determiner2 == "many" ||
        determiner2 == "some" ||
        determiner2 == "these" ||
        determiner2 == "those") {
        sentence += adjective + " " + pluralForm(noun2) + ".";
    } else {
        sentence += adjective + " " + noun2 + ".";
    }

    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

    return sentence;
}

function pluralForm(noun) {
    if (noun[noun.length - 1] == "s" ||
        noun[noun.length - 1] == "x" ||
        noun[noun.length - 1] == "z" ||
        noun[noun.length - 2].concat(noun[noun.length - 1]) == "ch" ||
        noun[noun.length - 2].concat(noun[noun.length - 1]) == "sh") {
        noun = noun + "es";
    } else if (noun[noun.length - 1] == "y" &&
        noun[noun.length - 2].concat(noun[noun.length - 1]) != "ay" &&
        noun[noun.length - 2].concat(noun[noun.length - 1]) != "oy") {
        noun = noun.slice(0, -1) + "ies";
    } else if (noun[noun.length - 2].concat(noun[noun.length - 1]) == "an") {
        noun = noun.slice(0, -2) + "en";
    } else {
        noun = noun + "s";
    }

    return noun;
}

function Sentence3() {
    // The pretty girl.
    let sentence = ""
    let determiner = Drunk.determiner[Math.floor(Math.random() * Drunk.determiner.length)]
    let adjective = Drunk.adjective[Math.floor(Math.random() * Drunk.adjective.length)]
    let noun = Drunk.noun[Math.floor(Math.random() * Drunk.noun.length)]

    sentence = determiner + " ";

    if (determiner == "both" ||
        determiner == "many" ||
        determiner == "some" ||
        determiner == "these" ||
        determiner == "those") {
        sentence += adjective + " " + pluralForm(noun) + ".";
    } else {
        sentence += adjective + " " + noun + ".";
    }

    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

    return sentence;
}

module.exports.drunk = drunk;
