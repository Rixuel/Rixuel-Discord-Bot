function roll(prefix, arguments, receivedMessage) {
    let rollResult = "";
    let minNum = 0;
    let maxNum = 0;

    if (arguments.length == 0 || arguments[0].toUpperCase() == "D6") {
        rollResult = Math.floor(Math.random() * 6) + 1;
        receivedMessage.channel.send(":game_die: You roll a **6-sided** dice [D6] and get:\n **`" + rollResult + "`**")
    } else if (arguments[0].toUpperCase() == "D4") {
        rollResult = Math.floor(Math.random() * 4) + 1;
        receivedMessage.channel.send(":game_die: You roll a **4-sided** dice [D4] and get:\n **`" + rollResult + "`**")
    } else if (arguments[0].toUpperCase() == "D8") {
        rollResult = Math.floor(Math.random() * 8) + 1;
        receivedMessage.channel.send(":game_die: You roll a **8-sided** dice [D8] and get:\n **`" + rollResult + "`**")
    } else if (arguments[0].toUpperCase() == "D10") {
        rollResult = Math.floor(Math.random() * 10) + 1;
        receivedMessage.channel.send(":game_die: You roll a **10-sided** dice [D10] and get:\n **`" + rollResult + "`**")
    } else if (arguments[0].toUpperCase() == "D12") {
        rollResult = Math.floor(Math.random() * 12) + 1;
        receivedMessage.channel.send(":game_die: You roll a **12-sided** dice [D12] and get:\n **`" + rollResult + "`**")
    } else if (arguments[0].toUpperCase() == "D20") {
        rollResult = Math.floor(Math.random() * 20) + 1;
        receivedMessage.channel.send(":game_die: You roll a **20-sided** dice [D20] and get:\n **`" + rollResult + "`**")
    } else if (arguments[0] == "range" && arguments.length == 3) {
        if (isNaN(arguments[1]) || isNaN(arguments[2])) {
            receivedMessage.channel.send("Please use `" + prefix + "roll range <min number> <max number>`\n")
            return
        }

        if (arguments[1] >= arguments[2]) {
            receivedMessage.channel.send("Minimum number is higher or equal to the maximum number\n")
            return
        }

        minNum = Math.ceil(arguments[1]);
        maxNum = Math.floor(arguments[2]);

        rollResult = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        receivedMessage.channel.send(":game_die: You roll between **" + minNum + "** and **" + maxNum + "**. You get:\n **`" + rollResult + "`**")
    } else {
        receivedMessage.channel.send(
            "**Usage**\n" +
            "Use `" + prefix + "roll`\n" +
            "Note: `D6` is set by default\n" +
            "\nUse `" + prefix + "roll <dice>`\n" +
            "`<dice>` = `D4`, `D6`, `D8`, `D10`, `D12`, `D20`\n" +
            "\nUse `" + prefix + "roll range <min number> <max number>`\n" +
            "`<min number>` = Minimum number lower than the maximum number\n" +
            "`<max number>` = Maximum number higher than the minimum number\n"
        )
    }
}

module.exports.roll = roll;
