<template>
  <base-dialog
    title="Would you like to add your data to our calculations database?"
  >
    <template #default>
      <base-card>
        <p style="text-align: justify">
          You may choose the action. If you don't want to enter your data, just
          press "Add as anonymous" and the calculation will be addes as
          anonymous one.
        </p>
        <p style="text-align: justify">
          If you decide to enter your data, it will add the data to the
          calculations. Don't worry, this is just a demo app. You may use any
          fake email or name you want. We won't use it for anything malicious.
        </p>
        <p style="text-align: justify">
          Once you press either of the buttons, your calculation will be
          displayed at the start of the calculations list and it will be marked
          with blue color.
        </p>
      </base-card>
      <form @submit.prevent="submitUserData">
        <div class="form-control" :class="{invalid: !firstName.isValid}">
          <label for="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            v-model.trim="firstName.val"
            @blur="clearValidity('firstName')"
          />
          <p v-if="!firstName.isValid">You must type in your first name!</p>
        </div>
        <div class="form-control" :class="{invalid: !lastName.isValid}">
          <label for="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            v-model.trim="lastName.val"
            @blur="clearValidity('lastName')"
          />
          <p v-if="!lastName.isValid">You must type in your last name!</p>
        </div>
        <div class="form-control" :class="{invalid: !email.isValid}">
          <label for="email">Email address:</label>
          <input
            type="email"
            name="email"
            id="email"
            v-model.trim="email.val"
            @blur="clearValidity('email')"
          />
          <p v-if="!email.isValid">You must type in your email!</p>
        </div>
        <h3 v-if="!this.formIsValid">
          Correct the above errors and press again the "Send with user data"
          button, or press "Send anonymously" if you changed your mind.
        </h3>
        <div class="form-control">
          <base-button @click="sendAnon">Send anonymously</base-button>
          <base-button @click="sendWithData" mode="outline"
            >Send with user data</base-button
          >
        </div>
      </form>
    </template>
  </base-dialog>
</template>

<script>
export default {
  data() {
    return {
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
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
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
    sendAnon() {
      this.firstName.val = "Anonymous";
      this.lastName.val = "Anonymous";
      this.email.val = "anon@madeup.net";
      const obj = {
        firstName: this.firstName.val,
        lastName: this.lastName.val,
        email: this.email.val,
      };
      this.$emit("send-data", obj);
    },
    sendWithData() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      const obj = {
        firstName: this.firstName.val,
        lastName: this.lastName.val,
        email: this.email.val,
      };
      this.$emit("send-data", obj);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

h2 {
  text-align: center;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  height: 35px;
}

input:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

.invalid label {
  color: red;
}

.invalid input {
  border: 1px solid red;
}
</style>
