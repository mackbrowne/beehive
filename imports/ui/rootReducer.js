import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import BeesReducer from "./reducers/bees";
import ConfigReducer from "./reducers/config";
import SettingsReducer from "./reducers/settings";
import UIReducer from "./reducers/ui";

const reducers = {
  routing: routerReducer,
  bees: BeesReducer,
  config: ConfigReducer,
  settings: SettingsReducer,
  ui: UIReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
