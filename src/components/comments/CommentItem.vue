<template>
  <li>
    <h3>
      {{ fullName }}
    </h3>
    <div>
      Opinion:
      <b style="cursor: pointer" v-if="isTextShort" @click="toggleText(false)">{{ commentText }}</b>
      <b class="displayTextClass" v-else @click="toggleText(true)">{{
        hiddenCommentText
      }}</b><br />
      <!--       Time of commenting: <b>{{ convertedTime }}</b
      ><br /> -->
    </div>
    <div>
      <base-badge :type="baseGrade" :title="baseTitle"></base-badge>
    </div>
    <div class="actions">
      <base-button link :to="commentDetailsLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: [
    "id",
    "firstName",
    "lastName",
    "email",
    "commentText",
    "commentGrade",
    "timeOfCommenting",
  ],
  methods: {
    toggleText(isShown) {
      this.isTextShort = isShown;
    },
  },
  data() {
    return {
      isTextShort: false,
    };
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    convertedTime() {
      const dateToConvert = new Date(this.timeOfCommenting);
      return dateToConvert.toDateString();
    },
    commentDetailsLink() {
      return this.$route.path + "/" + this.id;
    },
    baseGrade() {
      var gr;
      switch (this.commentGrade) {
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
      for (var i = 0; i < this.commentGrade; i++) {
        gradeToDisplay += "★";
      }
      return gradeToDisplay;
    },
    hiddenCommentText() {
      return this.commentText.length >= 33 ? this.commentText.substring(0, 30) + "..." : this.commentText;
    },
    isRecent() {
      return new Date(this.timeOfCommenting).toLocaleDateString() === new Date().toLocaleDateString() ? "recent" : "";
    }
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.displayTextClass {
  color: red;
  cursor: pointer;
}

.actions {
  display: flex;
  justify-content: flex-end;
}

.recent {
  background-color: cyan;
}
</style>
