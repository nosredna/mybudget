/**
 *
 * Asynchronously loads the component for AuthCallback
 *
 */

import loadable from 'utils/loadable';

export default loadable(() =>
  import('./index' /* webpackChunkName: 'auth-callback' */),
);
