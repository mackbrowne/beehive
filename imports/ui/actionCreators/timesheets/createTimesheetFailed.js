// Actoon Types
import { CREATE_TIMESHEET_FAILED } from "../../actionTypes/timesheets";

// Action Creator
export const createTimesheetFailed = error => ({
  type: CREATE_TIMESHEET_FAILED,
  payload: error
});

export default createTimesheetFailed;
