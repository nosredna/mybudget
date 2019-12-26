import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the apiProvider state domain
 */

const selectApiProviderDomain = state => state.apiProvider || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ApiProvider
 */

const makeSelectApiProvider = () =>
  createSelector(
    selectApiProviderDomain,
    substate => substate,
  );

export default makeSelectApiProvider;
export { selectApiProviderDomain };
