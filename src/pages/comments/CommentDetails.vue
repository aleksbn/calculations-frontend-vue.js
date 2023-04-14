<template>
  <div>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>{{ selectedComment.email }}</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <div>
          <h3>Opinion:</h3>
          <p style="text-align: justify">
            {{ selectedComment.commentText }}
          </p>
          <p>
            Time of commenting: <b>{{ convertedTime }}</b
            ><br />
          </p>
        </div>
        <div>
          <base-badge :type="baseGrade" :title="baseTitle"></base-badge>
        </div>
        <br>
        <div>
          <base-button @click="goBack()">Go back</base-button>
        </div>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  props: ["id"],
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  data() {
    return {
      selectedComment: null,
    };
  },
  created() {
    this.selectedComment = this.$store.getters["comments/comments"].find(
      (comment) => comment.id == this.id
    );
  },
  computed: {
    fullName() {
      return (
        this.selectedComment.firstName + " " + this.selectedComment.lastName
      );
    },
    convertedTime() {
      const dateToConvert = new Date(this.selectedComment.timeOfCommenting);
      return dateToConvert.toDateString();
    },
    baseGrade() {
      var gr;
      switch (this.selectedComment.commentGrade) {
        case 1:
          gr = "one";
          break;
        case 2:
          gr = "two";
          break;
        case 3:
          gr = "three";
          break;
        case 4:
          gr = "four";
          break;
        case 5:
          gr = "five";
          break;
      }
      return gr;
    },
    baseTitle() {
      var gradeToDisplay = "Grade: ";
      for (var i = 0; i < this.selectedComment.commentGrade; i++) {
        gradeToDisplay += "★";
      }
      return gradeToDisplay;
    },
  },
};
</script>
