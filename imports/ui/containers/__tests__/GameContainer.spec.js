import { mapStateToProps, mapDispatchToProps } from '../GameContainer';

import { REMOVE_BEE_REQUEST } from '../../actionTypes/bees';

describe('GameContainer', () => {
  it('should test mapStateToProps', () => {
    const bees = [1, 2, 3];
    const inputState = {
      bees: {
        bees
      }
    };
    expect(mapStateToProps(inputState).bees).toBe(bees);
  });

  it('should test mapDispatchToProps', () => {
    const inputDispatch = jest.fn();
    const { removeBee } = mapDispatchToProps(inputDispatch);
    const beeId = '1234';
    const expectedEvent = { type: REMOVE_BEE_REQUEST, payload: beeId };
    removeBee(beeId);
    expect(inputDispatch).toHaveBeenCalledWith(expectedEvent);
  });
});
