import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';

import ResolutionSchema from '../../api/resolutions/Resolution.graphql';
import UserSchema from '../../api/user/User.graphql';

import resolutionResolver from '../../api/resolutions/resolutionResolver';
import userResolver from '../../api/user/userResolver';

/////////////

const testSchema = `
type Query {
  hi: String
  resolutions: [Resolution]
  user: User
}
`;

const typeDefs = [testSchema, ResolutionSchema, UserSchema];

const hiResolver = {
  Query: {
    hi() {
      return 'Hello Someone';
    },
  },
};

const resolvers = merge(hiResolver, resolutionResolver, userResolver);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

createApolloServer({ schema });
