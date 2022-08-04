---
title: Subscriptions
nav_order: 3
parent: Get Started
---

# Create a feed subscription

Once an endpoint is registered you can create feed subscriptions attached to that endpoint.

`therssproject` API will listed for new entries on the feed and send webhook events to the endpoint with the new entries.

**Attributes**:

- `endpoint`: the ID of the endpoint to send updates to
- `url`: the feed url
- `metadata` (optional): a JSON payload to be send in the webhooks events

**Request example**:

```bash
curl https://api.therssproject.com/v1/subscriptions \
  -X POST \
  -H "Authorization: <api-key>" \
  -H "Content-Type: application/json" \
  -d '{
    "endpoint": "62a553394a314dde29ceee6f",
    "url": "https://www.reddit.com/r/argentina/.rss",
	"metadata": { "foo": "bar" }
  }'
```

**Response example**:

```json
{
  "id": "62c8b13b32fc930766ba23c7",
  "application": "62a3dfc09b9f7bee4fd5fa66",
  "url": "https://www.reddit.com/r/argentina/.rss",
  "feed": "62bd190dba7e012d91a9dd58",
  "endpoint": "62a553394a314dde29ceee6f",
  "metadata": { "foo": "bar" },
  "created_at": "2022-07-08T22:35:39.765Z"
}
```
