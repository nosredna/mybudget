import { MongoDataSource } from 'apollo-datasource-mongodb';

export class PlaylistsDataSource extends MongoDataSource {
  getPlaylist(playlistId) {
    return this.findOneById(playlistId);
  }

  allPlaylists() {
    return this.model.find({});
  }

  newPlaylist(playlistInput) {
    return this.model.create(playlistInput);
  }

  updatePlaylist(playlistInput) {
    const { id, ...update } = playlistInput;

    return this.model.findByIdAndUpdate(id, update, { new: true });
  }
}
