function base64(prefix, arguments, receivedMessage) {
    var str = "";
    if (arguments[0] == "encode") {
        for (var i = 1; i < arguments.length; i++) {
            str += arguments[i];
            if (i < arguments.length - 1) {
                str += " ";
            }
        }
        receivedMessage.channel.send(Buffer.from(str).toString("base64"))
    } else if (arguments[0] == "decode") {
        for (var i = 1; i < arguments.length; i++) {
            str += arguments[i];
            if (i < arguments.length - 1) {
                str += " ";
            }
        }
        receivedMessage.channel.send(Buffer.from(str, "base64").toString("utf-8"))
    } else {
        receivedMessage.channel.send("Please use `" + prefix + "base64 encode <text>` or `" + prefix + "base64 decode <text>`")
    }
}

function hex(prefix, arguments, receivedMessage) {
    var str = "";
    if (arguments[0] == "encode") {
        for (var i = 1; i < arguments.length; i++) {
            str += arguments[i];
            if (i < arguments.length - 1) {
                str += " ";
            }
        }
        receivedMessage.channel.send(Buffer.from(str).toString("hex"))
    } else if (arguments[0] == "decode") {
        for (var i = 1; i < arguments.length; i++) {
            str += arguments[i];
            if (i < arguments.length - 1) {
                str += " ";
            }
        }
        receivedMessage.channel.send(Buffer.from(str, "hex").toString("utf-8"))
    } else {
        receivedMessage.channel.send("Please use `" + prefix + "hex encode <text>` or `" + prefix + "hex decode <text>`")
    }
}

module.exports.base64 = base64;
module.exports.hex = hex;
