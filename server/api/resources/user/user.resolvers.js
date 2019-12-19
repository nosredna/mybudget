import merge from 'lodash.merge';
// import { User } from './user.model';

const getMe = (_, __, { user }) => user;

const updateMe = (_, { input }, { user }) => {
  merge(user, input);
  merge(user, { name: `${user.firstName} ${user.lastName}`.trim() });
  return user.save();
};

export const userResolvers = {
  Query: {
    getMe,
  },
  Mutation: {
    updateMe,
  },
};
