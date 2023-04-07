export default {
  addCalculation(context, data) {
    const calcData = {
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      baseAmount: data.baseAmount,
      yearlyInterestRate: data.yearlyInterestRate,
      yearsForPayment: data.yearsForPayment,
      totalForRepayment: data.totalForRepayment,
      monthlyInstallment: data.monthlyInstallment,
      timeOfCalculation: data.timeOfCalculation,
    };

    context.commit('addCalculation', calcData);
  },
};
