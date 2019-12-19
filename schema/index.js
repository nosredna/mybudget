import accountType from './account.graphql';
import userType from './user.graphql';
import baseType from './base.graphql';
import devType from './dev.graphql';
import songType from './song.graphql';
import playlistType from './playlist.graphql';

export const typeDefs = [
  baseType,
  userType,
  songType,
  playlistType,
  accountType,
];

if (process.env.NODE_ENV === 'development') {
  typeDefs.push(devType);
}
