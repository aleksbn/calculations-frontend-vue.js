<template>
  <section><comment-filter @change-filter="filterComments"></comment-filter></section>
  <base-card>
    <section>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/addcomment"
          >Tell us what do you think? Add your comment!</base-button
        >
      </div>
      <ol v-if="hasComments">
        <comment-item
          v-for="comment in filteredComments"
          :key="comment.id"
          :id="comment.id"
          :firstName="comment.firstName"
          :lastName="comment.lastName"
          :email="comment.email"
          :commentText="comment.commentText"
          :commentGrade="comment.commentGrade"
          :timeOfCommenting="comment.timeOfCommenting"
        ></comment-item>
      </ol>
      <h3 v-else>There are no comments right now.</h3>
    </section>
  </base-card>
</template>

<script>
import CommentItem from "../../components/comments/CommentItem.vue";
import CommentFilter from "../../components/comments/CommentFilter.vue";

export default {
  components: {
    CommentItem,
    CommentFilter,
  },
  data() {
    return {
      selectedGrade: 0
    }
  },
  computed: {
    filteredComments() {
      const comments = this.$store.getters["comments/comments"];
      comments.sort(function(a, b) {
        return new Date(b.timeOfCommenting) - new Date(a.timeOfCommenting);
      });
      if(this.selectedGrade != 0) {
        return comments.filter(comment => {
          if(comment.commentGrade == this.selectedGrade) {
            return true;
          } else {
            return false;
          }
        });
      }
      return comments;
    },
    hasComments() {
      return this.$store.getters["comments/hasComments"];
    },
  },
  methods: {
    filterComments(selected) {
      this.selectedGrade = selected;
    }
  }
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>
