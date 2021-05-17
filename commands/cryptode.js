// Base64 Encryption and Decryption
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
        receivedMessage.channel.send("Please use `" + prefix + "base64 encode <text>` or `" + prefix + "base64 decode <base64 text>`")
    }
}

// Binary Encryption and Decryption
function binary(prefix, arguments, receivedMessage) {
    var str = "";
    var binStr = "";
    var textStr = "";

    if (arguments[0] == "encode" && (arguments.length > 1)) {
        for (var i = 1; i < arguments.length; i++) {
            str += arguments[i];
            if (i < arguments.length - 1) {
                str += " ";
            }
        }

        // Convert str into binary
        for (var i = 0; i < str.length; i++) {
            binStr += str[i].charCodeAt(0).toString(2) + " ";
        }

        receivedMessage.channel.send(binStr)

    } else if (arguments[0] == "decode" && (arguments.length > 1)) {
        for (var i = 1; i < arguments.length; i++) {
            str += arguments[i];
            if (i < arguments.length - 1) {
                str += " ";
            }
        }

        if (!(/^[0 1]+$/.test(str))) {
            return receivedMessage.channel.send("Binary input is invalid")
        }

        // Convert str into text
        textStr = str.split(' ') // Split string in array of binary chars
        .map(str => String.fromCharCode(parseInt(str, 2))) // Map every binary char to real char
        .join(''); // Join the array back to a string

        receivedMessage.channel.send(textStr)

    } else {
        receivedMessage.channel.send("Please use `" + prefix + "bin encode <text>` or `" + prefix + "bin decode <binary text>`")
    }
}

// Hex Encryption and Decryption
function hex(prefix, arguments, receivedMessage) {
    var str = "";
    var hexRegex = /[0-9A-Fa-f]{1}/;

    if (arguments[0] == "encode" && (arguments.length > 1)) {
        for (var i = 1; i < arguments.length; i++) {
            str += arguments[i];
            if (i < arguments.length - 1) {
                str += " ";
            }
        }
        receivedMessage.channel.send(Buffer.from(str).toString("hex"))

    } else if (arguments[0] == "decode" && (arguments.length == 2)) {
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
module.exports.binary = binary;
module.exports.hex = hex;
