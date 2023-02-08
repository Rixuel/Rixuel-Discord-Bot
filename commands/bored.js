const https = require("https")

function bored(arguments, receivedMessage) {

    let url = `https://www.boredapi.com/api/activity`;

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
                //console.log(json.message);
                receivedMessage.channel.send(json.activity);
                
            } catch (error) {
                console.error(error.message);
            };
        });

    }).on("error", (error) => {
        console.error(error.message);
    });
}

module.exports.bored = bored; // export your function
