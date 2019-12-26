/**
 *
 * AuthCallback
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { handleAuthentication } from 'containers/Authentication/actions';
import Callback from './Callback';

export function AuthCallback(props) {
  return <Callback {...props} />;
}

AuthCallback.propTypes = {
  handleAuthentication: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    handleAuthentication: () => dispatch(handleAuthentication()),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(AuthCallback);
