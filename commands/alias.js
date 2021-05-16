var Alias = require("./alias.json");

function alias(prefix, arguments, receivedMessage) {
    let aliasHelpMessage = "**Command usage:**\n`" +
    prefix + "alias`\n`" +
    prefix + "alias <gender>`\n`" +
    prefix + "alias <gender> <title>`\n`" +
    prefix + "ag <gender> <title>`\n" +
    "\n**Values for:**\n" +
    "`<gender>` = `female`, `f`, `male`, `m`\n" +
    "`<title>` = `title`, `t`\n" +
    "\n**Examples:**\n" +
    "`" + prefix + "alias male title`\n" +
    "`" + prefix + "ag female t`\n" +
    "`" + prefix + "ag male`\n" +
    "`" + prefix + "ag f`\n";

    let f_PrefixArray = Alias.female.prefix;
    let f_SuffixArray = Alias.female.suffix;
    let f_TitleArray = Alias.female.title;
    let m_PrefixArray = Alias.male.prefix;
    let m_SuffixArray = Alias.male.suffix;
    let m_TitleArray = Alias.male.title;

    let f_PrefixLength = Alias.female.prefix.length;
    let f_SuffixLength = Alias.female.suffix.length;
    let f_TitleLength = Alias.female.title.length;
    let m_PrefixLength = Alias.male.prefix.length;
    let m_SuffixLength = Alias.male.suffix.length;
    let m_TitleLength = Alias.male.title.length;

    let f_title = f_TitleArray[Math.floor(Math.random()*f_TitleLength)] + " ";
    let m_title = m_TitleArray[Math.floor(Math.random()*m_TitleLength)] + " ";
    let m_alias = m_PrefixArray[Math.floor(Math.random()*m_PrefixLength)]+m_SuffixArray[Math.floor(Math.random()*m_SuffixLength)];
    let f_alias = f_PrefixArray[Math.floor(Math.random()*f_PrefixLength)]+f_SuffixArray[Math.floor(Math.random()*f_SuffixLength)];

    if (arguments[0] == "female" || arguments[0] == "f") {
        if ((arguments[1] == "title" || arguments[1] == "t") && arguments.length==2) {
            receivedMessage.channel.send("**:womens: Your female fantasy alias will be:**")
            receivedMessage.channel.send("`" +
                f_title +
                f_alias +
                "`"
            )
        } else if (arguments.length==1){
            receivedMessage.channel.send("**:womens: Your female fantasy alias will be:**")
            receivedMessage.channel.send("`" +
                f_alias +
                "`"
            )
        } else {
            receivedMessage.channel.send(aliasHelpMessage)
        }
    } else if (arguments[0] == "male" || arguments[0] == "m") {
        if ((arguments[1] == "title" || arguments[1] == "t") && arguments.length==2) {
            receivedMessage.channel.send("**:mens: Your male fantasy alias will be:**")
            receivedMessage.channel.send("`" +
                m_title +
                m_alias +
                "`"
            )
        } else if (arguments.length==1){
            receivedMessage.channel.send("**:mens: Your male fantasy alias will be:**")
            receivedMessage.channel.send("`" +
                m_alias +
                "`"
            )
        } else {
            receivedMessage.channel.send(aliasHelpMessage)
        }
    } else if (arguments.length==0) {
        let randomNum = Math.floor(Math.random() * 4);
        receivedMessage.channel.send("**:mens: :womens: Your random fantasy alias will be:**")

        switch(randomNum) {
            case 0:
                receivedMessage.channel.send("`" +
                    f_title +
                    f_alias +
                    "`"
                )
                break;
            case 1:
                receivedMessage.channel.send("`" +
                    f_alias +
                    "`"
                )
                break;
            case 2:
                receivedMessage.channel.send("`" +
                    m_title +
                    m_alias +
                    "`"
                )
                break;
            case 3:
                receivedMessage.channel.send("`" +
                    m_alias +
                    "`"
                )
                break;
        }
    } else {
        receivedMessage.channel.send(aliasHelpMessage)
    }
}

module.exports.alias = alias;
