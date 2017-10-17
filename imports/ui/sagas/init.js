// Framework
import { call, put, takeEvery } from "redux-saga/effects";

// Action Types
import { INIT } from "../actionTypes/generic";

// Action Creators
import fetchTimesheetsRequest from "../actionCreators/timesheets/fetchTimesheetsRequest";
import fetchPayrollRequest from "../actionCreators/payroll/fetchPayrollRequest";

// Worker
export function* initializeAsyncStateWorker(action) {
  yield put(fetchTimesheetsRequest());
  yield put(fetchPayrollRequest());
}

// Watcher
export function* initializeAsyncStateWatcher() {
  yield takeEvery(INIT, initializeAsyncStateWorker);
}

export default initializeAsyncStateWatcher;
