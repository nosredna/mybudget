/*
 *
 * LinkFormContainer actions
 *
 */

import { REQUEST_ADD_LINK, CANCEL_ADD_LINK } from './constants';

export function requestAddLink(link) {
  return {
    type: REQUEST_ADD_LINK,
    link,
  };
}

export function cancelAddLink() {
  return {
    type: CANCEL_ADD_LINK,
  };
}
