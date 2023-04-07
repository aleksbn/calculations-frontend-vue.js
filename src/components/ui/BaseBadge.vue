<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ["type", "title"],
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 10px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.one {
  background-color: black;
  color: white;
}

.two {
  background-color: red;
  color: white;
}

.three {
  background-color: orange;
  color: white;
}
.four {
  background-color: darkblue;
  color: white;
}
.five {
  background-color: green;
  color: white;
}
</style>
