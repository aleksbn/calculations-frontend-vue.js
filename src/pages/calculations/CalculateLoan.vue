<template>
  <section>
    <h2>Calculate your loan!</h2>
  </section>
  <section>
    <base-card>
      <form @submit.prevent="submitData">
        <div
          class="form-control"
          :class="{ invalid: !baseAmount.isValid }"
        >
          <label for="baseAmount">Base amount:</label>
          <input
            type="number"
            name="baseAmount"
            id="baseAmount"
            v-model="baseAmount.val"
            @blur="clearValidity('baseAmount')"
          />
          <p v-if="!this.baseAmount.isValid">
            Base amount must be a number and greather than 0!
          </p>
        </div>
        <div
          class="form-control"
          :class="{ invalid: !yearlyInterestRate.isValid }"
        >
          <label for="yearlyInterestRate"
            >Yearly interest rate (in percentages - i.e. 3.5%):</label
          >
          <input
            type="text"
            name="yearlyInterestRate"
            id="yearlyInterestRate"
            v-model="yearlyInterestRate.val"
            @blur="clearValidity('yearlyInterestRate')"
          />
          <p v-if="!this.yearlyInterestRate.isValid">
            Yearly interest rate must be a number and greather than 0!
          </p>
        </div>
        <div
          class="form-control"
          :class="{ invalid: !yearsForPayment.isValid }"
        >
          <label for="yearsForPayment"
            >Years for payment (in real numbers - i.e. 6.5):</label
          >
          <input
            type="text"
            name="yearsForPayment"
            id="yearsForPayment"
            v-model="yearsForPayment.val"
            @blur="clearValidity('yearsForPayment')"
          />
          <p v-if="!this.yearsForPayment.isValid">
            Years for payment must be a number and greather than 0!
          </p>
        </div>
        <h3 v-if="!formIsValid">
          Please, fix the above errors before submiting the form.
        </h3>
        <div class="form-control">
          <base-button>Submit</base-button>
        </div>
      </form>
    </base-card>
  </section>
  <calculation-user-data
    v-if="doneWithCalculation && !doneWithUserInput"
    @send-data="getData"
    @close="handleClose"
  ></calculation-user-data>
</template>

<script>
import CalculationUserData from "../../components/calculations/CalculationUserData.vue";

export default {
  components: {
    CalculationUserData,
  },
  data() {
    return {
      id: 0,
      baseAmount: {
        val: 0,
        isValid: true,
      },
      yearlyInterestRate: {
        val: 0,
        isValid: true,
      },
      yearsForPayment: {
        val: 0,
        isValid: true,
      },
      totalForRepayment: 0,
      monthlyInstallment: 0,
      timeOfCalculation: "",
      doneWithCalculation: false,
      doneWithUserInput: false,
      firstName: "",
      lastName: "",
      email: "",
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    handleClose() {
      alert("You must enter data, or press Send Anonymously button.");
    },
    validateForm() {
      this.formIsValid = true;
      if (isNaN(this.baseAmount.val) || this.baseAmount.val <= 0) {
        this.baseAmount.isValid = false;
        this.formIsValid = false;
      }
      if (
        isNaN(this.yearlyInterestRate.val) ||
        this.yearlyInterestRate.val <= 0
      ) {
        this.yearlyInterestRate.isValid = false;
        this.formIsValid = false;
      }
      if (isNaN(this.yearsForPayment.val) || this.yearsForPayment.val <= 0) {
        this.yearsForPayment.isValid = false;
        this.formIsValid = false;
      }
    },
    submitData() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      this.id = Math.trunc(Math.random() * 1000000);
      this.totalForRepayment = this.baseAmount.val;
      for (var i = 0; i < this.yearsForPayment.val; i++) {
        this.totalForRepayment *=
          1 + parseFloat(this.yearlyInterestRate.val) / 100;
      }
      this.totalForRepayment = this.totalForRepayment.toFixed(2);
      this.monthlyInstallment =
        this.totalForRepayment / (this.yearsForPayment.val * 12);
      this.monthlyInstallment = this.monthlyInstallment.toFixed(2);
      this.timeOfCalculation = new Date();
      this.doneWithCalculation = true;
    },
    getData($event) {
      this.doneWithUserInput = true;
      this.firstName = $event.firstName;
      this.lastName = $event.lastName;
      this.email = $event.email;
      this.sendDataToServer();
    },
    sendDataToServer() {
      const allTheData = {
        id: this.id,
        baseAmount: this.baseAmount.val,
        yearlyInterestRate: this.yearlyInterestRate.val / 100,
        yearsForPayment: this.yearsForPayment.val,
        totalForRepayment: this.totalForRepayment,
        monthlyInstallment: this.monthlyInstallment,
        timeOfCalculation: this.timeOfCalculation,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
      };
      this.$store.dispatch("calculations/addCalculation", allTheData);
      this.$router.replace("/allcalculations");
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

input + label {
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
</style>
