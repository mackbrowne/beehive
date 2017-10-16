// Testing
import { Meteor } from "meteor/meteor";
import { testSaga, expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import {
  createTimesheetWorker,
  createTimesheetWatcher
} from "../createTimesheet";

// Action Types
import { CREATE_TIMESHEET_REQUEST } from "../../../actionTypes/timesheets";

// Action Creators
import createTimesheetFailed from "../../../actionCreators/timesheets/createTimesheetFailed";
import createTimesheetSuccessful from "../../../actionCreators/timesheets/createTimesheetSuccessful";
import fetchTimesheetsRequest from "../../../actionCreators/timesheets/fetchTimesheetsRequest";

describe("FetchTimesheets Worker", () => {
  const action = { payload: { name: "timesheet1", type: "worker" } };

  it("works normally", () => {
    testSaga(createTimesheetWorker, action)
      .next()
      .call(Meteor.callPromise, "timesheets.insert", {
        timesheet: action.payload
      })
      .next()
      .put(createTimesheetSuccessful())
      .next()
      .put(fetchTimesheetsRequest())
      .next()
      .isDone();
  });

  it("saga fails internally", () => {
    return expectSaga(createTimesheetWorker)
      .put(createTimesheetFailed("Cannot read property 'payload' of undefined"))
      .run();
  });

  it("api fails", () => {
    const error = new Meteor.Error("random error");
    const provider = [
      [matchers.call.fn(Meteor.callPromise), throwError(error)]
    ];

    return expectSaga(createTimesheetWorker, {})
      .provide(provider)
      .put(createTimesheetFailed(error.message))
      .run();
  });
});

describe("CreateTimesheet Watcher", () => {
  it("works normally", () => {
    testSaga(createTimesheetWatcher)
      .next()
      .takeLatestEffect(CREATE_TIMESHEET_REQUEST, createTimesheetWorker)
      .finish()
      .isDone();
  });
});
