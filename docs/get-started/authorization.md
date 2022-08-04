---
title: Authorization
nav_order: 1
parent: Get Started
---

# Authorization: API Keys

In order to use this API create an account on <https://www.therssproject.com>

To be able to create subscriptions and parse feeds using the public API an API key is required. The API key should be sent on the `Authorization` header of every request.

Go **Dashboard > Settings > API Keys** to create a key.

Here's a request example to parse the feed `https://www.reddit.com/r/argentina/.rss` using the API key on the `Authorization` header:

```bash
curl 'https://api.therssproject.com/v1/feeds?url=https%3A%2F%2Fwww.reddit.com%2Fr%2Fargentina%2F.rss' \
  -H 'Authorization: <api-key>'
```
