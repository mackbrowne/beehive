// Action Types
import { TOGGLE_SIDE_BAR } from '../actionTypes/ui';

// Default State
export const DEFAULT_STATE = {
  sideBarOpen: false,
  beeMenuOpen: false
};

// Reducer
export const UIReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_BAR:
      return {
        ...state,
        sideBarOpen: !state.sideBarOpen
      };
    default:
      return state;
  }
};

export default UIReducer;
