import React from "react";
import { MemoryRouter } from "react-router-dom";

import ReactTestRenderer from "react-test-renderer";
import { shallow } from "enzyme";

import NavigationItem from "../NavigationItem";

describe("<NavigationItem />", () => {
  const defaultProps = { label: "settings", path: "/settings" };

  describe("NavigationItem SnapShot", () => {
    it("renders NavigationItem with items correctly", () => {
      const tree = ReactTestRenderer.create(
        <MemoryRouter initialEntries={["/home"]}>
          <NavigationItem {...defaultProps} />
        </MemoryRouter>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders NavigationItem with no items", () => {
      defaultProps.navigationItems = [];
      const tree = ReactTestRenderer.create(
        <MemoryRouter initialEntries={["/users/2"]}>
          <NavigationItem />
        </MemoryRouter>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
