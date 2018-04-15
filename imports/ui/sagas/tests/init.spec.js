//Testing
import { testSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';

import {
  initializeAsyncStateWorker,
  initializeAsyncStateWatcher
} from '../init';

// Action Types
import { INIT } from '../../actionTypes/generic';

// Action Creators
import fetchBeesRequest from '../../actionCreators/bees/fetchBeesRequest';

describe('Initialize Async State Worker', () => {
  it('works normally', () => {
    testSaga(initializeAsyncStateWorker)
      .next()
      .put(fetchBeesRequest())
      .next()
      .isDone();
  });
});

describe('Initialize Async State Watcher', () => {
  it('works normally', () => {
    testSaga(initializeAsyncStateWatcher)
      .next()
      .takeEveryEffect(INIT, initializeAsyncStateWorker)
      .finish()
      .isDone();
  });
});
