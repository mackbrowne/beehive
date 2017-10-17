// Testing
import { Meteor } from "meteor/meteor";
import { testSaga, expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { createBeeWorker, createBeeWatcher } from "../createBee";

// Action Types
import { CREATE_BEE_REQUEST } from "../../../actionTypes/bees";

// Action Creators
import createBeeFailed from "../../../actionCreators/bees/createBeeFailed";
import createBeeSuccessful from "../../../actionCreators/bees/createBeeSuccessful";
import fetchBeesRequest from "../../../actionCreators/bees/fetchBeesRequest";

describe("FetchBees Worker", () => {
  const action = { payload: { name: "bee1", type: "worker" } };

  it("works normally", () => {
    testSaga(createBeeWorker, action)
      .next()
      .call(Meteor.callPromise, "bees.insert", { bee: action.payload })
      .next()
      .put(createBeeSuccessful())
      .next()
      .put(fetchBeesRequest())
      .next()
      .isDone();
  });

  it("saga fails internally", () => {
    return expectSaga(createBeeWorker)
      .put(createBeeFailed("Cannot read property 'payload' of undefined"))
      .run();
  });

  it("api fails", () => {
    const error = new Meteor.Error("random error");
    const provider = [
      [matchers.call.fn(Meteor.callPromise), throwError(error)]
    ];

    return expectSaga(createBeeWorker, {})
      .provide(provider)
      .put(createBeeFailed(error.message))
      .run();
  });
});

describe("CreateBee Watcher", () => {
  it("works normally", () => {
    testSaga(createBeeWatcher)
      .next()
      .takeLatestEffect(CREATE_BEE_REQUEST, createBeeWorker)
      .finish()
      .isDone();
  });
});
