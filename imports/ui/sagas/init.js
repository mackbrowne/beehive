// Framework
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Action Types
import { INIT } from "../actionTypes/generic";

// Action Creators
import fetchTimesheetsRequest from "../actionCreators/timesheets/fetchTimesheetsRequest";

// Worker
export function* initializeAsyncStateWorker(action) {
  yield put(fetchTimesheetsRequest());
}

// Watcher
export function* initializeAsyncStateWatcher() {
  yield takeEvery(INIT, initializeAsyncStateWorker);
}

export default initializeAsyncStateWatcher;
