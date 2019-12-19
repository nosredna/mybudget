import { MongoDataSource } from 'apollo-datasource-mongodb';

export class SongsDataSource extends MongoDataSource {
  getSongs(songIds) {
    if (!songIds) return [];
    return this.findManyByIds(songIds);
  }
}
