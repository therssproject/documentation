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
  n === 1 ? "Sent a message to Discord" : `Sent ${n} messages to Discord`;

app.use(bodyParser.json());

app.post("/webhooks/discord", (req, res) => {
  const ps = req.body.entries.map((entry) =>
    axios.post(
      DISCORD_WEBHOOK,
      { content: `${entry.title}\n${entry.url}` },
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
