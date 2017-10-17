// Action Types
import {
  FETCH_TIMESHEETS_REQUEST,
  TIMESHEETS_RECEIVED,
  TIMESHEETS_REQUEST_FAILED,
  CREATE_TIMESHEET_REQUEST,
  CREATE_TIMESHEET_SUCCESSFUL,
  CREATE_TIMESHEET_FAILED,
  DISMISS_TIMESHEET_ERROR
} from "../actionTypes/timesheets";

// Default State
export const DEFAULT_STATE = {
  timesheets: [],
  error: null
};

// Reducer
export const TimesheetsReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TIMESHEETS_RECEIVED:
      return {
        ...state,
        timesheets: action.payload
      };
    case CREATE_TIMESHEET_FAILED:
    case TIMESHEETS_REQUEST_FAILED:
      return {
        ...state,
        error: action.payload
      };
    case DISMISS_TIMESHEET_ERROR:
      return {
        ...state,
        error: null
      };
    case CREATE_TIMESHEET_SUCCESSFUL:
    case FETCH_TIMESHEETS_REQUEST:
    case CREATE_TIMESHEET_REQUEST:
    default:
      return state;
  }
};

export default TimesheetsReducer;
