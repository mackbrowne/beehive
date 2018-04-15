import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import TimesheetsReducer from "./reducers/timesheets";
import PayrollReducer from "./reducers/payroll";

const reducers = {
  routing: routerReducer,
  timesheets: TimesheetsReducer,
  payroll: PayrollReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
