import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import schema from './data/schema';

const PORT = 3000;

const server = express();

server.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
server.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

server.listen(PORT, () =>
  console.log(`GraphiQL is now running on http://localhost:${PORT}/graphiql`));
