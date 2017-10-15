// Action Types
import { FETCH_BEES_REQUEST } from "../../actionTypes/bees";

// Action Creator
export const fetchBeesRequest = bees => ({
  type: FETCH_BEES_REQUEST
});

export default fetchBeesRequest;
