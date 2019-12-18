/*
 *
 * LinkListContainer reducer
 *
 */
import produce from 'immer';
import { ADD_LINK_SUCCEEDED } from 'containers/LinkFormContainer/constants';
import { REQUEST_LINKS_SUCCEEDED } from './constants';

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
      case ADD_LINK_SUCCEEDED:
        draft.links.push(action.link);
        break;
    }
  });

export default linkListContainerReducer;
