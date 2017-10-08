import React from "react";
import { MemoryRouter } from "react-router-dom";

import ReactTestRenderer from "react-test-renderer";
import { shallow } from "enzyme";

import Navigation from "../Navigation";

import { Col } from "reactstrap";

describe("<Navigation />", () => {
  describe("Navigation SnapShot", () => {
    let defaultProps;
    beforeEach(() => {
      defaultProps = {
        navigationItems: [{ label: "settings", path: "/settings" }]
      };
    });

    it("renders Navigation with items correctly", () => {
      const tree = ReactTestRenderer.create(
        <MemoryRouter>
          <Navigation {...defaultProps} />
        </MemoryRouter>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders Navigation with no items", () => {
      delete defaultProps.navigationItems;
      const tree = ReactTestRenderer.create(
        <MemoryRouter>
          <Navigation {...defaultProps} />
        </MemoryRouter>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
