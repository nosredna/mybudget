import merge from 'lodash.merge';
import { Account } from './account.model';
import { DocumentNotFoundError } from '../../modules/errorHandler';

const getAccount = async (_, { id }, { user }) => {
  const account = await Account.findById(id);
  if (account && user.equals(account.user)) {
    return account;
  }
  throw new DocumentNotFoundError('Account not found!');
};

const allAccounts = (_, __, { user }) => Account.find({ user }).exec();

const newAccount = (_, { input }, { user }) => {
  const newInput = { user, ...input };
  return Account.create(newInput);
};

const updateAccount = async (_, { input }, { user }) => {
  // const { id, ...update } = input; // this causes error: Property name expected type of string but got null
  const account = await Account.findById(input.id);
  if (account && user.equals(account.user)) {
    merge(account, input);
    return account.save();
  }
  throw new DocumentNotFoundError('Account not found!');
};

export const accountResolvers = {
  Query: {
    getAccount,
    allAccounts,
  },
  Mutation: {
    newAccount,
    updateAccount,
  },
};
