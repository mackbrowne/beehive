import { mapStateToProps, mapDispatchToProps } from "../SideBarContainer";

import { CREATE_BEE_REQUEST } from "../../actionTypes/bees";
import { REMOVE_ALL_BEES_REQUEST } from "../../actionTypes/bees";

describe("SideBarContainer", () => {
  it("should test mapStateToProps", () => {
    const bees = [1, 2, 3];
    const inputState = {
      bees: {
        bees
      }
    };
    expect(mapStateToProps(inputState).numberOfBees).toBe(bees.length);
  });

  describe("mapDispatchToProps", () => {
    let inputDispatch;

    beforeEach(() => {
      inputDispatch = jest.fn();
    });

    it("should test mapDispatchToProps for createBee", () => {
      const { createBee } = mapDispatchToProps(inputDispatch);
      const bee = { type: "worker", name: "bee1" };
      const expectedEvent = { type: CREATE_BEE_REQUEST, payload: bee };
      createBee(bee);
      expect(inputDispatch).toHaveBeenCalledWith(expectedEvent);
    });

    it("should test mapDispatchToProps for removeAllBees", () => {
      const { removeAllBees } = mapDispatchToProps(inputDispatch);
      const expectedEvent = { type: REMOVE_ALL_BEES_REQUEST };
      removeAllBees();
      expect(inputDispatch).toHaveBeenCalledWith(expectedEvent);
    });
  });
});
