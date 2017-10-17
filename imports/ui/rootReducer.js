import { combineReducers } from "redux";

import TimesheetsReducer from "./reducers/timesheets";
import PayrollReducer from "./reducers/payroll";

const reducers = {
  timesheets: TimesheetsReducer,
  payroll: PayrollReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
