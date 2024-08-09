<template>
  <!-- Button aligned to the right side of the container -->
  <div class="d-flex justify-end">
    <v-btn @click="handleSubmit">Submit</v-btn> <!-- Calls handleSubmit method on click -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    // Retrieves 'formData' from the Vuex store using a getter
    ...mapGetters(["formData"]),

    // Alternatively, retrieves the 'destination' object from the Vuex state and assigns it to 'formData'
    formData() {
      return this.$store.state.destination.destination || {}; // Fallback to an empty object if 'destination' is null or undefined
    },
  },
  methods: {
    // Maps the 'submitForm' action from the 'submit' Vuex module to be used in the component
    ...mapActions("submit", ["submitForm"]),

    // Method to handle form submission
    async handleSubmit() {
      // Logs the current form data from the Vuex store's 'destination' module
      console.log("this.getFormData", this.$store.state.destination.formData);

      // Calls the 'submitForm' action with the current form data
      this.submitForm(this.$store.state.destination.formData)
        .then((response) => {
          // Logs a success message with the response after a successful form submission
          console.log("Form submitted successfully:", response);
        })
        .catch((error) => {
          // Logs an error message if form submission fails
          console.error("Error submitting form:", error.message);
        });
    },
  },
};
</script>
