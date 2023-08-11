export default {
  calculations(state) {
    return state.calculations;
  },
  hasCalculations(state) {
    return state.calculations && state.calculations.length > 0;
  },
  getStats(state) {
    const toReturn = {
      totalCalculations: 0,
      totalBaseAmount: 0,
      averageBaseAmount: 0,
      totalAmount: 0,
      averageAmount: 0,
      totalInstallment: 0,
      averageInstallment: 0,
      totalLength: 0,
      averageLength: 0,
    };
    toReturn.totalCalculations = state.calculations.length;
    toReturn.totalBaseAmount = state.calculations.map(c => +c.baseAmount).reduce((acc, inc) => acc + inc);
    toReturn.totalAmount = state.calculations.map(c => +c.totalForRepayment).reduce((acc, inc) => acc + inc);
    toReturn.totalInstallment = state.calculations.map(c => +c.monthlyInstallment).reduce((acc, inc) => acc + inc);
    toReturn.totalLength = state.calculations.map(c => +c.yearsForPayment).reduce((acc, inc) => acc + inc);
    toReturn.averageBaseAmount =
      toReturn.totalBaseAmount / toReturn.totalCalculations;
    toReturn.averageAmount = toReturn.totalAmount / toReturn.totalCalculations;
    toReturn.averageInstallment =
      toReturn.totalInstallment / toReturn.totalCalculations;
    toReturn.averageLength = toReturn.totalLength / toReturn.totalCalculations;

    return toReturn;
  },
};
