import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      calculations: [
        {
          id: 102541,
          firstName: "Anonymous",
          lastName: "Anonymous",
          email: "anon@madeup.net",
          timeOfCalculation:
            "Tue Mar 28 2023 15:53:44 GMT+0200 (Central European Summer Time)",
          yearlyInterestRate: 0.05,
          baseAmount: 50000,
          yearsForPayment: 10,
          totalForRepayment: 81445,
          monthlyInstallment: 679.23,
        },
        {
          id: 428517,
          firstName: "Aleksandar",
          lastName: "Matic",
          email: "aleksbn417@hotmail.com",
          timeOfCalculation:
            "Tue Jun 08 2021 11:24:25 GMT+0200 (Central European Summer Time)",
          yearlyInterestRate: 0.04,
          baseAmount: 25000,
          yearsForPayment: 7,
          totalForRepayment: 32898,
          monthlyInstallment: 392.24,
        },
        {
          id: 751246,
          firstName: "John",
          lastName: "Doe",
          email: "johndoe@gmail.com",
          timeOfCalculation:
            "Wen Dec 22 2021 23:02:12 GMT+0200 (Central European Winter Time)",
          yearlyInterestRate: 0.035,
          baseAmount: 35000,
          yearsForPayment: 6,
          totalForRepayment: 43024,
          monthlyInstallment: 598.55,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
