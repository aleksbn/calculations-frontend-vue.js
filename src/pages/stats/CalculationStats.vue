<template>
  <section>
    <h2>Basic calculations statistics:</h2>
    <div v-if="isLoading">
      <p>Statistic is loading...</p>
    </div>
    <div v-else>
      <p><b>Total calculations: </b><br />{{ stats.totalCalculations }}</p>
      <p><b>Total base amount: </b><br />{{ stats.totalBaseAmount }} $</p>
      <p><b>Average base amount: </b><br />{{ stats.averageBaseAmount }} $</p>
      <p><b>Total amount: </b><br />{{ stats.totalAmount }} $</p>
      <p><b>Average amount: </b><br />{{ stats.averageAmount }} $</p>
      <p><b>Total installments: </b><br />{{ stats.totalInstallment }} $</p>
      <p><b>Average installments: </b><br />{{ stats.averageInstallment }} $</p>
      <p><b>Total length of loan: </b><br />{{ stats.totalLength }} years</p>
      <p><b>Average length of loan: </b><br />{{ stats.averageLength }} years</p>
    </div>

  </section>
</template>

<script>
export default {
  data() {
    return {
      stats: {},
      loading: true,
    };
  },
  computed: {
    isLoading() {
      return this.loading;
    }
  },
  methods: {
    loadStats() {
      return this.stats = this.$store.getters["calculations/getStats"];
    },
    async loadCalculations() {
      try {
        await this.$store.dispatch("calculations/loadCalculations");
      } catch (error) {
        this.error =
          error.message + " in getting calculations." ||
          "Something went wrong!";
      }
    },
  },
  created() {
    this.loadCalculations();
    setTimeout(() => {
      this.stats = this.loadStats();
      this.loading = false;
    }, 1000);
  },
};
</script>
