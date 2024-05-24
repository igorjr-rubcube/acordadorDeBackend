const { schedule } = require("node-cron");
const cors = require('cors');
const { DateTime } = require('luxon');
const express = require('express');

DateTime.local().setZone("America/Sao_Paulo");

const app = express();

app.use(express.json());

app.use(cors({
    origin: '*'
}));

schedule("*/5 * * * *", () => {
    fetch('https://verlogsrender.onrender.com/', {
        method: "GET"
    })
}, {
    timezone: "America/Sao_Paulo"
});

app.get("/", (req, res) => {
    return res.send("Hello World");
  });
  
app.listen(process.env.PORT || 3344);

