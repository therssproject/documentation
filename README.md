# therssproject

This repository contains therssproject public API documentation and examples. In order to use this API create an account on https://www.therssproject.com

### Create an endpoint

To be able to subscribe to an RSS feed, we must first create an Endpoint. This endpoint will be used to send webhooks with new feed entries. A use case example would be to have a "production" and a "staging" endpoint.

### Create an API key

To be able to create subscriptions and parse feeds using the public API (Not the therssproject dashboard), an API key is required. The API key should be sent on the `Authorization` header of every request.

This is an example of a request to parse the reddit https://www.reddit.com/r/argentina/.rss feed sending the API key on the `Authorization` header:

```bash
curl --request GET \
  --url 'https://api.therssproject.com/v1/feeds?url=https%3A%2F%2Fwww.reddit.com%2Fr%2Fargentina%2F.rss' \
  --header 'Authorization: 16f3d624-b4cb-42af-bbbf-ee893a66260d'
```

### Public API


#### Create feed subscription
To create a subscription, a `POST` request should be sent to the `https://api.therssproject.com/v1/subscriptions` endpoint sending the API key on the `Authorization` header.
The required body attributes are `endpoint`, and `url` which is the RSS feed url. An optional `metadata` attribute  can be used, this attribute will be sent on every webhook.

Request example:

```bash
curl --request POST \
  --url 'https://api.therssproject.com/v1/subscriptions?url=https%3A%2F%2Fwww.reddit.com%2Fr%2Fargentina%2F.rss' \
  --header 'Authorization: 16f3d624-b4cb-42af-bbbf-ee893a66260a' \
  --header 'Content-Type: application/json' \
  --data '{
	"endpoint": "62a553394a314dde29ceee6f",
	"url": "https://www.reddit.com/r/argentina/.rss",
	"metadata": {
		"secret": "foo"
	}
}'
```

Response example:

```json
{
  "id": "62c8b13b32fc930766ba23c7",
  "application": "62a3dfc09b9f7bee4fd5fa66",
  "url": "https://www.reddit.com/r/argentina/.rss",
  "feed": "62bd190dba7e012d91a9dd58",
  "endpoint": "62a553394a314dde29ceee6f",
  "metadata": {
    "secret": "foo"
  },
  "created_at": "2022-07-08T22:35:39.765Z"
}
```
