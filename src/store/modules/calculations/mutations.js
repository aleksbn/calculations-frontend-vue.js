export default {
  addCalculation(state, payload) {
    state.calculations.push(payload);
  },
  setCalculations(state, payload) {
    state.calculations = payload;
  },
};
