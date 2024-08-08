<template>
  <div class="my-6 d-flex justify-center">
    <v-text-field
      max-width="600"
      v-model="localQuery"
      @input="onSearch"
      append-inner-icon="mdi-magnify"
      density="compact"
      label="Search Destination"
      variant="solo"
      hide-details
      single-line
      @click:append-inner="onSearch"
    ></v-text-field>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      localQuery: "", // Local data property for v-model
    };
  },

  computed: {
    ...mapGetters("search", ["query"]),
  },

  methods: {
    ...mapActions("search", ["updateQuery"]),
    onSearch() {
      this.updateQuery(this.localQuery); // Dispatch Vuex action with localQuery
    },
  },

  watch: {
    query(newValue) {
      this.localQuery = newValue; // Update localQuery when Vuex state changes
    },
  },

  mounted() {
    this.localQuery = this.query; // Initialize localQuery with Vuex state
  },
};
</script>

<style>
.v-field__append-inner {
  color: #023c83;
}
</style>
