import { takeLatest, put, all } from 'redux-saga/effects';
import { goBack } from 'connected-react-router';
import { LOGIN, CANCEL_LOGIN } from './constants';

function* handleDone() {
  yield put(goBack());
}

export function* doLoginSaga() {
  yield takeLatest(LOGIN, handleDone);
}

export function* cancelSaga() {
  yield takeLatest(CANCEL_LOGIN, handleDone);
}

// Individual exports for testing
export default function* loginContainerSaga() {
  yield all([doLoginSaga(), cancelSaga()]);
}
