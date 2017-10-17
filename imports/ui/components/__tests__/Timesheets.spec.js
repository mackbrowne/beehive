import React from "react";
import { shallow } from "enzyme";

import Timesheets from "../Timesheets";

import Dropzone from "react-dropzone";
import { Alert } from "reactstrap";

describe("<Timesheets />", () => {
  let wrapper, defaultProps;

  beforeEach(() => {
    defaultProps = {
      createTimesheetRequest: jest.fn(),
      createTimesheetFailed: jest.fn(),
      dismissError: jest.fn(),
      error: "test error"
    };
    wrapper = shallow(<Timesheets {...defaultProps} />);
  });

  describe("Timesheets Snapshots", () => {
    it("should render correctly with an error", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("should render correctly with no error", () => {
      delete defaultProps.error;
      wrapper = shallow(<Timesheets {...defaultProps} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("Timesheets Components", () => {
    let dropzone, errorAlert;

    beforeEach(() => {
      dropzone = wrapper.find(Dropzone);
      errorAlert = wrapper.find(Alert);
    });

    it("should create a timesheets request", () => {
      const accepted = ["file1"];
      const rejected = [];
      dropzone.props().onDrop(accepted, rejected);
      expect(defaultProps.createTimesheetRequest).toHaveBeenCalled();
    });

    it("should create a timesheets failed response", () => {
      const accepted = [];
      const rejected = ["file1"];
      dropzone.props().onDrop(accepted, rejected);
      expect(defaultProps.createTimesheetFailed).toHaveBeenCalled();
    });

    it("close the error alert", () => {
      errorAlert.props().toggle();
      expect(defaultProps.dismissError).toHaveBeenCalled();
    });
  });
});
