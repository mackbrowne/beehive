import React from "react";
import ReactTestRenderer from "react-test-renderer";
import { shallow } from "enzyme";

import Config from "../Config";
import FieldRows from "../FieldRows";

describe("<Config />", () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      configFields: { tickRate: 50 },
      configSettingAction: jest.fn()
    };
  });

  describe("Config SnapShot", () => {
    it("renders config correctly with default props", () => {
      delete defaultProps.configFields;
      const tree = ReactTestRenderer.create(
        <Config {...defaultProps} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders config correctly", () => {
      const tree = ReactTestRenderer.create(<Config />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("Config Props", () => {
    let wrapper, fieldRows;

    beforeEach(() => {
      const wrapper = shallow(<Config {...defaultProps} />);
      fieldRows = wrapper.find(FieldRows);
    });

    it("should pass fields prop to FieldRows", () => {
      const { fields } = fieldRows.props();
      expect(fields).toBe(defaultProps.configFields);
    });

    it("pass stateSettingAction prop to fieldRows", () => {
      const { stateSettingAction } = fieldRows.props();
      expect(stateSettingAction).toBe(defaultProps.configSettingAction);
    });
  });
});
