/**
 *
 * ApiProvider
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloLink, concat } from 'apollo-link';

function ApiProviderComponent({ children, authToken }) {
  const cache = new InMemoryCache();
  const httpLink = new HttpLink({
    uri: '/graphql',
  });

  const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    operation.setContext({
      headers: {
        authorization: authToken ? `Bearer ${authToken}` : null,
      },
    });

    return forward(operation);
  });

  const client = new ApolloClient({
    link: concat(authMiddleware, httpLink),
    cache,
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

ApiProviderComponent.propTypes = {
  children: PropTypes.node.isRequired,
  authToken: PropTypes.string,
};

export default ApiProviderComponent;
