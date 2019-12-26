/**
 * Asynchronously loads the component for AppError
 */

import loadable from 'utils/loadable';

export default loadable(() =>
  import('./index' /* webpackChunkName: "error-msg" */),
);
