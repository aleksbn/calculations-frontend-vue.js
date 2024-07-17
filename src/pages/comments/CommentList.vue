<template>
  <div>
    <base-dialog
      :show="!!error"
      :showClose="true"
      title="An error occured!"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <comment-filter @change-filter="filterComments"></comment-filter>
    </section>
    <base-card>
      <section>
        <div class="controls">
          <base-button mode="outline" @click="loadComments"
            >Refresh</base-button
          >
          <base-button link to="/addcomment"
            >Tell us what do you think? Add your comment!</base-button
          >
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
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
  </div>
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
      isLoading: false,
      selectedGrade: 0,
      error: null,
    };
  },
  computed: {
    filteredComments() {
      const comments = this.$store.getters["comments/comments"];
      comments.sort(function (a, b) {
        return new Date(b.timeOfCommenting) - new Date(a.timeOfCommenting);
      });
      if (this.selectedGrade !== 0) {
        return comments.filter(
          (comment) => comment.commentGrade === this.selectedGrade
        );
      }
      return comments;
    },
    hasComments() {
      return !this.isLoading && this.$store.getters["comments/hasComments"];
    },
  },
  methods: {
    filterComments(selected) {
      this.selectedGrade = selected;
    },
    handleError() {
      this.error = null;
    },
    async loadComments() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("comments/loadComments");
      } catch (error) {
        this.error =
          `${error.message} in getting comments.` || "Something went wrong";
      }
      this.isLoading = false;
    },
  },
  created() {
    this.loadComments();
  },
};
</script>

<style scoped>
li {
  list-style: none;
}

@media (max-width: 520px) {
  .controls {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .controls button {
    width: 80%;
  }

  .controls a {
    width: 80%;
    text-align: center;
  }
}
</style>
