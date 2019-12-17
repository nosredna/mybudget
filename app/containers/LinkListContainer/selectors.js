import { createSelector } from 'reselect';
import produce from 'immer';
import { selectNavigationContainerDomain } from 'containers/NavigationContainer/selectors';
import { initialState } from './reducer';

/**
 * Direct selector to the linkListContainer state domain
 */

export const selectLinkListContainerDomain = state =>
  state.linkListContainer || initialState;

/**
 * Other specific selectors
 */

export const makeSelectLinks = () =>
  createSelector(
    selectLinkListContainerDomain,
    substate => substate.links,
  );

export const selectRouteTopicName = (state, props) =>
  props.match.params.topicName;

export const makeSelectTopic = () =>
  createSelector(
    selectNavigationContainerDomain,
    selectRouteTopicName,
    (navigationState, routeTopicName) => {
      const selectedTopic = navigationState.topics.find(
        t => t.name === routeTopicName,
      );
      return selectedTopic || { name: '' };
    },
  );
/**
 * Default selector used by LinkListContainer
 */

/* eslint-disable no-param-reassign */
const makeSelectLinkListContainer = () =>
  createSelector(
    selectLinkListContainerDomain,
    makeSelectTopic(),
    (state, topic) =>
      produce(state, draft => {
        draft.topicName = topic.name;
      }),
  );

export default makeSelectLinkListContainer;
