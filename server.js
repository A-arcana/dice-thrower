// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const dotenv = require('dotenv');
const path = require('path');

const app = express();

if (process.env.NODE_ENV) {
    dotenv.config(
        {
            path: path.resolve(process.cwd(), '.env') +
                '.' + process.env.NODE_ENV
        }
    );
}
else {
    dotenv.config();
}

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html");
});

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/' + req.params[0]);
});


const port = process.env.PORT ||
    process.env.SERVER_PORT ||
    8443;

// listen for requests :)
const listener = app.listen(port, () => {
    console.log("Your app is listening on port " + listener.address().port);
});

setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);