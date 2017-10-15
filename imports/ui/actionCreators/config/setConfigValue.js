// Action Types
import { SET_CONFIG_VALUE } from "../../actionTypes/config";

// Action Creator
export const setConfigValue = (key, value) => ({
  type: SET_CONFIG_VALUE,
  payload: { key, value }
});

export default setConfigValue;
