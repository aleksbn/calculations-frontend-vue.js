<template>
  <base-card>
    <h2>Filter the comments</h2>
    <select name="grade" id="grade" @change="filter">
      <option value="0">Select the grade to be filtered</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </base-card>
</template>

<script>
export default {
  emits: ["change-filter"],
  data() {
    return {
      selected: 0,
    };
  },
  methods: {
    filter(event) {
      this.selected = event.target.value;
      this.$emit("change-filter", this.selected);
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
  width: 250px;
}

select option {
  background-color: #e1f5fe;
  color: #333;
  border: none;
}
</style>
