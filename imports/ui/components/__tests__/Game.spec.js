import React from "react";
import ReactTestRenderer from "react-test-renderer";

import Game from "../Game";

describe("<Game />", () => {
  let defaultProps;

  describe("Game SnapShot", () => {
    beforeEach(() => {
      defaultProps = {
        bees: [{ _id: 123, name: "testBee", type: "worker" }],
        removeBee: jest.fn()
      };
    });

    it("renders game with no bees correctly", () => {
      delete defaultProps.bees;
      const tree = ReactTestRenderer.create(
        <Game {...defaultProps} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders game with bees correctly", () => {
      const tree = ReactTestRenderer.create(
        <Game {...defaultProps} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
