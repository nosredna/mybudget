/*
 *
 * LinkListContainer actions
 *
 */

import {
  REQUEST_LINKS_FAILED,
  REQUEST_LINKS_SUCCEEDED,
  REQUEST_LINKS,
  GO_ADD_LINK,
} from './constants';

export function requestLinks(topicName) {
  return {
    type: REQUEST_LINKS,
    topicName,
  };
}

export function requestLinksSucceded(links) {
  return {
    type: REQUEST_LINKS_SUCCEEDED,
    links,
  };
}

export function requestLinksFailed(message) {
  return {
    type: REQUEST_LINKS_FAILED,
    message,
  };
}

export function goAddLink(topicName) {
  return {
    type: GO_ADD_LINK,
    topicName,
  };
}
