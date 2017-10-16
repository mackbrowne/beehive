// Framework
import { Meteor } from "meteor/meteor";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Action Types
import { FETCH_TIMESHEETS_REQUEST } from "../../actionTypes/timesheets";

// Action Creators
import timesheetsReceived from "../../actionCreators/timesheets/timesheetsReceived";
import timesheetsRequestFailed from "../../actionCreators/timesheets/timesheetsRequestFailed";

// Worker
export function* fetchTimesheetsWorker(action) {
  try {
    const timesheets = yield call(Meteor.callPromise, "timesheets.fetchAll");
    yield put(timesheetsReceived(timesheets));
  } catch ({ message }) {
    yield put(timesheetsRequestFailed(message));
  }
}

// Watcher
export function* fetchTimesheetsWatcher() {
  yield takeLatest(FETCH_TIMESHEETS_REQUEST, fetchTimesheetsWorker);
}

export default fetchTimesheetsWatcher;
