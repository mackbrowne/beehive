// Framework
import { Meteor } from "meteor/meteor";
import { call, put, takeEvery } from "redux-saga/effects";

import { readAsText } from "promise-file-reader";

// Action Types
import { CREATE_TIMESHEET_REQUEST } from "../../actionTypes/timesheets";

// Action Creators
import createTimesheetFailed from "../../actionCreators/timesheets/createTimesheetFailed";
import createTimesheetSuccessful from "../../actionCreators/timesheets/createTimesheetSuccessful";

import fetchTimesheetsRequest from "../../actionCreators/timesheets/fetchTimesheetsRequest";
import fetchPayrollRequest from "../../actionCreators/payroll/fetchPayrollRequest";

// Worker
export function* createTimesheetWorker(action) {
  try {
    const callValues = { timesheet: action.payload };
    const timesheetFile = yield call(readAsText, action.payload);
    const timesheet = yield call(
      Meteor.callPromise,
      "timesheets.insert",
      { timesheet: timesheetFile }
    );
    window.URL.revokeObjectURL(action.payload.preview);
    yield put(createTimesheetSuccessful(timesheet));
    yield put(fetchTimesheetsRequest());
    yield put(fetchPayrollRequest());
  } catch ({ error }) {
    yield put(createTimesheetFailed(error));
  }
}

// Watcher
export function* createTimesheetWatcher() {
  yield takeEvery(CREATE_TIMESHEET_REQUEST, createTimesheetWorker);
}

export default createTimesheetWatcher;
