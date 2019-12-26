/**
 *
 * ApiProvider
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import ApiProviderComponent from 'components/ApiProviderComponent';
import { selectAuthToken } from 'containers/Authentication/selectors';

export function ApiProvider({ children, authToken }) {
  return (
    <ApiProviderComponent authToken={authToken}>
      {children}
    </ApiProviderComponent>
  );
}

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
  authToken: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  authToken: selectAuthToken,
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(withConnect)(ApiProvider);
