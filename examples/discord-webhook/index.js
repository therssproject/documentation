const axios = require("axios");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const DISCORD_WEBHOOK = process.env.DISCORD_WEBHOOK;

if (!DISCORD_WEBHOOK) {
  console.error("No DISCORD_WEBHOOK");
  process.exit(1);
}

const report = (n) =>
  `Sent message with ${n === 1 ? "one entry" : `${n} entries`} to Discord`;

app.use(bodyParser.json());

app.post("/webhooks/discord", (req, res) => {
  const content = req.body.entries
    .map((entry) => `${entry.title}\n${entry.url}`)
    .join("\n\n");

  axios
    .post(
      DISCORD_WEBHOOK,
      { content },
      { headers: { "Content-Type": "application/json" } }
    )
    .then(() => console.log(report(req.body.entries.length)))
    .catch(() => console.error("Failed to send messages"));

  res.send("Ok");
});

const port = process.env.PORT || 9999;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
