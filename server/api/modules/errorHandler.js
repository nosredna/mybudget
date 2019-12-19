import { ApolloError } from 'apollo-server-core';

export const apiErrorHandler = (error, req, res /* , next */) => {
  res.status(500).send(error.message || error.toString());
};

export class DocumentNotFoundError extends ApolloError {
  constructor(message) {
    super(message, 'DOCUMENT_NOT_FOUND');
  }
}
