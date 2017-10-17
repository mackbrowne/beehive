// Action Types
import {
  FETCH_PAYROLL_REQUEST,
  PAYROLL_RECEIVED,
  PAYROLL_REQUEST_FAILED
} from "../actionTypes/payroll";

// Default State
export const DEFAULT_STATE = {
  payroll: [],
  error: null
};

// Reducer
export const PayrollReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case PAYROLL_RECEIVED:
      return {
        ...state,
        payroll: action.payload
      };
    case PAYROLL_REQUEST_FAILED:
      return {
        ...state,
        error: action.payload
      };
    case FETCH_PAYROLL_REQUEST:
    default:
      return state;
  }
};

export default PayrollReducer;
