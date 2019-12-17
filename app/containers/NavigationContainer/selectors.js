import { createSelector } from 'reselect';
import makeSelectLoginContainer from 'containers/LoginContainer/selectors';
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
    makeSelectLoginContainer(),
    (substate, loginState) =>
      produce(substate, draft => {
        console.log(loginState);
        Object.assign(draft, loginState);
      }),
  );

export default makeSelectNavigationContainer;
