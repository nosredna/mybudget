/**
 *
 * Authentication
 *
 */

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';

export function Authentication() {
  useInjectReducer({ key: 'auth', reducer });
  useInjectSaga({ key: 'auth', saga });

  return null;
}

Authentication.propTypes = {};

export default Authentication;
