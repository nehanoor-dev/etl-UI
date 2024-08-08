<template>
  <!-- Main row container to center the search input field -->
  <v-row class="d-flex justify-center">
    <!-- Search input field with a filter icon and menu -->
    <v-text-field v-model="searchQuery" placeholder="Search Destination Connector" type="text" variant="outlined"
      clearable max-width="600" min-width="200" :class="searchInput" color="#023C83" @input="performSearch"
      v-on:keypress.enter="performSearch">

      <!-- Filter menu triggered by the filter icon -->
      <v-menu>
        <!-- Slot to activate the menu when the filter icon is clicked -->
        <template v-slot:activator="{ props }">
          <v-icon v-bind="props" icon="mdi-tune" color="#023C83" size="30" @click="fetchdestinations"></v-icon>
        </template>

        <!-- Menu content that displays filter buttons -->
        <v-card>
          <v-card-text class="pa-">
            <!-- Loop through filter options and create a button for each -->
            <v-btn v-for="menu in $store.getters.type" :key="menu" color="primary" size="large" variant="text"
              class="mb-2" @click="performFilter(menu)" block>
              {{ menu }}
            </v-btn>
          </v-card-text>
        </v-card>
      </v-menu>

      <!-- Slot for additional elements inside the input field (e.g., loading indicator) -->
      <template v-slot:append-inner>
        <!-- Fade transition for loading indicator -->
        <v-fade-transition leave-absolute>
          <!-- Circular progress indicator shown during loading -->
          <v-progress-circular v-if="loading" color="info" size="24" indeterminate></v-progress-circular>
          <!-- Search icon shown when not loading -->
          <v-icon v-else size="24" icon="mdi-magnify" @click="performSearch"></v-icon>
        </v-fade-transition>
      </template>
    </v-text-field>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { mapMutations } from 'vuex/dist/vuex.cjs.js';

export default {
  name: 'SearchComponent',
  data() {
    return {
      searchQuery: '', // Data property to hold the search input value
      loading: false, // Data property to control the loading state
    };
  },
  computed: {
    filteredItems() { 
      // Computed property to filter items based on the search query
      if (!this.search) {
        return this.items; // Return all items if no search query is provided
      }
      return this.items.filter((item) =>
        item.toLowerCase().includes(this.search.toLowerCase()) // Return filtered items
      );
    },
    computed: {
      ...mapGetters(['destinations']), // Map Vuex getters to local computed properties
    },
    created() {
      this.fetchdestinations(); // Fetch destinations when the component is created
    },
  },
  methods: {
    ...mapActions(['searchdestinations', 'fetchdestinations']), // Map Vuex actions to local methods
    ...mapMutations(['SET_FILTER']), // Map Vuex mutations to local methods
    
    performSearch() {
      this.searchdestinations(this.searchQuery, this.menu); // Perform search action
    },
    performFilter(menu) {
      console.log(menu);
      this.SET_FILTER(menu); // Set filter using Vuex mutation
    },
    fetchdestination() {
      this.fetchdestinations(); // Fetch destinations using Vuex action
    }
  },
};
</script>

<style scoped>
.searchInput v-text-field::placeholder {
  text-align: center; 
}
</style>
