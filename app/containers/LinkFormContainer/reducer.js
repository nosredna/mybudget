/*
 *
 * LinkFormContainer reducer
 *
 */
import produce from 'immer';
// import { DEFAULT_ACTION } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const linkFormContainerReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      default:
        break;
    }
  });

export default linkFormContainerReducer;
