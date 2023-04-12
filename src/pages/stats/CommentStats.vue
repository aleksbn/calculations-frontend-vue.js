<template>
  <section>
    <h2>Comment statistics</h2>
  </section>
  <div>
    <div v-if="!isLoading">
      <p><b>Average grade: </b><br />{{ averageGrade }}</p>
      <p><b>Total comments: </b><br />{{ totalComments }}</p>
      <GChart type="PieChart" :options="options" :data="dataReceived" />
    </div>
    <p v-else>Statistic is loading...</p>
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
export default {
  components: { GChart },
  data() {
    return {
      stats: {},
      loading: true,
      average: 0,
      total: 0,
      data: [["Star ranking", "Number of stars"]],
      options: {
        width: 1100,
        height: 400,
        colors: ["black", "red", "yellow", "blue", "green"],
      },
    };
  },
  computed: {
    isLoading() {
      return this.loading;
    },
    dataReceived() {
      return this.data;
    },
    averageGrade() {
      return this.average;
    },
    totalComments() {
      return this.total;
    },
  },
  methods: {
    loadStats() {
      const tempStats = JSON.parse(this.$store.getters["comments/getStats"]);
      this.data.push(["one", tempStats.one]);
      this.data.push(["two", tempStats.two]);
      this.data.push(["three", tempStats.three]);
      this.data.push(["four", tempStats.four]);
      this.data.push(["five", tempStats.five]);
      this.average = tempStats.average;
      this.total = tempStats.total;
    },
    async loadComments() {
      try {
        await this.$store.dispatch("comments/loadComments");
      } catch (error) {
        this.error =
          error.message + " in getting comments." || "Something went wrong!";
      }
    },
  },
  created() {
    this.loadComments();
    setTimeout(() => {
      this.stats = this.loadStats();
      this.loading = false;
    }, 1000);
  },
};
</script>
