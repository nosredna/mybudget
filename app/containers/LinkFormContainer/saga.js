import { takeLatest, put, call, all } from 'redux-saga/effects';
import { goBack } from 'connected-react-router';
import { createLink } from 'api';
import { ADD_LINK, ADD_LINK_CANCELLED } from './constants';
import { addLinkFailed, addLinkSucceeded } from './actions';

function* handleDone() {
  yield put(goBack());
}

function* addLinkCanceledSaga() {
  yield takeLatest(ADD_LINK_CANCELLED, handleDone);
}

function* addLink(action) {
  try {
    const serverLink = yield call(createLink, action.link);
    yield put(addLinkSucceeded(serverLink));
    yield put(goBack());
  } catch (e) {
    yield put(addLinkFailed(action.link, e.message));
  }
}

function* addLinkSaga() {
  yield takeLatest(ADD_LINK, addLink);
}

// function* addLinkFailedSaga() {
//   yield takeLatest(ADD_LINK_FAILED);
// }

// Individual exports for testing
export default function* linkFormContainerSaga() {
  yield all([addLinkSaga(), addLinkCanceledSaga()]);
}
