export default {
    calculations(state) {
        return state.calculations;
    },
    hasCalculations(state) {
        return state.calculations && state.calculations.length > 0;
    }
};