import React from "react";
import ReactTestRenderer from "react-test-renderer";
import { shallow } from "enzyme";

import Timesheets from "../Timesheets";

describe("<Timesheets />", () => {
  let defaultProps;
  beforeEach(() => {
    defaultProps = {
      settingsFields: { tickRate: 50 },
      settingsSettingAction: jest.fn()
    };
  });

  describe("Timesheets SnapShot", () => {
    it("renders Timesheets correctly", () => {
      const tree = ReactTestRenderer.create(
        <Timesheets {...defaultProps} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders Timesheets correctly with default props", () => {
      delete defaultProps.settingsFields;
      const tree = ReactTestRenderer.create(
        <Timesheets {...defaultProps} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
