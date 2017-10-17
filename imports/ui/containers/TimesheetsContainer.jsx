// Framework
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Actions to Bind
import createTimesheetRequest from "../actionCreators/timesheets/createTimesheetRequest";
import createTimesheetFailed from "../actionCreators/timesheets/createTimesheetFailed";

import dismissTimesheetError from "../actionCreators/timesheets/dismissTimesheetError";

// Component to Contain
import Timesheets from "../components/Timesheets";

// Connect the STATE to the props fed into the component.
export const mapStateToProps = (state) => {
  return {
    timesheets: state.timesheets.timesheets,
    error: state.timesheets.error
  };
};

// Connect ACTIONS to the props fed into the component.
export const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      createTimesheetRequest,
      createTimesheetFailed,
      dismissError: dismissTimesheetError
    },
    dispatch
  );
};

// Create higher-order component which feeds in specified props.
const TimesheetsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Timesheets);

export default TimesheetsContainer;
