import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import Hypertonic from 'hypertonic';

import schema from './data/schema';

const PORT = 3000;

const server = express();

server.use('/graphql', bodyParser.json(), graphqlExpress((req) => {
  const token = req.header('Authorization') || '';

  return {
    schema,
    context: {
      user: token,
      fitbit: Hypertonic(token),
    },
  };
}));

server.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

server.listen(PORT, () =>
  console.log(`GraphiQL is now running on http://localhost:${PORT}/graphiql`));
