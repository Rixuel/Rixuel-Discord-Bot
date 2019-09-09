function roll(prefix, arguments, receivedMessage) {
    let faceDice = "";
    let rollResult = "";
    let diceType = "";
    let minNum = 0;
    let maxNum = 0;

    diceType = arguments[0] + "";

    if (arguments.length < 2) {
        switch (diceType.toUpperCase()) {
            case "D4":
                faceDice = "4-sided";
                rollResult = Math.floor(Math.random() * 4) + 1;
                receivedMessage.channel.send("You roll a **" + faceDice + "** dice and get: **" + rollResult + "**")
                break;
            case "D6":
            default:
                faceDice = "6-sided";
                rollResult = Math.floor(Math.random() * 6) + 1;
                receivedMessage.channel.send("You roll a **" + faceDice + "** dice and get: **" + rollResult + "**")
                break;
            case "D8":
                faceDice = "8-sided";
                rollResult = Math.floor(Math.random() * 8) + 1;
                receivedMessage.channel.send("You roll a **" + faceDice + "** dice and get: **" + rollResult + "**")
                break;
            case "D10":
                faceDice = "10-sided";
                rollResult = Math.floor(Math.random() * 10) + 1;
                receivedMessage.channel.send("You roll a **" + faceDice + "** dice and get: **" + rollResult + "**")
                break;
            case "D12":
                faceDice = "12-sided";
                rollResult = Math.floor(Math.random() * 12) + 1;
                receivedMessage.channel.send("You roll a **" + faceDice + "** dice and get: **" + rollResult + "**")
                break;
            case "D20":
                faceDice = "20-sided";
                rollResult = Math.floor(Math.random() * 20) + 1;
                receivedMessage.channel.send("You roll a **" + faceDice + "** dice and get: **" + rollResult + "**")
                break;
        }
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
        receivedMessage.channel.send("You roll between **" + minNum + "** and **" + maxNum + "**. You get: **" + rollResult + "**")
    } else {
        receivedMessage.channel.send(
            "**Usage**\n" +
            "Use `" + prefix + "roll <dice>`\n" +
            "`<dice>` = `D4`, `D6`, `D8`, `D10`, `D12`, `D20`\n" +
            "Note: `D6` is set by default\n" +
            "\nUse `" + prefix + "roll range <min number> <max number>`\n" +
            "`<min number>` = Minimum number lower than the maximum number\n" +
            "`<max number>` = Maximum number higher than the minimum number\n"
        )
    }
}

module.exports.roll = roll;
