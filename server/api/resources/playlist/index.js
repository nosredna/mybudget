import { Playlist } from './playlist.model';
import { PlaylistsDataSource } from './playlist.datasource';
export { playlistResolvers } from './playlist.resolvers';

export const playlistDataSource = {
  playlists: new PlaylistsDataSource(Playlist),
};
