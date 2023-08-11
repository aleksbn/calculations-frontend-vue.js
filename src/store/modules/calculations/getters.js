export default {
  calculations(state) {
    return state.calculations;
  },
  hasCalculations(state) {
    return state.calculations && state.calculations.length > 0;
  },
  getStats(state) {
    var toReturn = {
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
    for (let index in state.calculations) {
      toReturn.totalBaseAmount += +state.calculations[index].baseAmount;
    }
    for (let index in state.calculations) {
      toReturn.totalAmount += +state.calculations[index].totalForRepayment;
    }
    for (let index in state.calculations) {
      toReturn.totalInstallment +=
      +state.calculations[index].monthlyInstallment;
    }
    for (let index in state.calculations) {
      toReturn.totalLength += +state.calculations[index].yearsForPayment;
    }
    toReturn.averageBaseAmount =
      toReturn.totalBaseAmount / toReturn.totalCalculations;
    toReturn.averageAmount = toReturn.totalAmount / toReturn.totalCalculations;
    toReturn.averageInstallment =
      toReturn.totalInstallment / toReturn.totalCalculations;
    toReturn.averageLength = toReturn.totalLength / toReturn.totalCalculations;

    return toReturn;
  },
};
