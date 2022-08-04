---
title: Parse feeds
nav_order: 6
---

# Parse feeds


`therssproject` also supports parsing feeds on demand.

**Query**

- `url`: the URL of the feed to be parsed

```bash
curl 'https://api.therssproject.com/v1/feeds?url=https%3A%2F%2Fwww.reddit.com%2Fr%2Fargentina%2F.rss' \
  -H 'Authorization: <api-key>'
```

**Response example**:

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
