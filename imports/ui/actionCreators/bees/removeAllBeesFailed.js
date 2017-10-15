// Action Types
import { REMOVE_ALL_BEES_FAILED } from "../../actionTypes/bees";

// Action Creator
export const removeAllBeesFailed = error => ({
  type: REMOVE_ALL_BEES_FAILED,
  payload: error
});

export default removeAllBeesFailed;
