// Framework
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Action Types
import { INIT } from "../actionTypes/generic";

// Action Creators
import fetchBeesRequest from "../actionCreators/bees/fetchBeesRequest";

// Worker
export function* initializeAsyncStateWorker(action) {
  yield put(fetchBeesRequest());
}

// Watcher
export function* initializeAsyncStateWatcher() {
  yield takeEvery(INIT, initializeAsyncStateWorker);
}

export default initializeAsyncStateWatcher;
