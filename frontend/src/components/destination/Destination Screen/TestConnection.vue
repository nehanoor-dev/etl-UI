<template>
  <!-- Container for the "Test Connection" button -->
  <div>
    <!-- Button to test the connection, triggers the 'testConection' method on click -->
    <v-btn @click="testConection" color="primary">Test Connection</v-btn>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    // Maps 'formData' getter from Vuex to access form data
    ...mapGetters(["formData"]),

    // Computes 'formData' from the Vuex store's 'destination' module
    formData() {
      return this.$store.state.destination.destination || {}; // Provides an empty object if 'destination' is null or undefined
    },
  },
  methods: {
    // Maps the 'testConnection' action from the 'testConnection' Vuex module
    ...mapActions("testConnection", ["testConnection"]),

    // Method to test the connection
    async testConection() {
      // Logs the form data to the console for debugging
      console.log("this.getFormData", this.$store.state.destination.formData);

      // Calls the 'testConnection' action with the form data
      this.testConnection(this.$store.state.destination.formData)
        .then((response) => {
          // Logs success message with the response if the connection test is successful
          console.log("Form submitted successfully:", response);
        })
        .catch((error) => {
          // Logs error message if the connection test fails
          console.error("Error submitting form:", error.message);
        });
    },
  },
};
</script>
