
import { ApolloClient } from 'apollo-client';
import gql from 'graphql-tag';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';

const token = require('../secrets/token').access_token || 'NO_TOKEN_GIVEN';

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql',
  fetch,
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: token || '',
  },
}));

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const summary = gql`{ summary(dateOrPeriod: "today") { steps sedentaryMinutes veryActiveMinutes}}`;
client.query({
  query: summary,
}).then(console.log);
