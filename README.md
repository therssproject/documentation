# therssproject

In order to use this API create an account on https://www.therssproject.com

## Authorization: API Keys

To be able to create subscriptions and parse feeds using the public API an API key is required. The API key should be sent on the `Authorization` header of every request.

Go Dashboard > Settings > API Keys to create a key.

Here’s a request to parse the feed `https://www.reddit.com/r/argentina/.rss` using the API key on the `Authorization` header:

```bash
curl 'https://api.therssproject.com/v1/feeds?url=https%3A%2F%2Fwww.reddit.com%2Fr%2Fargentina%2F.rss' \
  -H 'Authorization: <api-key>'
```

## Create an endpoint

To be subscribe to an feeds (RSS, Atom, *et al*), first create an ”endpoint”. `theressproject` servers will send webhook events with new feed entries to this endpoint.

An use case example would be to have a "production" and a "staging" endpoints.

**Attributes**:

- `title`: a name for the endpoint
- `url`: the URL to which `therssproject` will send webhook events to

**Request example**:

```bash
curl https://api.therssproject.com/v1/endpoints \
  -X POST \
  -H "Authorization: <api-key>" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My endpoint",
    "url": "https://myserver.com/webhooks/rss"
  }'
```

**Response example**

```json
{
  "id": "62a553394a314dde29ceee6f",
  "url": "https://myserver.com/webhooks/rss",
  "created_at": "2022-07-08T22:34:22.765Z"
}
```

## Create a feed subscription

Once the endpoint is created, you can subscribe feeds to it by creating a subscription.

Once a subscription is created, `therssproject` will send events with new entries to this endpoint.

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

## Parse feeds

`therssproject` also supports parsing feeds synchronously.

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
