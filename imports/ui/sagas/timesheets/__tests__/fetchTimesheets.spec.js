// Testing
import { Meteor } from "meteor/meteor";
import { testSaga, expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import {
  fetchTimesheetsWorker,
  fetchTimesheetsWatcher
} from "../fetchTimesheets";

// Action Types
import { FETCH_TIMESHEETS_REQUEST } from "../../../actionTypes/timesheets";

// Action Creators
import timesheetsReceived from "../../../actionCreators/timesheets/timesheetsReceived";
import timesheetsRequestFailed from "../../../actionCreators/timesheets/timesheetsRequestFailed";

describe("FetchTimesheets Worker", () => {
  it("works normally", () => {
    testSaga(fetchTimesheetsWorker)
      .next()
      .call(Meteor.callPromise, "timesheets.fetchAll")
      .next()
      .put(timesheetsReceived())
      .next()
      .isDone();
  });

  it("api fails", () => {
    const error = new Meteor.Error("failed");
    const provider = [
      [matchers.call.fn(Meteor.callPromise), throwError(error)]
    ];

    return expectSaga(fetchTimesheetsWorker)
      .provide(provider)
      .put(timesheetsRequestFailed(error.error))
      .run();
  });
});

describe("FetchTimesheets Watcher", () => {
  it("works normally", () => {
    testSaga(fetchTimesheetsWatcher)
      .next()
      .takeLatestEffect(FETCH_TIMESHEETS_REQUEST, fetchTimesheetsWorker)
      .finish()
      .isDone();
  });
});
