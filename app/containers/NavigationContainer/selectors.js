import { createSelector } from 'reselect';
import { selectAuthUserProfile } from 'containers/Authentication/selectors';
import produce from 'immer';
import { initialState } from './reducer';

/**
 * Direct selector to the navigationContainer state domain
 */

export const selectNavigationContainerDomain = state =>
  state.navigation || initialState;

/**
 * Other specific selectors
 */

export const makeSelecTopics = () =>
  createSelector(
    selectNavigationContainerDomain,
    navState => navState.topics,
  );

/**
 * Default selector used by NavigationContainer
 */

/* eslint-disable default-case, no-param-reassign */
const makeSelectNavigationContainer = () =>
  createSelector(
    selectNavigationContainerDomain,
    selectAuthUserProfile,
    (substate, userProfile) =>
      produce(substate, draft => {
        draft.email = userProfile ? userProfile.email : null;
      }),
  );

export default makeSelectNavigationContainer;
