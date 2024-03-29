---
title: Endpoints
nav_order: 2
parent: Getting Started
---

# Register an endpoint

To be able to subscribe to feeds (RSS, Atom, JSON), first you should register an endpoint.
This endpoint is used by our servers to send webhook events with new feed entries.
Multiple endpoints can be created, and each subscription can be attached to a different endpoint.

An use case example would be to have "production" and "test" endpoints for the same application.

An endpoint can be created using the dashboard in https://www.therssproject.com or by making an API request using the previously created API Key.

To create an endpoint using the API, use the following `curl` example with the required attributes.

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
    "title": "My production endpoint",
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
