import { takeLatest, call, put, all, delay, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  REQUEST_LOGIN,
  HANDLE_AUTHENTICATION,
  SCHEDULE_TOKEN_RENEWAL,
  REQUEST_LOGOUT,
} from './constants';
import * as auth from './Auth';
import * as actions from './actions';
import { selectRouterCurrentLocation } from './selectors';

function* authLogout() {
  yield call(auth.logout);
  yield put(push('/'));
}

function* requestLogoutSaga() {
  yield takeLatest(REQUEST_LOGOUT, authLogout);
}

function* authLogin() {
  const redirectUrl = yield select(selectRouterCurrentLocation);
  yield call([localStorage, 'setItem'], 'auth.redirect-url', redirectUrl);
  yield call(auth.login);
}

function* requestLoginSaga() {
  yield takeLatest(REQUEST_LOGIN, authLogin);
}

function* scheduleTokenRenewal(action) {
  const delayTime = action.expiresAt - Date.now();
  yield delay(delayTime);
  try {
    const user = yield call(auth.renewToken);
    yield put(actions.tokenRenewalSucceeded(user));
    yield put(actions.scheduleTokenRenewal(user.expiresAt));
  } catch (err) {
    yield put(actions.tokenRenewalFailed(err.message));
  }
}

function* renewTokenSaga() {
  yield takeLatest(SCHEDULE_TOKEN_RENEWAL, scheduleTokenRenewal);
}

function* handleAuthenticationCallback() {
  try {
    const user = yield call(auth.handleAuthentication);
    yield put(actions.handleAuthenticationSucceeded(user));
    yield put(actions.scheduleTokenRenewal(user.expiresAt));
    const redirectUrl = yield call(
      [localStorage, 'getItem'],
      'auth.redirect-url',
    );
    yield call([localStorage, 'removeItem'], 'auth.redirect-url');
    yield put(push(redirectUrl));
  } catch (err) {
    yield put(actions.handleAuthenticationFailed(err.message));
  }
}

function* handleAuthenticationSaga() {
  yield takeLatest(HANDLE_AUTHENTICATION, handleAuthenticationCallback);
}

// Individual exports for testing
export default function* authenticationSaga() {
  yield all([
    requestLoginSaga(),
    requestLogoutSaga(),
    handleAuthenticationSaga(),
    renewTokenSaga(),
  ]);
}
