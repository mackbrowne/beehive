// Actoon Types
import { BEES_RECEIVED } from "../../actionTypes/bees";

// Action Creator
export const beesReceived = bees => {
  return { type: BEES_RECEIVED, payload: bees };
};

export default beesReceived;
