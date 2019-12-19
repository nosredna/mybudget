import { SongsDataSource } from './song.datasource';
import { Song } from './song.model';
export { songResolvers } from './song.resolvers';

export const songsDataSource = {
  songs: new SongsDataSource(Song),
};
