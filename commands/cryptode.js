function base64(prefix, arguments, receivedMessage) {
    var str = "";
    if (arguments[0] == "encode" && (arguments.length > 1)) {
        for (var i = 1; i < arguments.length; i++) {
            str += arguments[i];
            if (i < arguments.length - 1) {
                str += " ";
            }
        }
        receivedMessage.channel.send(Buffer.from(str).toString("base64"))
    } else if (arguments[0] == "decode" && (arguments.length > 1)) {
        for (var i = 1; i < arguments.length; i++) {
            str += arguments[i];
            if (i < arguments.length - 1) {
                str += " ";
            }
        }

        if (arguments[1].length > 1) {
            receivedMessage.channel.send(Buffer.from(str, "base64").toString("utf-8"))
        } else {
            receivedMessage.channel.send("Input length needs to have more than 1 character")
        }
    } else {
        receivedMessage.channel.send("Please use `" + prefix + "base64 encode <text>` or `" + prefix + "base64 decode <text>`")
    }
}

function hex(prefix, arguments, receivedMessage) {
    var str = "";
    var hexRegex = /[0-9A-Fa-f]{1}/;

    if (arguments[0] == "encode" && (arguments.length > 1)) {
        //console.log("USING [encode]");

        for (var i = 1; i < arguments.length; i++) {
            str += arguments[i];
            if (i < arguments.length - 1) {
                str += " ";
            }
        }
        receivedMessage.channel.send(Buffer.from(str).toString("hex"))

    } else if (arguments[0] == "decode" && (arguments.length == 2)) {
        //console.log("USING [decode]");
        //console.log("TEST -- hexRegex.test(arguments[1]) : " + hexRegex.test(arguments[1]) );

        for (var i = 1; i < arguments.length; i++) {
            str += arguments[i];
            if (i < arguments.length - 1) {
                str += " ";
            }
        }

        if (hexRegex.test(arguments[1]) && (arguments[1].length > 1)) {
            receivedMessage.channel.send(Buffer.from(str, "hex").toString("utf-8"))
        } else {
            receivedMessage.channel.send("Your HEX is invalid")
        }
    } else {
        receivedMessage.channel.send("Please use `" + prefix + "hex encode <text>` or `" + prefix + "hex decode <HEX with NO space>`")
    }
}

module.exports.base64 = base64;
module.exports.hex = hex;
