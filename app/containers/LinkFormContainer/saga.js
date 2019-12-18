import { takeLatest, put, call, all } from 'redux-saga/effects';
import { goBack } from 'connected-react-router';
import { requestLinks } from 'containers/LinkListContainer/actions';
import { REQUEST_ADD_LINK, CANCEL_ADD_LINK } from './constants';

function* addLink(link) {
  return fetch(`http://localhost:3000/api/topics/${link.topicName}/links`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(link),
  });
}

function* requestAddLink(action) {
  try {
    yield call(addLink, action.link);
    yield put(requestLinks(action.link.topicName));
    yield call(handleDone);
  } catch (e) {
    console.log('add link error', e.message);
  }
}

function* handleDone() {
  yield put(goBack());
}

// Individual exports for testing
export default function* linkFormContainerSaga() {
  yield all([
    takeLatest(REQUEST_ADD_LINK, requestAddLink),
    takeLatest(CANCEL_ADD_LINK, handleDone),
  ]);
}
