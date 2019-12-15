/*
 *
 * NavigationContainer reducer
 *
 */
import produce from 'immer';
import { REQUEST_TOPICS_SUCCEEDED, SELECT_TOPIC } from './constants';

export const initialState = {
  topics: [],
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
        break;
    }
  });

export default navigationContainerReducer;
