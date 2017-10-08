// Testing
import { Meteor } from "meteor/meteor";
import { testSaga, expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { removeAllBeesWorker, removeAllBeesWatcher } from "../removeAllBees";

// Action Types
import { REMOVE_ALL_BEES_REQUEST } from "../../../actionTypes/bees";

// Action Creators
import removeAllBeesFailed from "../../../actionCreators/bees/removeAllBeesFailed";
import removeAllBeesSuccessful from "../../../actionCreators/bees/removeAllBeesSuccessful";
import fetchBeesRequest from "../../../actionCreators/bees/fetchBeesRequest";

describe("FetchBees Worker", () => {
  it("works normally", () => {
    testSaga(removeAllBeesWorker)
      .next()
      .call(Meteor.callPromise, "bees.removeAllForUser")
      .next()
      .put(removeAllBeesSuccessful())
      .next()
      .put(fetchBeesRequest())
      .next()
      .isDone();
  });

  it("api fails", () => {
    const error = new Meteor.Error("random error");
    const provider = [
      [matchers.call.fn(Meteor.callPromise), throwError(error)]
    ];

    return expectSaga(removeAllBeesWorker, {})
      .provide(provider)
      .put(removeAllBeesFailed(error.message))
      .run();
  });
});

describe("CreateBee Watcher", () => {
  it("works normally", () => {
    testSaga(removeAllBeesWatcher)
      .next()
      .takeLatestEffect(REMOVE_ALL_BEES_REQUEST, removeAllBeesWorker)
      .finish()
      .isDone();
  });
});
