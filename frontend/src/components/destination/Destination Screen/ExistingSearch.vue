<template>
  <!-- Search bar component centered on the page -->
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
      localQuery: "", // Local data property for v-model to manage input value
    };
  },

  computed: {
    ...mapGetters("search", ["query"]), // Maps the 'query' getter from the 'search' Vuex module
  },

  methods: {
    ...mapActions("search", ["updateQuery"]), // Maps the 'updateQuery' action from the 'search' Vuex module
    onSearch() {
      this.updateQuery(this.localQuery); // Dispatches the 'updateQuery' action with the localQuery value to update the Vuex state
    },
  },

  watch: {
    // Watcher to keep localQuery in sync with the Vuex state 'query'
    query(newValue) {
      this.localQuery = newValue; // Updates localQuery whenever the Vuex state's query value changes
    },
  },

  mounted() {
    // Initializes the localQuery with the value from the Vuex state when the component is mounted
    this.localQuery = this.query;
  },
};
</script>

<style>
/* Custom styling for the icon inside the text field */
.v-field__append-inner {
  color: #023c83; /* Sets the color of the icon */
}
</style>
