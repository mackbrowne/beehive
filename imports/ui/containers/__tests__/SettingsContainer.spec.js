import { mapStateToProps, mapDispatchToProps } from "../TimesheetsContainer";

import { SET_SETTINGS_VALUE } from "../../actionTypes/timesheets";

describe("TimesheetsContainer", () => {
  it("should test mapStateToProps", () => {
    const settingsFields = {};
    const inputState = {
      settings: settingsFields
    };
    expect(mapStateToProps(inputState).settingsFields).toBe(settingsFields);
  });

  it("should test mapDispatchToProps", () => {
    const inputDispatch = jest.fn();
    const { settingsSettingAction } = mapDispatchToProps(inputDispatch);
    const payload = { key: "key", value: "value" };
    const expectedEvent = { type: SET_SETTINGS_VALUE, payload };
    settingsSettingAction(payload.key, payload.value);
    expect(inputDispatch).toHaveBeenCalledWith(expectedEvent);
  });
});
