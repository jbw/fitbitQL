# fitbitQL
GraphQL interface to your Fitbit data.

`yarn run start`

Go to [http://localhost:3000/graphiql](http://localhost:3000/graphiql)

Query example:

```
{
  activities {
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
        "name": "Walk"
      }
    ],
    "steps": {
      "count": 1000
    }
  }
}
```
