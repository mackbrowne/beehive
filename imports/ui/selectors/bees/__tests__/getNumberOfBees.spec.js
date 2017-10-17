import getNumberOfBees from "../getNumberOfBees";
import { beesInState } from "../getNumberOfBees";

describe("getNumberOfBees", () => {
  it("should test resultFunc", () => {
    expect(getNumberOfBees.resultFunc([1, 2, 3])).toBe(3);
  });

  it("should test resultFunc", () => {
    const props = {
      bees: {
        bees: [1, 2, 3]
      }
    };

    expect(beesInState(props)).toBe(props.bees.bees);
  });
});
