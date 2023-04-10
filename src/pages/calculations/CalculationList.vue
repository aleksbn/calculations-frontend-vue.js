<template>
  <base-dialog :show="!!error" :showClose="true" title="An error occured!" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
  <section>
    <calculation-filter @change-filters="changeFilters"></calculation-filter>
  </section>
  <base-card>
    <section>
      <div class="controls">
        <base-button mode="outline" @click="loadCalculations"
          >Refresh</base-button
        >
        <base-button link to="/calculateloan"
          >Add your own calculation!</base-button
        >
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-if="hasCalculations">
        <calculation-item
          v-for="calculation in filteredCalculations"
          :key="calculation.id"
          :id="calculation.id"
          :firstName="calculation.firstName"
          :lastName="calculation.lastName"
          :email="calculation.email"
          :baseAmount="calculation.baseAmount"
          :yearlyInterestRate="calculation.yearlyInterestRate"
          :yearsForPayment="calculation.yearsForPayment"
          :totalForRepayment="calculation.totalForRepayment"
          :monthlyInstallment="calculation.monthlyInstallment"
          :timeOfCalculation="calculation.timeOfCalculation"
        ></calculation-item>
      </ul>
      <h3 v-else>There are no calculations right now.</h3>
    </section>
  </base-card>
</template>

<script>
import CalculationItem from "../../components/calculations/CalculationItem.vue";
import CalculationFilter from "../../components/calculations/CalculationFilter.vue";

export default {
  components: {
    CalculationItem,
    CalculationFilter,
  },
  data() {
    return {
      isLoading: false,
      filters: null,
      error: null
    };
  },
  computed: {
    filteredCalculations() {
      var allCalculations = this.$store.getters["calculations/calculations"];
      allCalculations.sort(function (a, b) {
        return new Date(b.timeOfCalculation) - new Date(a.timeOfCalculation);
      });
      if (this.filters != null) {
        // ammount filter
        if (this.filters.ammount == 1) {
          allCalculations = allCalculations.filter((cal) => {
            return cal.baseAmount > 0 && cal.baseAmount <= 25000 ? true : false;
          });
        }
        if (this.filters.ammount == 2) {
          allCalculations = allCalculations.filter((cal) => {
            return cal.baseAmount > 25000 && cal.baseAmount <= 50000
              ? true
              : false;
          });
        }
        if (this.filters.ammount == 3) {
          allCalculations = allCalculations.filter((cal) => {
            return cal.baseAmount > 50000 && cal.baseAmount <= 100000
              ? true
              : false;
          });
        }
        if (this.filters.ammount == 4) {
          allCalculations = allCalculations.filter((cal) => {
            return cal.baseAmount > 100000 ? true : false;
          });
        }
        // time filter
        if (this.filters.time == 1) {
          allCalculations = allCalculations.filter((cal) => {
            return cal.yearsForPayment > 0 && cal.yearsForPayment <= 5
              ? true
              : false;
          });
        }
        if (this.filters.time == 2) {
          allCalculations = allCalculations.filter((cal) => {
            return cal.yearsForPayment > 5 && cal.yearsForPayment <= 10
              ? true
              : false;
          });
        }
        if (this.filters.time == 3) {
          allCalculations = allCalculations.filter((cal) => {
            return cal.yearsForPayment > 10 && cal.yearsForPayment <= 20
              ? true
              : false;
          });
        }
        if (this.filters.time == 4) {
          allCalculations = allCalculations.filter((cal) => {
            return cal.yearsForPayment > 20 ? true : false;
          });
        }
        // installments
        if (this.filters.installments == 1) {
          allCalculations = allCalculations.filter((cal) => {
            return cal.monthlyInstallment > 0 && cal.monthlyInstallment <= 300
              ? true
              : false;
          });
        }
        if (this.filters.installments == 2) {
          allCalculations = allCalculations.filter((cal) => {
            return cal.monthlyInstallment > 300 && cal.monthlyInstallment <= 500
              ? true
              : false;
          });
        }
        if (this.filters.installments == 3) {
          allCalculations = allCalculations.filter((cal) => {
            return cal.monthlyInstallment > 500 &&
              cal.monthlyInstallment <= 1000
              ? true
              : false;
          });
        }
        if (this.filters.installments == 4) {
          allCalculations = allCalculations.filter((cal) => {
            return cal.monthlyInstallment > 1000 ? true : false;
          });
        }
      }
      return allCalculations;
    },
    hasCalculations() {
      return !this.isLoading && this.$store.getters["calculations/hasCalculations"];
    },
  },
  methods: {
    changeFilters(filterParams) {
      this.filters = filterParams;
    },
    handleError() {
      this.error = null
    },
    async loadCalculations() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("calculations/loadCalculations");
      } catch (error) {
        this.error = error.message + " in getting calculations." || "Something went wrong!";
      }
      this.isLoading = false;
    },
  },
  created() {
    this.loadCalculations();
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>
