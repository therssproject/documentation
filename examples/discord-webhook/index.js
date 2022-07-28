const axios = require("axios");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const DISCORD_WEBHOOK =
  process.env.DISCORD_WEBHOOK ||
  "https://discord.com/api/webhooks/1002292754782621747/jqL5Ed890V3bvOKqoALUEZgSxPGya_eUce-5Yae8VxSDkyLdbLTEMLfH0NZHX-_LRkzd";

const mkContent = (entry) => [entry.title, "", entry.url].join("\n");
const report = (n) =>
  n === 1 ? "Sent a message to Discord" : `Sent ${n} messages to Discord`;

app.use(bodyParser.json());

app.post("/webhooks/discord", (req, res) => {
  const ps = req.body.entries
    .map(mkContent)
    .map((content) =>
      axios.post(
        DISCORD_WEBHOOK,
        { content },
        { headers: { "Content-Type": "application/json" } }
      )
    );

  Promise.all(ps)
    .then((results) => console.log(report(results.length)))
    .catch(() => console.error("Failed to send messages"));

  res.send("Ok");
});

const port = process.env.PORT || 9999;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
