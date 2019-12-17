/**
 *
 * LoginContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Login from 'components/Login';
import makeSelectLoginContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import { login, cancelLogin } from './actions';

export function LoginContainer(props) {
  useInjectReducer({ key: 'loginContainer', reducer });
  useInjectSaga({ key: 'loginContainer', saga });

  return (
    <div>
      <Login {...props} />
    </div>
  );
}

LoginContainer.propTypes = {};

const mapStateToProps = createStructuredSelector({
  loginContainer: makeSelectLoginContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    login: email => dispatch(login(email)),
    cancelLogin: () => dispatch(cancelLogin()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(LoginContainer);
