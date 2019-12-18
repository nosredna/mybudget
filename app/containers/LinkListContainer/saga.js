import { takeLatest, call, put, all } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { requestLinksFailed, requestLinksSucceded } from './actions';
import { REQUEST_LINKS, START_ADD } from './constants';

function fetchLinksFromServer(topicName) {
  return fetch(`http://localhost:3000/api/topics/${topicName}/links`).then(
    result => result.json(),
  );
}

function* fetchLinks(action) {
  try {
    const links = yield call(fetchLinksFromServer, action.topicName);
    yield put(requestLinksSucceded(links));
  } catch (e) {
    yield put(requestLinksFailed(e.message));
  }
}

function* requestLinksSaga() {
  yield takeLatest(REQUEST_LINKS, fetchLinks);
}

function* startAdd(action) {
  yield put(push(`/topics/${action.topicName}/add`));
}

function* startAddSaga() {
  yield takeLatest(START_ADD, startAdd);
}

// Individual exports for testing
export default function* linkListContainerSaga() {
  yield all([requestLinksSaga(), startAddSaga()]);
}
