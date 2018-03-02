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

  summary(dateOrPeriod: "today") {
    steps
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

    "summary": {
      "steps": 1000
    }

    "steps": {
      "count": 1000
    }
  }
}
```
