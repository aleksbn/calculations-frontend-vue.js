<template>
  <div>
    <base-dialog :show="!!error" title="An error occured" :showClose="true" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" fixed title="Authenticating..." :showClose="false">
      <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submit">
        <div class="form-control">
          <label for="email">E-mail</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control hidden" id="emailDiv">
          <label for="emailconfirm">E-mail confirmation</label>
          <input type="email" id="emailconfirm" v-model.trim="emailconfirm" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>
        <div class="form-control hidden" id="passDiv">
          <label for="passwordconfirm">Password confirmation</label>
          <input type="password" id="passwordconfirm" v-model.trim="passwordconfirm" />
        </div>
        <p v-if="!formIsValid" id="errorParagraph">
          Please, enter a valid email and password (must be at least 6
          characters long). <span v-if="mode === 'signup'">Confirmation fields must match the original ones too.</span>
        </p>
        <base-button>{{ submitButtonCaption }}</base-button>
        <base-button type="button" mode="flat" @click="switchAuthMode">{{
          switchButtonCaption
        }}</base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      emailconfirm: "",
      password: "",
      passwordconfirm: "",
      formIsValid: true,
      mode: "login",
      isLoading: false,
      error: null,
    };
  },
  computed: {
    submitButtonCaption() {
      return this.mode === 'login' ? 'Login' : 'Signup';
    },
    switchButtonCaption() {
      return this.mode === 'login' ? 'Signup instead' : 'Login instead';
    },
  },
  methods: {
    formValidation() {
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        return false;
      }
      if (
        this.mode === "signup" &&
        (this.email !== this.emailconfirm ||
          this.password !== this.passwordconfirm)
      ) {
        return false;
      }
      return true;
    },
    handleError() {
      this.error = null;
    },
    async submit() {
      this.formIsValid = true;
      if (this.formValidation() !== true) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;
      const actionPayload = {
        email: this.email,
        password: this.password,
        mode: this.mode
      };
      try {
        await this.$store.dispatch("auth/auth", actionPayload);
        this.$router.replace("/calculateloan");
      } catch (error) {
        this.error =
          error.message || "Failed to authenticate. Check your data!";
      }
      this.isLoading = false;
    },
    switchAuthMode() {
      var emailDiv = document.getElementById("emailDiv");
      var passDiv = document.getElementById("passDiv");
      emailDiv.classList.toggle("hidden");
      passDiv.classList.toggle("hidden");
      this.mode = this.mode === 'login' ? 'signup' : 'login';

      if (!emailDiv.classList.contains('hidden')) {
        emailDiv.style.opacity = 1;
      }
      if (!passDiv.classList.contains('hidden')) {
        passDiv.style.opacity = 1;
      }
      this.formIsValid = true;
    },
  },
};
</script>

<style scoped>
.hidden {
  display: none;
}

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

input+label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
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

#errorParagraph {
  border: 2px solid red;
  font-weight: bold;
  color: red;
  padding: 25px;
  border-radius: 15px;
}
</style>
