<template>
  <v-container>
    <!-- Header section displaying total destinations and filter options -->
    <div>
      <v-row class="my-4">
        <!-- Display the total number of destinations found -->
        <v-col>
          <div class="ma-3">
            <p class="text-grey-lighten-1">
              {{ totalDestinations }} Destinations found
            </p>
          </div>
        </v-col>
        
        <!-- Filter button with a dropdown menu for filtering destinations -->
        <v-col>
          <div class="d-flex justify-end">
            <v-menu transition="scale-transition">
              <!-- Activator slot for the filter button -->
              <template v-slot:activator="{ props }">
                <v-btn
                  v-bind="props"
                  color="#023C83"
                  prepend-icon="mdi-filter"
                  elevation="2"
                  class="ma-2"
                  size="small"
                >
                  Filter
                </v-btn>
              </template>
              
              <!-- Dropdown list items for selecting filter options -->
              <v-list>
                <v-list-item @click="filter('active')">
                  <v-list-item-title>Active</v-list-item-title>
                </v-list-item>
                <v-list-item @click="filter('Inactive')">
                  <v-list-item-title>Inactive</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-col>
      </v-row>
    </div>

    <!-- Table displaying the list of destinations -->
    <v-table>
      <thead>
        <tr>
          <!-- Table headers for each column -->
          <th class="text-left font-weight-bold">Name</th>
          <th class="text-left font-weight-bold">Connector</th>
          <th class="text-left font-weight-bold">Source</th>
          <th class="text-left font-weight-bold">Last Sync</th>
          <th class="text-left font-weight-bold">Status</th>
        </tr>
      </thead>
      <tbody>
        <!-- Iterate over each destination and display its details in the table -->
        <tr v-for="destination in destinations" :key="destination.name">
          <!-- Display the destination name -->
          <td>{{ destination.name }}</td>
          
          <!-- Display the connector's image and name -->
          <td>
            <v-icon color="#35aedd">
              <img
                :src="'data:image/png;base64,' + destination.connector.image"
                class="rounded-circle"
                width="20px"
                height="20px"
                alt="Connector Image"
              />
            </v-icon>
            <span>{{ destination.name }}</span>
          </td>
          
          <!-- Display the source of the destination -->
          <td>{{ destination.source }}</td>
          
          <!-- Display the last synchronization time of the destination -->
          <td>{{ destination.last_sync }}</td>
          
          <!-- Display the status of the destination with a colored button -->
          <td>
            <v-btn
              variant="tonal"
              rounded
              size="small"
              :color="
                destination.status === 'pending'
                  ? 'orange-lighten-3'
                  : destination.status === 'healthy'
                  ? 'green'
                  : destination.status === 'unhealthy'
                  ? 'red'
                  : ''
              "
            >
              {{ destination.status }}
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "DataTable", // Component name for Vue identification

  computed: {
    // Mapping getters from the 'api' Vuex module to access destinations, totalDestinations, and loading state
    ...mapGetters("api", ["destinations", "totalDestinations", "loading"]),
  },

  created() {
    // Fetch the list of destinations when the component is created
    this.fetchDestinations();
  },

  methods: {
    // Mapping the 'fetchDestinations' action from the 'api' Vuex module to fetch data from the API
    ...mapActions("api", ["fetchDestinations"]),
  },
};
</script>
