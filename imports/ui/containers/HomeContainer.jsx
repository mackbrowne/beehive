// Framework
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Actions to Bind
import toggleSideBar from "../actionCreators/ui/toggleSideBar";

// Component to Contain
import Home from "../components/Home";

// Connect the STATE to the props fed into the component.
export const mapStateToProps = (state             )                     => {
  return {
    sideBarOpen: state.ui.sideBarOpen
  };
};

// Connect ACTIONS to the props fed into the component.
export const mapDispatchToProps = (
  dispatch
)                        => {
  return bindActionCreators(
    {
      toggleSideBar: toggleSideBar
    },
    dispatch
  );
};

// Create higher-order component which feeds in specified props.
const HomeContainer                     = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
