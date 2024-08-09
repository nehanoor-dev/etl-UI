<template>
  <!-- Main container with fluid layout -->
  <v-container fluid>
    <v-row>
      <!-- Main column with a light grey background -->
      <v-col cols="12" class="bg-grey-lighten-5">
        <v-container>
          <!-- Section for displaying the Connector Name -->
          <div class="my-6">
            <ConnectorName />
          </div>
          
          <!-- Conditional rendering of the connection details card if 'fields' are available -->
          <div v-if="fields">
            <v-card max-width="600">
              <div class="ma-4">
                <v-container>
                  <!-- Title for the connection details section -->
                  <v-row>
                    <v-col class="mb-4">
                      <h3>Connection Details</h3>
                    </v-col>
                  </v-row>
                  
                  <!-- Section for rendering the dynamic form fields for the connector -->
                  <v-row>
                    <ConnectorForm />
                  </v-row>
                  
                  <!-- Row with buttons for testing the connection and submitting the form -->
                  <v-row>
                    <v-col cols="6">
                      <TestConnection />
                    </v-col>
                    <v-col cols="6">
                      <SubmitForm />
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </v-card>
          </div>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ConnectorForm from "./ConnectorForm.vue";
import TestConnection from "./TestConnection.vue";
import SubmitForm from "./SubmitForm.vue";
import ConnectorName from "./ConnectorName.vue";

export default {
  name: "DestinationConfiguration", // Component name for Vue identification

  components: {
    ConnectorForm,      // Component for rendering form fields dynamically
    ConnectorName,      // Component for displaying and handling the connector's name
    TestConnection,     // Component for the button to test the connection
    SubmitForm,         // Component for the button to submit the form
  },

  computed: {
    // Mapping 'destination' and 'fields' state from the 'destination' Vuex module
    ...mapState("destination", ["destination", "fields"]),
  },

  watch: {
    // Watching the route parameter 'name' to fetch new destination data whenever it changes
    "$route.params.name": "fetchDestination",
  },

  methods: {
    // Mapping the 'fetchDestination' action from the 'destination' Vuex module to this component
    ...mapActions("destination", ["fetchDestination"]),
  },

  mounted() {
    // Fetch the destination data when the component is mounted
    this.fetchDestination(this.$route.params.name);
  },
};
</script>
