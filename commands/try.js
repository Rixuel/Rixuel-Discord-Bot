const { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle } = require("discord.js")
const https = require("https")

function tryCommands(arguments, receivedMessage) {
    receivedMessage.channel.send("Try commands")
    /*
    let url = `https://uselessfacts.jsph.pl/random.json?language=en`;

    https.get(url,(response) => {
        let body = "";

        response.on("data", (chunk) => {
            body += chunk;
        });

        response.on("end", () => {
            try {
                let json = JSON.parse(body);
                // do something with JSON
                //console.log(json);
                receivedMessage.channel.send(json.text)
                console.log(json.text);
                
            } catch (error) {
                console.error(error.message);
            };
        });

    }).on("error", (error) => {
        console.error(error.message);
    });
    */
}

module.exports.tryCommands = tryCommands; // export your function
