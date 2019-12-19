const getPlaylist = (_, { id }, { dataSources: { playlists } }) =>
  playlists.getPlaylist(id);

const allPlaylists = (_, __, { dataSources: { playlists } }) =>
  playlists.allPlaylists();

const newPlaylist = (_, { input }, { dataSources: { playlists } }) =>
  playlists.newPlaylist(input);

const updatePlaylist = (_, { input }, { dataSources: { playlists } }) =>
  playlists.updatePlaylist(input);

export const playlistResolvers = {
  Query: {
    allPlaylists,
    Playlist: getPlaylist,
  },

  Mutation: {
    newPlaylist,
    updatePlaylist,
  },

  Playlist: {
    songs: (playlist, _, { dataSources: { songs } }) =>
      songs.getSongs(playlist.songs),
  },
};
