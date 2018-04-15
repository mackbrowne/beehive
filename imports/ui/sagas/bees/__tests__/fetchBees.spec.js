// Testing
import { Meteor } from 'meteor/meteor';
import { testSaga, expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';

import { fetchBeesWorker, fetchBeesWatcher } from '../fetchBees';

// Action Types
import { FETCH_BEES_REQUEST } from '../../../actionTypes/bees';

// Action Creators
import beesReceived from '../../../actionCreators/bees/beesReceived';
import beesRequestFailed from '../../../actionCreators/bees/beesRequestFailed';

describe('FetchBees Worker', () => {
  it('works normally', () => {
    testSaga(fetchBeesWorker)
      .next()
      .call(Meteor.callPromise, 'bees.fetchAllForUser')
      .next()
      .put(beesReceived())
      .next()
      .isDone();
  });

  it('api fails', () => {
    const error = new Meteor.Error('failed');
    const provider = [
      [matchers.call.fn(Meteor.callPromise), throwError(error)]
    ];

    return expectSaga(fetchBeesWorker)
      .provide(provider)
      .put(beesRequestFailed('failed'))
      .run();
  });
});

describe('FetchBees Watcher', () => {
  it('works normally', () => {
    testSaga(fetchBeesWatcher)
      .next()
      .takeLatestEffect(FETCH_BEES_REQUEST, fetchBeesWorker)
      .finish()
      .isDone();
  });
});
