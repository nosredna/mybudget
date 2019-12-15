/*
 *
 * LinkListContainer reducer
 *
 */
import produce from 'immer';
import { REQUEST_LINKS_SUCCEEDED, REQUEST_LINKS_FAILED } from './constants';

export const initialState = {
  links: [],
};

/* eslint-disable default-case, no-param-reassign */
const linkListContainerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case REQUEST_LINKS_SUCCEEDED:
        draft.links = action.links;
        break;
    }
  });

export default linkListContainerReducer;
