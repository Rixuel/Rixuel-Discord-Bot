function countwords(arguments, receivedMessage) {
    if (arguments.length < 1) {
        receivedMessage.channel.send("I can\'t count nothing, silly! <_<")
    } else {
        receivedMessage.channel.send("**" + arguments.length + "** words")
    }
}

module.exports.countwords = countwords;
