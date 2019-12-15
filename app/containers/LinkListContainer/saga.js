import { takeLatest, call, put } from 'redux-saga/effects';
import { SELECT_TOPIC } from 'containers/NavigationContainer/constants';
import { requestLinksFailed, requestLinksSucceded } from './actions';

function fetchLinksFromServer(topic) {
  return fetch(`http://localhost:3000/api/topics/${topic.name}/links`).then(
    result => result.json(),
  );
}

function* fetchLinks(action) {
  try {
    const links = yield call(fetchLinksFromServer, action.topic);
    yield put(requestLinksSucceded(links));
  } catch (e) {
    yield put(requestLinksFailed(e.message));
  }
}

// Individual exports for testing
export default function* linkListContainerSaga() {
  yield takeLatest(SELECT_TOPIC, fetchLinks);
}
