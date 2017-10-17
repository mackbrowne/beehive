// Testing
import { Meteor } from "meteor/meteor";
import { testSaga, expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { readAsText } from "promise-file-reader";

import {
  createTimesheetWorker,
  createTimesheetWatcher
} from "../createTimesheet";

// Action Types
import { CREATE_TIMESHEET_REQUEST } from "../../../actionTypes/timesheets";

// Action Creators
// Action Creators
import createTimesheetFailed from "../../../actionCreators/timesheets/createTimesheetFailed";
import createTimesheetSuccessful from "../../../actionCreators/timesheets/createTimesheetSuccessful";

import fetchTimesheetsRequest from "../../../actionCreators/timesheets/fetchTimesheetsRequest";
import fetchPayrollRequest from "../../../actionCreators/payroll/fetchPayrollRequest";

describe("Create Timesheets Worker", () => {
  it("api fails", () => {
    const error = new Meteor.Error("failed");
    const provider = [
      [matchers.call.fn(Meteor.callPromise), throwError(error)]
    ];

    return expectSaga(createTimesheetWorker)
      .provide(provider)
      .put(createTimesheetFailed(error.error))
      .run();
  });
});

describe("CreateTimesheet Watcher", () => {
  it("works normally", () => {
    testSaga(createTimesheetWatcher)
      .next()
      .takeEveryEffect(CREATE_TIMESHEET_REQUEST, createTimesheetWorker)
      .finish()
      .isDone();
  });
});
