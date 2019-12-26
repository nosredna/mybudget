/**
 *
 * Asynchronously loads the component for ApiProvider
 *
 */

import loadable from 'utils/loadable';

export default loadable(() =>
  import('./index' /* webpackChunkName: 'api-provider' */),
);
