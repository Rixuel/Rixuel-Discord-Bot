const https = require("https")

function uselessfacts(arguments, receivedMessage) {

    let url = `https://uselessfacts.jsph.pl/api/v2/facts/random?language=en`;

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
                //console.log(json.text);
                receivedMessage.channel.send(json.text);
                
            } catch (error) {
                console.error(error.message);
            };
        });

    }).on("error", (error) => {
        console.error(error.message);
    });
}

module.exports.uselessfacts = uselessfacts; // export your function
