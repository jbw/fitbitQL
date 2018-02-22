# fitbitQL
GraphQL interface to your Fitbit data.

`yarn run start`

Go to [http://localhost:3000/graphiql](http://localhost:3000/graphiql)

Query example:

```
{
  Fitbit {
    Steps {
      count
    }
  }
}
```

Result

```json
{
  "data": {
    "Fitbit": {
      "Steps": {
        "count": 1000
      }
    }
  }
}
```