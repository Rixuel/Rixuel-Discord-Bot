var Drunk = require("./drunk.json");

function drunk(arguments, receivedMessage) {
    let sentence = Drunk.subject[Math.floor(Math.random() * Drunk.subject.length)] + " " +
        Drunk.verb[Math.floor(Math.random() * Drunk.verb.length)] + " " +
        Drunk.determiner[Math.floor(Math.random() * Drunk.determiner.length)] + " " +
        Drunk.noun[Math.floor(Math.random() * Drunk.noun.length)] + "."

    receivedMessage.channel.send("**" + sentence.charAt(0).toUpperCase() + sentence.slice(1) + "**")
}

module.exports.drunk = drunk;
