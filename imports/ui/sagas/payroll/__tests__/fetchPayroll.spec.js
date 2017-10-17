// Testing
import { Meteor } from "meteor/meteor";
import { testSaga, expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { fetchPayrollsWorker, fetchPayrollsWatcher } from "../fetchPayroll";

// Action Types
import { FETCH_PAYROLL_REQUEST } from "../../../actionTypes/payroll";

// Action Creators
import payrollReceived from "../../../actionCreators/payroll/payrollReceived";
import payrollRequestFailed from "../../../actionCreators/payroll/payrollRequestFailed";

describe("FetchPayroll Worker", () => {
  it("works normally", () => {
    testSaga(fetchPayrollsWorker)
      .next()
      .call(Meteor.callPromise, "payroll.fetchAll")
      .next()
      .put(payrollReceived())
      .next()
      .isDone();
  });

  it("api fails", () => {
    const error = new Meteor.Error("failed");
    const provider = [
      [matchers.call.fn(Meteor.callPromise), throwError(error)]
    ];

    return expectSaga(fetchPayrollsWorker)
      .provide(provider)
      .put(payrollRequestFailed(error.message))
      .run();
  });
});

describe("FetchPayroll Watcher", () => {
  it("works normally", () => {
    testSaga(fetchPayrollsWatcher)
      .next()
      .takeLatestEffect(FETCH_PAYROLL_REQUEST, fetchPayrollsWorker)
      .finish()
      .isDone();
  });
});
