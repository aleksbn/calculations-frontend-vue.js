export default {
  async addCalculation(context, data) {
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

    const response = await fetch(
      "https://calculation-spa-default-rtdb.europe-west1.firebasedatabase.app/calculations.json",
      {
        method: "POST",
        body: JSON.stringify(calcData),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Something went wrong');
      throw error;
    }

    context.commit("addCalculation", calcData);
  },

  async loadCalculations(context) {
    const response = await fetch(
      "https://calculation-spa-default-rtdb.europe-west1.firebasedatabase.app/calculations.json"
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to load data!");
      throw error;
    }
    const calculations = [];
    for (const key in responseData) {
      const cal = {
        id: responseData[key].id,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        email: responseData[key].email,
        baseAmount: responseData[key].baseAmount,
        yearlyInterestRate: responseData[key].yearlyInterestRate,
        yearsForPayment: responseData[key].yearsForPayment,
        totalForRepayment: responseData[key].totalForRepayment,
        monthlyInstallment: responseData[key].monthlyInstallment,
        timeOfCalculation: responseData[key].timeOfCalculation,
      };
      calculations.push(cal);
    }

    context.commit("setCalculations", calculations);
  },
};
