import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import types from './types.gql';
import mocks from './mocks';

const schema = makeExecutableSchema({ typeDefs: types });
addMockFunctionsToSchema({ schema, mocks });

export default schema;