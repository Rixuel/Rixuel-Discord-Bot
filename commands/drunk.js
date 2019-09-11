var Drunk = require("./drunk.json");

function drunk(arguments, receivedMessage) {
    let randomNum = Math.floor(Math.random() * 6);

    switch(randomNum) {
        case 0:
            receivedMessage.channel.send("**" + SubsfpsVerbDetNoun() + "**")
            break;
        case 1:
            receivedMessage.channel.send("**" + SubstpsVerbDetNoun() + "**")
            break;
        case 2:
            receivedMessage.channel.send("**" + SubsVerbDetNoun() + "**")
            break;
        case 3:
            receivedMessage.channel.send("**" + SubsVerbPreDetAdjNoun() + "**")
            break;
        case 4:
            receivedMessage.channel.send("**" + DetNounVerbPreDetNounAdv() + "**")
            break;
        case 5:
            receivedMessage.channel.send("**" + DetNounDoubleVerbsPreDetNoun() + "**")
            break;

    }
}

function SubsfpsVerbDetNoun() {
    // I have a house.
    let sentence = Drunk.subjectFps[Math.floor(Math.random() * Drunk.subjectFps.length)] + " " +
        Drunk.SingleVerbFps[Math.floor(Math.random() * Drunk.SingleVerbFps.length)] + " " +
        Drunk.determiner[Math.floor(Math.random() * Drunk.determiner.length)] + " " +
        Drunk.noun[Math.floor(Math.random() * Drunk.noun.length)] + "."

    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

    return sentence;
}

function SubstpsVerbDetNoun() {
    // He has a house.
    let sentence = Drunk.subjectTps[Math.floor(Math.random() * Drunk.subjectTps.length)] + " " +
        Drunk.SingleVerbTps[Math.floor(Math.random() * Drunk.SingleVerbTps.length)] + " " +
        Drunk.determiner[Math.floor(Math.random() * Drunk.determiner.length)] + " " +
        Drunk.noun[Math.floor(Math.random() * Drunk.noun.length)] + "."

    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

    return sentence;
}

function SubsVerbDetNoun() {
    // They have a house.
    let sentence = Drunk.subjects[Math.floor(Math.random() * Drunk.subjects.length)] + " " +
        Drunk.SingleVerb[Math.floor(Math.random() * Drunk.SingleVerb.length)] + " " +
        Drunk.determiner[Math.floor(Math.random() * Drunk.determiner.length)] + " " +
        Drunk.noun[Math.floor(Math.random() * Drunk.noun.length)] + "."

    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

    return sentence;
}

function SubsVerbPreDetAdjNoun() {
    // They sit on the beautiful chair.
    let sentence = Drunk.subjects[Math.floor(Math.random() * Drunk.subjects.length)] + " " +
        Drunk.SingleVerb[Math.floor(Math.random() * Drunk.SingleVerb.length)] + " " +
        Drunk.preposition[Math.floor(Math.random() * Drunk.preposition.length)] + " " +
        Drunk.determiner[Math.floor(Math.random() * Drunk.determiner.length)] + " " +
        Drunk.adjective[Math.floor(Math.random() * Drunk.adjective.length)] + " " +
        Drunk.noun[Math.floor(Math.random() * Drunk.noun.length)] + "."

    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

    return sentence;
}

function DetNounVerbPreDetNounAdv() {
    // The child ran toward his mother happily.
    let sentence = Drunk.determiner[Math.floor(Math.random() * Drunk.determiner.length)] + " " +
        Drunk.noun[Math.floor(Math.random() * Drunk.noun.length)] + " " +
        Drunk.SingleVerbTps[Math.floor(Math.random() * Drunk.SingleVerbTps.length)] + " " +
        Drunk.preposition[Math.floor(Math.random() * Drunk.preposition.length)] + " " +
        Drunk.determiner[Math.floor(Math.random() * Drunk.determiner.length)] + " " +
        Drunk.noun[Math.floor(Math.random() * Drunk.noun.length)] + " " +
        Drunk.adverb[Math.floor(Math.random() * Drunk.adverb.length)] + "."

    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

    return sentence;
}

function DetNounDoubleVerbsPreDetNoun() {
    // The man is driving over the bridge.
    let sentence = Drunk.determiner[Math.floor(Math.random() * Drunk.determiner.length)] + " " +
        Drunk.noun[Math.floor(Math.random() * Drunk.noun.length)] + " " +
        Drunk.DoubleVerbsTps[Math.floor(Math.random() * Drunk.DoubleVerbsTps.length)] + " " +
        Drunk.preposition[Math.floor(Math.random() * Drunk.preposition.length)] + " " +
        Drunk.determiner[Math.floor(Math.random() * Drunk.determiner.length)] + " " +
        Drunk.noun[Math.floor(Math.random() * Drunk.noun.length)] + "."

    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

    return sentence;
}

module.exports.drunk = drunk;
