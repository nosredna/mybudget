/*
 *
 * LoginContainer reducer
 *
 */
import produce from 'immer';
import { LOGIN } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const loginContainerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN:
        draft.email = action.email;
        break;
    }
  });

export default loginContainerReducer;
