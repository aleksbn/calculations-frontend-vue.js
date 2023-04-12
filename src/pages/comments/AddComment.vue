<template>
  <div>
    <section>
      <h2 style="text-align: center">Make a comment!</h2>
    </section>
    <section>
      <base-card>
        <form
          @submit.prevent="sendData"
          :class="{ invalid: !firstName.isValid }"
        >
          <div class="form-control">
            <label for="firstName">First name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              v-model="firstName.val"
              @blur="clearValidity('firstName')"
            />
            <p v-if="!this.firstName.isValid">You must enter first name!</p>
          </div>
          <div class="form-control" :class="{ invalid: !lastName.isValid }">
            <label for="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              v-model="lastName.val"
              @blur="clearValidity('lastName')"
            />
            <p v-if="!this.lastName.isValid">You must enter last name!</p>
          </div>
          <div class="form-control" :class="{ invalid: !email.isValid }">
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              v-model="email.val"
              @blur="clearValidity('email')"
            />
            <p v-if="!this.email.isValid">You must enter email!</p>
          </div>
          <div class="form-control" :class="{ invalid: !commentText.isValid }">
            <label for="commentText">Text of your comment</label>
            <textarea
              id="commentText"
              name="commentText"
              rows="8"
              v-model="commentText.val"
              @blur="clearValidity('commentText')"
            ></textarea>
            <p v-if="!this.commentText.isValid">You must enter your comment!</p>
          </div>
          <div class="form-control">
            <label for="commentGrade">Your grade</label>
            <select
              name="commentGrade"
              id="commentGrade"
              @change="onChange($event)"
            >
              <option value="1" selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <br />
            <br />
          </div>
          <div class="form-control" style="text-align: center">
            <base-button @click="submitAnon">Submit anonymously</base-button>
            <base-button @click="submitWithData" mode="outline"
              >Submit with data</base-button
            >
          </div>
        </form>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 0,
      firstName: {
        val: "",
        isValid: true,
      },
      lastName: {
        val: "",
        isValid: true,
      },
      email: {
        val: "",
        isValid: true,
      },
      commentText: {
        val: "",
        isValid: true,
      },
      commentGrade: 1,
      timeOfCommenting: "",
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validatePersonData() {
      this.formIsValid = true;
      if (this.firstName.val === "") {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.val === "") {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.email.val === "") {
        this.email.isValid = false;
        this.formIsValid = false;
      }
    },
    validatePersonComment() {
      this.formIsValid = true;
      if (this.commentText.val === "") {
        this.commentText.isValid = false;
        this.formIsValid = false;
      }
      this.sendData();
    },
    sendData() {
      if (!this.formIsValid) {
        return;
      }
      this.timeOfCommenting = new Date();
      this.id = Math.trunc(Math.random() * 1000000);
      const dataToSend = {
        id: this.id,
        firstName: this.firstName.val,
        lastName: this.lastName.val,
        email: this.email.val,
        commentText: this.commentText.val,
        commentGrade: parseInt(this.commentGrade),
        timeOfCommenting: this.timeOfCommenting,
      };
      this.$store.dispatch("comments/addComment", dataToSend);
      this.$router.replace("/allcomments");
    },
    onChange(e) {
      this.commentGrade = e.target.value;
    },
    submitAnon() {
      this.firstName.val = "Anonymous";
      this.lastName.val = "Anonymous";
      this.email.val = "anon@madeup.net";
      this.validatePersonComment();
    },
    submitWithData() {
      this.validatePersonData();
      if (this.formIsValid) {
        this.validatePersonComment();
      }
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input {
  height: 35px;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}

select {
  background-color: #e1f5fe;
  color: #333;
  border: solid 2px royalblue;
  border-radius: 15px;
  padding: 8px;
  margin: 5px;
  width: 100%;
}

select option {
  background-color: #e1f5fe;
  color: #333;
  border: none;
  font-size: large;
}
</style>
