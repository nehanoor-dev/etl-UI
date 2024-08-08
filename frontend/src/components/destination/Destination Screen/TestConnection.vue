<template>
  <div>
    <v-btn @click="testConection" color="primary">Test Connection</v-btn>
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
    ...mapActions("testConnection", ["testConnection"]),
    async testConection() {
      console.log("this.getFormData", this.$store.state.destination.formData);
      this.testConnection(this.$store.state.destination.formData)
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
