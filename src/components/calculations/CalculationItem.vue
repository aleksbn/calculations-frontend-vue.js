<template>
  <li :class="isRecent">
    <h3>
      {{ fullName }}
    </h3>
    <h4>{{ email }}</h4>
    <div>
      Base amount: <b>{{ baseAmount }} $</b><br />
      Annual interest rate: <b>{{ percentage }} % </b><br />
      Years for Payment: <b>{{ yearsForPayment }} years - {{ months }} months</b><br />
      Total: <b>{{ totalForRepayment }} $</b><br />
      Montly installments: <b>{{ monthlyInstallment }} $</b><br />
      Time of calculation: <b>{{ convertedTime }}</b><br />
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
    "baseAmount",
    "yearlyInterestRate",
    "yearsForPayment",
    "totalForRepayment",
    "monthlyInstallment",
    "timeOfCalculation",
  ],
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    percentage() {
      const perc = this.yearlyInterestRate * 100;
      return perc.toFixed(2);
    },
    months() {
      return this.yearsForPayment * 12
    },
    convertedTime() {
      return new Date(this.timeOfCalculation).toDateString();
    },
    isRecent() {
      const currentDate = new Date().toLocaleDateString();
      const addedByUser = JSON.parse(localStorage.getItem('addedByUser'));
      console.log(this.id);
      return addedByUser.some(calculation => calculation.id === this.id && new Date(calculation.date).toLocaleDateString() === currentDate) ? 'recent' : '';
    },
  }
}
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

.actions {
  display: flex;
  justify-content: flex-end;
}

.recent {
  background-color: cyan;
}
</style>
