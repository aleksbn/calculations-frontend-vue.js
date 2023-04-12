<template>
  <div>
    <base-card>
      <h1 style="text-align: center">Select the statistics you want to see.</h1>
    </base-card>
    <base-card>
      <base-button link :to="commentLink" @click="clicked">
        Comments
      </base-button>
      <base-button link :to="calcLink">Calculations </base-button>
    </base-card>
    <base-card v-if="isClicked">
      <router-view v-slot="slotProps">
      <transition name="stats" mode="out-in">
        <component :is="slotProps.Component"/>
      </transition>
      </router-view>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commentLink: "/allstats/comments",
      calcLink: "/allstats/calculations",
      isClicked: false,
    };
  },
  methods: {
    clicked() {
      this.isClicked = true;
    },
  },
};
</script>

<style scoped>
.stats-enter-from{
  opacity: 0;
  transform: translateY(-30px);
}

.stats-leave-to{
  opacity: 0;
  transform: translateY(30px);
}

.stats-enter-to,
.stats-leave-from{
  opacity: 1;
  transform: translateY(0);
}

.stats-enter-active{
  transition: all 0.3s ease-out;
}

.stats-leave-active{
  transition: all 0.3s ease-in;
}
</style>