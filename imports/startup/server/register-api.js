import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';

import ResolutionSchema from '../../api/resolutions/Resolution.graphql';
import resolutionResolver from '../../api/resolutions/resolutionResolver';

const testSchema = `
type Query {
  hi: String
  resolutions: [Resolution]
}
`;

const typeDefs = [testSchema, ResolutionSchema];

const hiResolver = {
  Query: {
    hi() {
      return 'Hello Someone';
    },
  },
};

const resolvers = merge(hiResolver, resolutionResolver);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

createApolloServer({ schema });
