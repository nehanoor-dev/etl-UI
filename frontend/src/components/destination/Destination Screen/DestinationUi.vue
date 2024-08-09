<template>
  <!-- Main container for the component -->
  <v-container>
    <v-row>
      <!-- Title section for the page -->
      <v-col class="ma-3">
        <div>
          <h1>Destination</h1>
        </div>
      </v-col>

      <!-- Section for the "Add Destination" button, aligned to the right -->
      <v-col>
        <div class="d-flex justify-end">
          <!-- Router link to navigate to the main destination page when the button is clicked -->
          <router-link to="/destination/maindest">
            <v-btn
              @click="addDestination"
              color="#023C83"
              elevation="2"
              class="ma-2"
            >
              <!-- Icon and text inside the button -->
              <v-icon left>mdi-plus</v-icon>
              Add Destination
            </v-btn>
          </router-link>
        </div>
      </v-col>
    </v-row>

    <!-- Section for displaying the search component -->
    <div>
      <ExistingSearch />
    </div>

    <!-- Section for displaying the list of existing destinations -->
    <div>
      <ExistingDestinations />
    </div>
  </v-container>
</template>

<script>
import ExistingDestinations from "./ExistingDestinations.vue";
import ExistingSearch from "./ExistingSearch.vue";

export default {
  name: "DestinationUi", // Component name for Vue identification

  components: {
    ExistingDestinations, // Component for displaying the list of existing destinations
    ExistingSearch,       // Component for displaying the search functionality
    //DestinationConfiguration, // This line is commented out, likely because it's not currently needed
  },

  data: () => ({}), // Empty data function, currently not holding any state in this component
};
</script>

<style>
/* Styling for the icon color inside text fields */
.v-field__append-inner {
  color: #023c83;
}
</style>
