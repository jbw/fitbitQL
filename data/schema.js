import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import resolvers from './resolvers';
import typeDefs from './types.gql';
import mocks from './mocks';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

addMockFunctionsToSchema({
  schema,
  mocks,
  resolvers,
  preserveResolvers: false, // use mocks
});


export default schema;
