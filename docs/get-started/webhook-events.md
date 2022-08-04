---
title:Webhook events 
nav_order: 4
parent: Getting Started
---

# Webhook Events

Once a subscription is created, `therssproject` API will listed for new entries on the feed and send webhook events to the endpoint with the new entries.

**Webhook payload example**:

```json
{
  "feed_type": "atom",
  "title": "...",
  "description": "...",
  "entries": [
    {
      "url": "https://www.reddit.com/r/argentina/comments/w6ra48/preguntas_del_domingo/",
      "title": "Preguntas del Domingo",
      "description": null,
      "published_at": "2022-07-24T09:00:16Z"
    }
  ]
}
```
