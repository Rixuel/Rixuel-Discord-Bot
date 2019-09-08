var Alias = require("./alias.json");

function alias(prefix, arguments, receivedMessage) {
    let aliasHelpMessage = "Please use `" + prefix + "alias <gender> <title>` or `" + prefix + "ag <gender> <title>`\n" +
    "\n**Values for:**\n" +
    "`<gender>` = `female`, `f`, `male`, `m`\n" +
    "`<title>` = `title`, `t`\n" +
    "\n**Examples:**\n" +
    "`" + prefix + "alias male title`\n" +
    "`" + prefix + "ag female t`\n" +
    "`" + prefix + "ag male`\n" +
    "`" + prefix + "ag f`\n";

    let f_prefixArray = Alias.female.prefix;
    let f_SuffixArray = Alias.female.suffix;
    let m_prefixArray = Alias.male.prefix;
    let m_SuffixArray = Alias.male.suffix;
    let titleArray = Alias.title;

    let f_PrefixLength = Alias.female.prefix.length;
    let f_SuffixLength = Alias.female.suffix.length;
    let m_PrefixLength = Alias.male.prefix.length;
    let m_SuffixLength = Alias.male.suffix.length;
    let titleLength = Alias.title.length;

    let t_alias = titleArray[Math.floor(Math.random()*titleLength)] + " ";
    let m_alias = m_prefixArray[Math.floor(Math.random()*m_PrefixLength)]+m_SuffixArray[Math.floor(Math.random()*m_SuffixLength)];
    let f_alias = f_prefixArray[Math.floor(Math.random()*f_PrefixLength)]+f_SuffixArray[Math.floor(Math.random()*f_SuffixLength)];

    if (arguments[0] == "female" || arguments[0] == "f") {
        if ((arguments[1] == "title" || arguments[1] == "t") && arguments.length==2) {
            receivedMessage.channel.send("**Your female fantasy alias will be:**")
            receivedMessage.channel.send("`" +
                t_alias +
                f_alias +
                "`"
            )
        } else if (arguments.length==1){
            receivedMessage.channel.send("**Your female fantasy alias will be:**")
            receivedMessage.channel.send("`" +
                f_alias +
                "`"
            )
        } else {
            receivedMessage.channel.send(aliasHelpMessage)
        }
    } else if (arguments[0] == "male" || arguments[0] == "m") {
        if ((arguments[1] == "title" || arguments[1] == "t") && arguments.length==2) {
            receivedMessage.channel.send("**Your male fantasy alias will be:**")
            receivedMessage.channel.send("`" +
                t_alias +
                m_alias +
                "`"
            )
        } else if (arguments.length==1){
            receivedMessage.channel.send("**Your male fantasy alias will be:**")
            receivedMessage.channel.send("`" +
                m_alias +
                "`"
            )
        } else {
            receivedMessage.channel.send(aliasHelpMessage)
        }
    } else {
        receivedMessage.channel.send(aliasHelpMessage)
    }
}

module.exports.alias = alias;
