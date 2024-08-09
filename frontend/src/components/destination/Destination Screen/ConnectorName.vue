<template>
  <v-card max-width="600">
    <div class="ma-4">
      <v-container>
        <v-row>
          <!-- Title and connector display section -->
          <v-col>
            <h3>Create a Destination</h3>
          </v-col>
          <v-col>
            <div class="d-flex justify-end">
              <!-- Display an icon and the connector name -->
              <v-icon left>mdi-snowflake</v-icon>
              <p>{{ connector }}</p>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <!-- Input field for the destination name -->
          <v-col cols="12">
            <div class="my-1 mt-4">
              <h4>Destination Name</h4>
            </div>
            <v-text-field
              v-model="name"
              clearable
              :placeholder="'Enter Destination '"
              variant="outlined"
            ></v-text-field>
          </v-col>
          
          <!-- Readonly input field for the connector name -->
          <v-col cols="12">
            <div class="my-1">
              <h4>Connector</h4>
            </div>
            <v-text-field
              readonly
              v-model="connector"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    // Map 'destination' state from the 'destination' Vuex module to a computed property
    ...mapState("destination", {
      destination: (state) => state.destination,
    }),

    // Computed property for 'name' that maps to formData in Vuex and updates the store on change
    name: {
      get() {
        console.log("this.destination", this.destination);
        // Retrieve the name from the Vuex store's 'formData' if it exists, otherwise use 'destination.name'
        return this.$store.state?.formData?.name ?? this.destination?.name;
      },
      set(value) {
        console.log("this.$store", this.$store);
        // Dispatch an action to update 'formData' in the Vuex store when the name changes
        this.setFormDataAction({ key: "name", value: value });
      },
    },

    // Computed property for 'connector' that retrieves its value from the 'destination' object in Vuex
    connector: {
      get() {
        return this.destination?.connector ?? "";
      },
      set(value) {
        console.log("this.$store", this.$store);
        // Dispatch an action to update 'formData' in the Vuex store when the connector changes
        this.setFormDataAction({ key: "connector", value: value });
      },
    },
  },

  async mounted() {
    // Load the destination data when the component is mounted
    await this.loadDestination();
  },

  watch: {
    // Watch for changes in the route parameter 'name' and reload the destination data accordingly
    "$route.params.name": "loadDestination",
  },

  methods: {
    // Map the 'setFormDataAction' action from the 'destination' Vuex module to the component's methods
    ...mapActions("destination", ["setFormDataAction"]),

    // Method to load the destination data based on the current route parameter 'name'
    async loadDestination() {
      const name = this.$route.params.name;
      await this.$store.dispatch("destination/fetchExistingDestination", name);
    },
  },
};
</script>
