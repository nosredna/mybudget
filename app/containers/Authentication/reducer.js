/*
 *
 * Authentication reducer
 *
 */
import produce from 'immer';
import { HANDLE_AUTHENTICATION_SUCCEEDED } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const authenticationReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case HANDLE_AUTHENTICATION_SUCCEEDED:
        draft.user = action.user;
        break;
    }
  });

export default authenticationReducer;
