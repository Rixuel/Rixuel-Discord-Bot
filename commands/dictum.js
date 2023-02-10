const { EmbedBuilder } = require("discord.js")
const https = require("https")

function dictum(arguments, receivedMessage) {
    let url = `https://api.fisenko.net/v1/quotes/en/random`;

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
                let dictumText = json.text;
                let dictumAuthor = json.author.name;

                const dictumEmbed = new EmbedBuilder()
                    .setColor('#01DD92')
                    .setDescription("```yaml\n" + dictumText + "```\n" + "`" + dictumAuthor + "`")
                receivedMessage.channel.send({ embeds : [dictumEmbed] });
                
            } catch (error) {
                console.error(error.message);
            };
        });

    }).on("error", (error) => {
        console.error(error.message);
    });
}

module.exports.dictum = dictum; // export your function
