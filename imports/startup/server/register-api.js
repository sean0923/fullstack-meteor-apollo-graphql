import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import ResolutionSchema from '../../api/resolutions/Resolution.graphql';

const testSchema = `
type Query {
  hi: String
  resolutions: [Resolution]
}
`;

const typeDefs = [testSchema, ResolutionSchema];

const resolvers = {
  Query: {
    hi() {
      return 'Hello Someone';
    },
    resolutions() {
      return [
        { _id: 'adlfkjaelkjf', name: 'do something' },
        { _id: 'adlfkjerlkjf', name: 'do other thing' },
      ];
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

createApolloServer({ schema });
