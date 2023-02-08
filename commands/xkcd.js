const { EmbedBuilder } = require("discord.js")
const https = require("https")

function xkcd(arguments, receivedMessage) {
    let randomNum = Math.floor(Math.random() * 614);
    let url = `https://xkcd.com/${randomNum}/info.0.json`;

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
                //console.log(json.img);
                const xkcdEmbed = new EmbedBuilder()
                    .setColor('#777777')
                    .setTitle(json.title)
                    .setDescription(json.alt)
                    .setImage(json.img)
                receivedMessage.channel.send({ embeds : [xkcdEmbed] });
                
            } catch (error) {
                console.error(error.message);
            };
        });

    }).on("error", (error) => {
        console.error(error.message);
    });
}

module.exports.xkcd = xkcd; // export your function
