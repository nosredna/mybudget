import { createSelector } from 'reselect';
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

export const makeSelectNavigationContainer = () =>
  createSelector(
    selectNavigationContainerDomain,
    substate => substate,
  );
