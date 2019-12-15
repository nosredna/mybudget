import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the linkListContainer state domain
 */

const selectLinkListContainerDomain = state =>
  state.linkListContainer || initialState;

/**
 * Other specific selectors
 */

const makeSelectLinks = () =>
  createSelector(
    selectLinkListContainerDomain,
    substate => substate.links,
  );

/**
 * Default selector used by LinkListContainer
 */

const makeSelectLinkListContainer = () =>
  createSelector(
    selectLinkListContainerDomain,
    substate => substate,
  );

export default makeSelectLinkListContainer;
export { selectLinkListContainerDomain, makeSelectLinks };
