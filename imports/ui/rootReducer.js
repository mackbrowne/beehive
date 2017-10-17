import { combineReducers } from "redux";

import TimesheetsReducer from "./reducers/timesheets";
import PayrollReducer from "./reducers/payroll";
import ConfigReducer from "./reducers/config";
import SettingsReducer from "./reducers/settings";
import UIReducer from "./reducers/ui";

const reducers = {
  timesheets: TimesheetsReducer,
  payroll: PayrollReducer,
  config: ConfigReducer,
  settings: SettingsReducer,
  ui: UIReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
