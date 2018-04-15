import { mapStateToProps, mapDispatchToProps } from '../HomeContainer';

import { TOGGLE_SIDE_BAR } from '../../actionTypes/ui';

describe('HomeContainer', () => {
  it('should test mapStateToProps', () => {
    const sideBarOpen = true;
    const inputState = {
      ui: {
        sideBarOpen
      }
    };
    expect(mapStateToProps(inputState).sideBarOpen).toBe(sideBarOpen);
  });

  it('should test mapDispatchToProps', () => {
    const inputDispatch = jest.fn();
    const { toggleSideBar } = mapDispatchToProps(inputDispatch);
    const expectedEvent = { type: TOGGLE_SIDE_BAR };
    toggleSideBar();
    expect(inputDispatch).toHaveBeenCalledWith(expectedEvent);
  });
});
