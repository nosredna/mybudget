/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import navigationContainerReducer from 'containers/NavigationContainer/reducer';
import authenticationReducer from 'containers/Authentication/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    router: connectRouter(history),
    navigation: navigationContainerReducer,
    auth: authenticationReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
