// Framework
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Component to Contain
import Home from "../components/Home";

// Connect the STATE to the props fed into the component.
export const mapStateToProps = (state) => {
  return {
    payments: state.payroll.payroll
  };
};

// Connect ACTIONS to the props fed into the component.
export const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {},
    dispatch
  );
};

// Create higher-order component which feeds in specified props.
const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
