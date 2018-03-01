# fitbitQL
GraphQL interface to your Fitbit data.

`yarn run start`

Go to [http://localhost:3000/graphiql](http://localhost:3000/graphiql)

## Query example:

```graphql
{
  activities(activityType: "Walk") {
    id
    name
  }
  steps {
    count
  }
}
```

Result

```json
{
  "data": {
    "activities": [
      {
        "id": 1,
        "name": "Walk"
      }
    ],
    "steps": {
      "count": 1000
    }
  }
}
```
