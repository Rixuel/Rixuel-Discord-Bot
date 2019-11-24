var Fortune = require("./fortune.json");

function fortune(arguments, receivedMessage) {
    let getfortune = Fortune.fortune;
    let fortuneLength = Fortune.fortune.length;
    let theFortune = getfortune[Math.floor(Math.random()*fortuneLength)]

    receivedMessage.channel.send("```" + theFortune + "```")
}

module.exports.fortune = fortune;
