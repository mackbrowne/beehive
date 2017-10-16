// Actoon Types
import { TIMESHEETS_RECEIVED } from "../../actionTypes/timesheets";

// Action Creator
export const timesheetsReceived = timesheets => {
  return { type: TIMESHEETS_RECEIVED, payload: timesheets };
};

export default timesheetsReceived;
