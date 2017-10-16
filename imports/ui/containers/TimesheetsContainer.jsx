// Framework
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Actions to Bind
import setSettingsValue from "../actionCreators/settings/setSettingsValue";

// Component to Contain
import Timesheets from "../components/Timesheets";

// Connect the STATE to the props fed into the component.
export const mapStateToProps = (state) => {
  return { settingsFields: state.settings };
};

// Connect ACTIONS to the props fed into the component.
export const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { settingsSettingAction: setTimesheetsValue },
    dispatch
  );
};

// Create higher-order component which feeds in specified props.
const TimesheetsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Timesheets);

export default TimesheetsContainer;
