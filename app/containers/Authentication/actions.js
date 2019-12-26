/*
 *
 * Authentication actions
 *
 */

import {
  REQUEST_LOGIN,
  REQUEST_LOGOUT,
  HANDLE_AUTHENTICATION,
  HANDLE_AUTHENTICATION_SUCCEEDED,
  HANDLE_AUTHENTICATION_FAILED,
  SCHEDULE_TOKEN_RENEWAL,
  TOKEN_RENEWAL_SUCCEEDED,
  TOKEN_RENEWAL_FAILED,
} from './constants';

export function requestLogin() {
  return {
    type: REQUEST_LOGIN,
  };
}

export function requestLogout() {
  return {
    type: REQUEST_LOGOUT,
  };
}

export function handleAuthentication() {
  return {
    type: HANDLE_AUTHENTICATION,
  };
}

export function handleAuthenticationSucceeded(user) {
  return {
    type: HANDLE_AUTHENTICATION_SUCCEEDED,
    user,
  };
}

export function scheduleTokenRenewal(expiresAt) {
  return {
    type: SCHEDULE_TOKEN_RENEWAL,
    expiresAt,
  };
}

export function tokenRenewalSucceeded(user) {
  return {
    type: TOKEN_RENEWAL_SUCCEEDED,
    user,
  };
}

export function tokenRenewalFailed(message) {
  return {
    type: TOKEN_RENEWAL_FAILED,
    message,
  };
}

export function handleAuthenticationFailed(message) {
  return {
    type: HANDLE_AUTHENTICATION_FAILED,
    message,
  };
}
