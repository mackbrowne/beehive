// Actoon Types
import { CREATE_TIMESHEET_REQUEST } from "../../actionTypes/timesheets";

// Action Creator
export const createTimesheetRequest = timesheet => ({
  type: CREATE_TIMESHEET_REQUEST,
  payload: timesheet
});

export default createTimesheetRequest;
