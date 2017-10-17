// Action Types
import { FETCH_TIMESHEETS_REQUEST } from "../../actionTypes/timesheets";

// Action Creator
export const fetchTimesheetsRequest = () => ({
  type: FETCH_TIMESHEETS_REQUEST
});

export default fetchTimesheetsRequest;
