const https = require("https")

function techy(arguments, receivedMessage) {

    let url = `https://techy-api.vercel.app/api/json`;

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
                receivedMessage.channel.send(json.message);
                
            } catch (error) {
                console.error(error.message);
            };
        });

    }).on("error", (error) => {
        console.error(error.message);
    });
}

module.exports.techy = techy; // export your function
