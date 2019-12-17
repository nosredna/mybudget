import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  REQUEST_TOPICS,
  SELECT_TOPIC,
  REQUEST_TOPICS_SUCCEEDED,
} from './constants';
import { requestTopicsFailed, requestTopicsSucceeded } from './actions';
import makeSelectNavigationContainer from './selectors';

function fetchTopicsFromServer() {
  return fetch('http://localhost:3000/api/topics').then(response =>
    response.json(),
  );
}

function* fetchTopics() {
  try {
    const topics = yield call(fetchTopicsFromServer);
    yield put(requestTopicsSucceeded(topics));
  } catch (e) {
    yield put(requestTopicsFailed(e.message));
  }
}

function* pushTopic(action) {
  yield put(push(`/topics/${action.topic.name}`));
}

function* selectDefaultTopic() {
  const state = yield select(makeSelectNavigationContainer());
  if (!state.selectedTopic) {
    yield put(push(`/topics/${state.topics[0].name}`));
  }
}

// Individual exports for testing
export default function* navigationContainerSaga() {
  yield all([
    takeLatest(SELECT_TOPIC, pushTopic),
    takeLatest(REQUEST_TOPICS, fetchTopics),
    takeLatest(REQUEST_TOPICS_SUCCEEDED, selectDefaultTopic),
  ]);
}
