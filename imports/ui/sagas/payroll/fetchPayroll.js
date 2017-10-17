// Framework
import { Meteor } from "meteor/meteor";
import { call, put, takeLatest } from "redux-saga/effects";

// Action Types
import { FETCH_PAYROLL_REQUEST } from "../../actionTypes/payroll";

// Action Creators
import payrollReceived from "../../actionCreators/payroll/payrollReceived";
import payrollRequestFailed from "../../actionCreators/payroll/payrollRequestFailed";

// Worker
export function* fetchPayrollsWorker(action) {
  try {
    const payroll = yield call(Meteor.callPromise, "payroll.fetchAll");
    yield put(payrollReceived(payroll));
  } catch ({ message }) {
    yield put(payrollRequestFailed(message));
  }
}

// Watcher
export function* fetchPayrollsWatcher() {
  yield takeLatest(FETCH_PAYROLL_REQUEST, fetchPayrollsWorker);
}

export default fetchPayrollsWatcher;
