function countchars(arguments, receivedMessage) {
    if (arguments.length < 1) {
        receivedMessage.channel.send("I can\'t count nothing, silly! <_<")
    } else {
        receivedMessage.channel.send("**" + arguments.toString().length + "** characters (including space)")
    }
}

module.exports.countchars = countchars;
