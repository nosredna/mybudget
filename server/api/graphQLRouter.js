import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash.merge';
import { ApolloServer, AuthenticationError } from 'apollo-server-express';
import { baseResolvers } from './resources/base';
import { devResolvers } from './resources/dev';
import { userResolvers } from './resources/user';
import { songResolvers, songsDataSource } from './resources/song';
import { playlistResolvers, playlistDataSource } from './resources/playlist';
import { accountResolvers } from './resources/account';
import {
  AuthDirective,
  FormattableDateDirective,
  UpperCaseDirective,
} from './modules/directives';
import logger from '../logger';

import { typeDefs } from '../../schema';

const resolvers = [
  baseResolvers,
  userResolvers,
  songResolvers,
  playlistResolvers,
  accountResolvers,
];

const schemaDirectives = {
  formattableDate: FormattableDateDirective,
  auth: AuthDirective,
  toUpper: UpperCaseDirective,
};

const dataSources = () => merge(playlistDataSource, songsDataSource);

if (process.env.NODE_ENV === 'development') {
  resolvers.push(devResolvers);
}

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers: merge(resolvers),
  schemaDirectives,
});

export const graphQLRouter = new ApolloServer({
  schema,
  context: ({ req }) => ({
    req,
    user: req.user,
    token: req.token,
  }),
  dataSources,
  tracing: false, // set to true to send trace data in response
  formatError: error => {
    logger.error(error);
    return error;
  },
  formatResponse: response =>
    // console.log(response);
    response,
  engine: {
    apiKey: process.env.ENGINE_API_KEY,
    schemaTag: process.env.NODE_ENV,
    rewriteError(err) {
      // Return `null` to avoid reporting `AuthenticationError`s
      if (err instanceof AuthenticationError) {
        return null;
      }
      // All other errors will be reported.
      return err;
    },
  },
});
