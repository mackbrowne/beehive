// Actoon Types
import { TIMESHEETS_REQUEST_FAILED } from "../../actionTypes/timesheets";

// Action Creator
const timesheetsRequestFailed = error => {
  return { type: TIMESHEETS_REQUEST_FAILED, payload: error };
};

export default timesheetsRequestFailed;
