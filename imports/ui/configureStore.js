// Libraries
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

// Reducers
import rootReducer from "./rootReducer";

// Sagas
import initSaga from "./sagas/init";
import createTimesheetSaga from "./sagas/timesheets/createTimesheet";
import fetchTimesheetsSaga from "./sagas/timesheets/fetchTimesheets";
import fetchPayrollSaga from "./sagas/payroll/fetchPayroll";


export const combinedSagas = () => [
  initSaga,
  createTimesheetSaga,
  fetchTimesheetsSaga,
  fetchPayrollSaga
];

export const registerSagas = (sagaMiddleware, sagas) =>
  sagas.forEach(sagaMiddleware.run);

/**
 * Configures the initialization of a React store, applying middleware, and interfacing with
 * tooling.
 *
 * @param  {State} initialState State object generated from indexed reducers.
 * @returns {Store} Generates an enhanced Redux Store.
 */
export const configureStore = initialState => {
  // Create saga middleware
  const sagaMiddleware = createSagaMiddleware();
  // Create a function that can apply the saga middleware to a StoreCreator
  const sagaStoreEnhancer = applyMiddleware(sagaMiddleware);
  // Create a function that can create a store with the new middleware
  const createStoreWithMiddleWare = sagaStoreEnhancer(createStore);
  // Determine whether debug mode should be attached
  let store;
  if (Meteor.isDevelopment) {
    const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__;
    const debug =
      typeof reduxDevTools === "function" ? reduxDevTools() : a => a;
    // Actually create the store with the new middleware
    store = createStoreWithMiddleWare(rootReducer, initialState, debug);
  } else {
    store = createStoreWithMiddleWare(rootReducer, initialState);
  }
  // Register all sagas with middleware
  registerSagas(sagaMiddleware, combinedSagas());
  return store;
};

export default configureStore;
