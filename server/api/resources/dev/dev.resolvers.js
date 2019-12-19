const getToken = (_, __, { token }) => token;

export const devResolvers = {
  Query: {
    getToken,
  },
};
