import React from "react";
import { shallow } from "enzyme";

import Home from "../Home";

describe("<Home />", () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      payments: []
    };
  });

  describe("Home Props", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Home {...defaultProps} />);
    });

    it("should render correctly with an error", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
