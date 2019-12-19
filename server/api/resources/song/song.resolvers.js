import { Song } from './song.model';

const getSong = (_, { id }) => Song.findById(id).exec();

const allSongs = () => Song.find({}).exec();

const newSong = (_, { input }) => Song.create(input);

const updateSong = (_, { input }) => {
  const { id, ...update } = input;

  return Song.findByIdAndUpdate(id, update, { new: true }).exec();
};

export const songResolvers = {
  Query: {
    allSongs,
    Song: getSong,
  },

  Mutation: {
    newSong,
    updateSong,
  },
};
