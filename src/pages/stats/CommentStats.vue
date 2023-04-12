<template>
  <section>
    <h2>Comment statistics</h2>
    <div>
      <div v-if="isLoading">
        <p>Statistic is loading...</p>
      </div>
      <div v-else>
        <p><b>Average grade: </b><br />{{ averageGrade }}</p>
        <p><b>Total comments: </b><br />{{ totalComments }}</p>
        <GChart type="PieChart" :options="options" :data="dataReceived" />
      </div>
    </div>
  </section>
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
      let textAverage = "";
      switch (Math.round(this.average)) {
        case 1:
          textAverage = "One ★";
          break;
        case 2:
          textAverage = "Two ★";
          break;
        case 3:
          textAverage = "Three ★";
          break;
        case 4:
          textAverage = "Four ★";
          break;
        case 5:
          textAverage = "Five - ★";
          break;
      }
      console.log(textAverage);
      return textAverage + " - " + this.average;
    },
    totalComments() {
      return this.total;
    },
  },
  methods: {
    loadStats() {
      const tempStats = JSON.parse(this.$store.getters["comments/getStats"]);
      this.data.push(["One - ★", tempStats.one]);
      this.data.push(["Two - ★★", tempStats.two]);
      this.data.push(["Three - ★★★", tempStats.three]);
      this.data.push(["Four - ★★★★", tempStats.four]);
      this.data.push(["Five - ★★★★★", tempStats.five]);
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
    }, 500);
  },
};
</script>
