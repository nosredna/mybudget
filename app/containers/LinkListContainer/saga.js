import { takeLatest, call, put, all } from 'redux-saga/effects';
import { requestLinksFailed, requestLinksSucceded } from './actions';
import { REQUEST_LINKS } from './constants';

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

// Individual exports for testing
export default function* linkListContainerSaga() {
  yield all([takeLatest(REQUEST_LINKS, fetchLinks)]);
}
