<template>
  <base-card>
    <h1 style="text-align: center">Select the statistics you want to see.</h1>
  </base-card>
  <base-card>
    <base-button link :to="commentLink"> All comments </base-button>
    <base-button link :to="calcLink">All calculations </base-button>
  </base-card>
  <base-card>
    <router-view></router-view>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      commentLink: "/allstats/comments",
      calcLink: "/allstats/calculations",
    };
  },
};
</script>
