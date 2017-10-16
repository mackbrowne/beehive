import { combineReducers } from "redux";

import TimesheetsReducer from "./reducers/timesheets";
import ConfigReducer from "./reducers/config";
import SettingsReducer from "./reducers/settings";
import UIReducer from "./reducers/ui";

const reducers = {
  timesheets: TimesheetsReducer,
  config: ConfigReducer,
  settings: SettingsReducer,
  ui: UIReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
