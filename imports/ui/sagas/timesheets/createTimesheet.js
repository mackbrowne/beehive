// Framework
import { Meteor } from "meteor/meteor";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Action Types
import { CREATE_TIMESHEET_REQUEST } from "../../actionTypes/timesheets";

// Action Creators
import createTimesheetFailed from "../../actionCreators/timesheets/createTimesheetFailed";
import createTimesheetSuccessful from "../../actionCreators/timesheets/createTimesheetSuccessful";
import fetchTimesheetsRequest from "../../actionCreators/timesheets/fetchTimesheetsRequest";

// Worker
export function* createTimesheetWorker(action) {
  try {
    const callValues = { timesheet: action.payload };
    yield call(Meteor.callPromise, "timesheets.insert", callValues);
    yield put(createTimesheetSuccessful());
    yield put(fetchTimesheetsRequest());
  } catch ({ message }) {
    yield put(createTimesheetFailed(message));
  }
}

// Watcher
export function* createTimesheetWatcher() {
  yield takeLatest(CREATE_TIMESHEET_REQUEST, createTimesheetWorker);
}

export default createTimesheetWatcher;
