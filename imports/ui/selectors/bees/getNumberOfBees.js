// Libraries
import { createSelector } from "reselect";

// State Filter
const beesInState = state => state.bees.bees;

// Selector Constructor
const getNumberOfBees = createSelector(beesInState, bees => bees.length);

export default getNumberOfBees;
