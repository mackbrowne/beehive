import { mapStateToProps, mapDispatchToProps } from "../ConfigContainer";

import { SET_CONFIG_VALUE } from "../../actionTypes/config";

describe("ConfigContainer", () => {
  it("should test mapStateToProps", () => {
    const config = {};
    const inputState = {
      config
    };
    expect(mapStateToProps(inputState).configFields).toBe(config);
  });

  it("should test mapDispatchToProps", () => {
    const inputDispatch = jest.fn();
    const { configSettingAction } = mapDispatchToProps(inputDispatch);
    const payload = { key: "key", value: "value" };
    const expectedEvent = { type: SET_CONFIG_VALUE, payload };
    configSettingAction(payload.key, payload.value);
    expect(inputDispatch).toHaveBeenCalledWith(expectedEvent);
  });
});
