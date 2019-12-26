/**
 *
 * Asynchronously loads the component for Authentication
 *
 */

import loadable from 'utils/loadable';

export default loadable(() =>
  import('./index' /* webpackChunkName: 'authentication' */),
);
