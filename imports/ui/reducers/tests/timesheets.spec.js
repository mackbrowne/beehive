import reducer, { DEFAULT_STATE } from "../timesheets";
import {
  FETCH_TIMESHEETS_REQUEST,
  TIMESHEETS_RECEIVED,
  TIMESHEETS_REQUEST_FAILED,
  CREATE_TIMESHEET_REQUEST,
  CREATE_TIMESHEET_SUCCESSFUL,
  CREATE_TIMESHEET_FAILED
} from "../../actionTypes/timesheets";

describe("timesheets reducer", () => {
  it("should return the initial state", () => {
    const result = reducer(DEFAULT_STATE, {});
    expect(result).toEqual(DEFAULT_STATE);
  });

  it("should not the initial state when the state is null", () => {
    const result = reducer(null, {});
    const expected = null;
    expect(result).toEqual(expected);
  });

  it("should not the initial state when the state is not defined", () => {
    const result = reducer(undefined, {});
    const expected = DEFAULT_STATE;
    expect(result).toEqual(expected);
  });

  it("should handle FETCH_TIMESHEETS_REQUEST", () => {
    const mockAction = { type: FETCH_TIMESHEETS_REQUEST };
    const result = reducer(DEFAULT_STATE, mockAction);
    const expected = DEFAULT_STATE;
    expect(result).toEqual(expected);
  });

  it("should handle TIMESHEETS_RECEIVED", () => {
    const mockAction = {
      type: TIMESHEETS_RECEIVED,
      payload: []
    };
    const result = reducer(DEFAULT_STATE, mockAction);
    const expected = {
      ...DEFAULT_STATE,
      timesheets: mockAction.payload
    };
    expect(result).toEqual(expected);
  });

  it("should handle TIMESHEETS_REQUEST_FAILED", () => {
    const mockAction = {
      type: TIMESHEETS_REQUEST_FAILED,
      payload: "timesheet request failed"
    };
    const result = reducer(DEFAULT_STATE, mockAction);
    const expected = {
      ...DEFAULT_STATE,
      error: mockAction.payload
    };
    expect(result).toEqual(expected);
  });

  it("should handle CREATE_TIMESHEET_REQUEST", () => {
    const mockAction = { type: CREATE_TIMESHEET_REQUEST };
    const result = reducer(DEFAULT_STATE, mockAction);
    const expected = DEFAULT_STATE;
    expect(result).toEqual(expected);
  });

  it("should handle CREATE_TIMESHEET_SUCCESSFUL", () => {
    const mockAction = { type: CREATE_TIMESHEET_SUCCESSFUL };
    const result = reducer(DEFAULT_STATE, mockAction);
    const expected = DEFAULT_STATE;
    expect(result).toEqual(expected);
  });

  it("should handle CREATE_TIMESHEET_FAILED", () => {
    const mockAction = {
      type: CREATE_TIMESHEET_FAILED,
      payload: "create timesheet failed"
    };
    const result = reducer(DEFAULT_STATE, mockAction);
    const expected = {
      ...DEFAULT_STATE,
      error: mockAction.payload
    };
    expect(result).toEqual(expected);
  });

  it("should handle REMOVE_TIMESHEET_REQUEST", () => {
    const mockAction = { type: REMOVE_TIMESHEET_REQUEST };
    const result = reducer(DEFAULT_STATE, mockAction);
    const expected = DEFAULT_STATE;
    expect(result).toEqual(expected);
  });

  it("should handle REMOVE_TIMESHEET_SUCCESSFUL", () => {
    const mockAction = { type: REMOVE_TIMESHEET_SUCCESSFUL };
    const result = reducer(DEFAULT_STATE, mockAction);
    const expected = DEFAULT_STATE;
    expect(result).toEqual(expected);
  });

  it("should handle REMOVE_TIMESHEET_FAILED", () => {
    const mockAction = {
      type: REMOVE_TIMESHEET_FAILED,
      payload: "remove timesheet failed"
    };
    const result = reducer(DEFAULT_STATE, mockAction);
    const expected = {
      ...DEFAULT_STATE,
      error: mockAction.payload
    };
    expect(result).toEqual(expected);
  });

  it("should handle REMOVE_ALL_TIMESHEETS_REQUEST", () => {
    const mockAction = { type: REMOVE_ALL_TIMESHEETS_REQUEST };
    const result = reducer(DEFAULT_STATE, mockAction);
    const expected = DEFAULT_STATE;
    expect(result).toEqual(expected);
  });

  it("should handle REMOVE_ALL_TIMESHEETS_SUCCESSFUL", () => {
    const mockAction = { type: REMOVE_ALL_TIMESHEETS_SUCCESSFUL };
    const result = reducer(DEFAULT_STATE, mockAction);
    const expected = DEFAULT_STATE;
    expect(result).toEqual(expected);
  });

  it("should handle REMOVE_ALL_TIMESHEETS_FAILED", () => {
    const mockAction = {
      type: REMOVE_ALL_TIMESHEETS_FAILED,
      payload: "remove all timesheets failed"
    };
    const result = reducer(DEFAULT_STATE, mockAction);
    const expected = {
      ...DEFAULT_STATE,
      error: mockAction.payload
    };
    expect(result).toEqual(expected);
  });
});
