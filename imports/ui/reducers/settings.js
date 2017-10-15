// Action Types
import { SET_SETTINGS_VALUE } from "../actionTypes/settings";

// Default State
export const DEFAULT_STATE = {
  hiveName: "Your Beehive"
};

// Reducer
export const SettingsReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SETTINGS_VALUE:
      return {
        ...state,
        [action.payload.key]: action.payload.value
      };
    default:
      return state;
  }
};

export default SettingsReducer;
