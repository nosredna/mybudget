/*
 *
 * NavigationContainer reducer
 *
 */
import produce from 'immer';
import {
  REQUEST_TOPICS_SUCCEEDED,
  SELECT_TOPIC,
  TOGGLE_DRAWER,
} from './constants';

export const initialState = {
  topics: [],
  isDrawerOpen: false,
};

/* eslint-disable default-case, no-param-reassign */
const navigationContainerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case REQUEST_TOPICS_SUCCEEDED:
        draft.topics = action.topics;
        break;
      case SELECT_TOPIC:
        draft.selectedTopic = action.topic;
        draft.isDrawerOpen = false;
        break;
      case TOGGLE_DRAWER:
        draft.isDrawerOpen = !draft.isDrawerOpen;
        break;
    }
  });

export default navigationContainerReducer;
