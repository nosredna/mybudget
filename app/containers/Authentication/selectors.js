import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the authentication state domain
 */

const selectAuthenticationDomain = state => state.auth || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Authentication
 */

const selectAuthentication = createSelector(
  selectAuthenticationDomain,
  substate => substate,
);

const selectAuthUserProfile = createSelector(
  selectAuthenticationDomain,
  substate => (substate.user ? substate.user.profile : null),
);

const selectAuthToken = createSelector(
  selectAuthenticationDomain,
  substate => (substate.user ? substate.user.accessToken : null),
);

const selectAuthenticated = createSelector(
  selectAuthenticationDomain,
  substate => (substate.user ? substate.user.authenticated : false),
);

const selectRouterCurrentLocation = state => state.router.location.pathname;

export default selectAuthentication;
export {
  selectAuthenticationDomain,
  selectAuthUserProfile,
  selectAuthToken,
  selectAuthenticated,
  selectRouterCurrentLocation,
};
