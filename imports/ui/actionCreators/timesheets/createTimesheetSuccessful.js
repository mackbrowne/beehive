// Actoon Types
import { CREATE_TIMESHEET_SUCCESSFUL } from "../../actionTypes/timesheets";

// Action Creator
export const createTimesheetSuccessful = timesheet => ({
  type: CREATE_TIMESHEET_SUCCESSFUL,
  payload: timesheet
});

export default createTimesheetSuccessful;
