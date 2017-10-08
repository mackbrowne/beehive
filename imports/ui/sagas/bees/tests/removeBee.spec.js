// Testing
import { Meteor } from "meteor/meteor";
import { testSaga, expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { removeBeeWorker, removeBeeWatcher } from "../removeBee";

// Action Types
import { REMOVE_BEE_REQUEST } from "../../../actionTypes/bees";

// Action Creators
import removeBeeFailed from "../../../actionCreators/bees/removeBeeFailed";
import removeBeeSuccessful from "../../../actionCreators/bees/removeBeeSuccessful";
import fetchBeesRequest from "../../../actionCreators/bees/fetchBeesRequest";

describe("RemoveBee Worker", () => {
  const action = { payload: "123" };

  it("works normally", () => {
    testSaga(removeBeeWorker, action)
      .next()
      .call(Meteor.callPromise, "bees.remove", { beeId: action.payload })
      .next()
      .put(removeBeeSuccessful())
      .next()
      .put(fetchBeesRequest())
      .next()
      .isDone();
  });

  it("saga fails internally", () => {
    return expectSaga(removeBeeWorker)
      .put(removeBeeFailed("Cannot read property 'payload' of undefined"))
      .run();
  });

  it("api fails", () => {
    const error = new Meteor.Error("random error");
    const provider = [
      [matchers.call.fn(Meteor.callPromise), throwError(error)]
    ];

    return expectSaga(removeBeeWorker, "123")
      .provide(provider)
      .put(removeBeeFailed(error.message))
      .run();
  });
});

describe("RemoveBee Watcher", () => {
  it("works normally", () => {
    testSaga(removeBeeWatcher)
      .next()
      .takeEveryEffect(REMOVE_BEE_REQUEST, removeBeeWorker)
      .finish()
      .isDone();
  });
});
