<template>
  <base-card>
    <h2>Filter the calculations</h2>
    <select name="amount" id="amount" @change="configureFilter">
      <option value="0">All the amounts</option>
      <option value="1">0 - 25000$</option>
      <option value="2">25.001 - 50.000$</option>
      <option value="3">50.001 - 100.000$</option>
      <option value="4">100.001$+</option>
    </select>
    <select name="time" id="time" @change="configureFilter">
      <option value="0">All lengths</option>
      <option value="1">0 - 5 years</option>
      <option value="2">5 - 10 years</option>
      <option value="3">10 - 20 years</option>
      <option value="4">20+ years</option>
    </select>
    <select name="installments" id="installments" @change="configureFilter">
      <option value="0">All installments</option>
      <option value="1">0 - 300$</option>
      <option value="2">301 - 500$</option>
      <option value="3">501 - 1.000$</option>
      <option value="4">1.001$+</option>
    </select>
  </base-card>
</template>

<script>
export default {
  emits: ["change-filters"],
  data() {
    return {
      filterParams: {
        amount: 0,
        time: 0,
        installments: 0,
      },
    };
  },
  methods: {
    configureFilter(event) {
      const inputId = event.target.id;
      const inputValue = event.target.value;
      const updatedFilters = {
        ...this.filterParams,
        [inputId]: inputValue,
      };
      this.filterParams = updatedFilters;
      this.$emit("change-filters", this.filterParams);
    },
  },
};
</script>

<style scoped>
select {
  background-color: #e1f5fe;
  color: #333;
  border: solid 2px royalblue;
  border-radius: 15px;
  padding: 8px;
  margin: 5px;
  width: 200px;
  display: inline;
}

select option {
  background-color: #e1f5fe;
  color: #333;
  border: none;
}
</style>
