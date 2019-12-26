/**
 *
 * PrivateRoute
 *
 */
import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as authActions from 'containers/Authentication/actions';
import { selectAuthenticated } from 'containers/Authentication/selectors';
import { createStructuredSelector } from 'reselect';
import Authentication from 'containers/Authentication';

export function PrivateRoute({
  component: Component,
  scopes,
  requestLogin,
  isAuthenticated,
  ...rest
}) {
  return (
    <>
      <Authentication />
      <Route
        {...rest}
        render={props => {
          // 1. Redirect to login if not logged in.
          if (!isAuthenticated) {
            requestLogin();
            return null;
          }
          // // 2. Display message if user lacks required scope(s).
          // if (scopes.length > 0 && !auth.userHasScopes(scopes)) {
          //   return (
          //     <h1>
          //       Unauthorized - You need the following scope(s) to view this page:{' '}
          //       {scopes.join(',')}.
          //     </h1>
          //   );
          // }

          // 3. Render component
          return <Component {...props} />;
        }}
      />
    </>
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
  scopes: PropTypes.array,
  requestLogin: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

PrivateRoute.defaultProps = {
  scopes: [],
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectAuthenticated,
});

function mapDispatchToProps(dispatch) {
  return {
    requestLogin: () => dispatch(authActions.requestLogin()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(PrivateRoute);
