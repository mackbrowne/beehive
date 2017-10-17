// Actoon Types
import { DISMISS_TIMESHEET_ERROR } from "../../actionTypes/timesheets";

// Action Creator
const dismissTimesheetError = error => {
  return { type: DISMISS_TIMESHEET_ERROR };
};

export default dismissTimesheetError;
