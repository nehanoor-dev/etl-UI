<template>
  <div class="d-flex justify-end">
    <v-btn @click="handleSubmit">Submit</v-btn>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["formData"]),
    formData() {
      return this.$store.state.destination.destination || {};
    },
  },
  methods: {
    ...mapActions("submit", ["submitForm"]),
    async handleSubmit() {
      console.log("this.getFormData", this.$store.state.destination.formData);
      this.submitForm(this.$store.state.destination.formData)
        .then((response) => {
          console.log("Form submitted successfully:", response);
        })
        .catch((error) => {
          console.error("Error submitting form:", error.message);
        });
    },
  },
};
</script>
