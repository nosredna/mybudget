// import { take, call, put, select } from 'redux-saga/effects';

import { takeLatest, call, put } from 'redux-saga/effects';
import { REQUEST_TOPICS } from './constants';
import { requestTopicsFailed, requestTopicsSucceeded } from './actions';

export function fetchTopicsFromServer() {
  return fetch('http://localhost:3000/api/topics').then(response =>
    response.json(),
  );
}

export function* fetchTopics() {
  try {
    const topics = yield call(fetchTopicsFromServer);
    yield put(requestTopicsSucceeded(topics));
  } catch (e) {
    yield put(requestTopicsFailed(e.message));
  }
}

function* fetchTopicsSaga() {
  yield takeLatest(REQUEST_TOPICS, fetchTopics);
}

// Individual exports for testing
export default fetchTopicsSaga;
