// Actoon Types
import { PAYROLL_REQUEST_FAILED } from "../../actionTypes/timesheets";

// Action Creator
const timesheetsRequestFailed = error => {
  return { type: PAYROLL_REQUEST_FAILED, payload: error };
};

export default timesheetsRequestFailed;
