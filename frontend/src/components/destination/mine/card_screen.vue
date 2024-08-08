<template>
  <!-- Main container for the row -->
  <v-row class="box">
    <v-col cols="12">
      <!-- Main card container with padding and rounded corners -->
      <v-card-text class="pt-2">
        <v-card class="pa-4" color="#FFFFFF" rounded="lg">
          <!-- Row to contain the destination cards with no gutters for tight spacing -->
          <v-row class="no-gutters">
            <!-- Loop through destinations from Vuex store to create a card for each destination -->
            <v-col v-for="destination in $store.state.destinations" 
                   :key="destination.name" 
                   cols="12" sm="6" md="3"
                   class="text-center mb-3 d-flex justify-center">
              <!-- Individual card representing a destination -->
              <v-card class="pa-4 internal-card rounded-lg" 
                      elevation="2" 
                      @click="navigateToSource(destination)">
                <div class="d-flex flex-column align-center justify-center">
                  <!-- Container for the destination image -->
                  <div class="large-icon mb-2">
                    <!-- Display destination image using Vuetify's v-img -->
                    <v-img class="img" :src="destination.image" contain></v-img>
                  </div>
                  <!-- Display destination name -->
                  <div class="destination-name">
                    {{ destination.name }}
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-card-text>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "Cardsc",
  computed: {
    // Map Vuex getters to component's computed properties
    ...mapGetters(['destinations']),
  },
  created() {
    // Fetch destinations from the store when the component is created
    this.fetchdestinations();
  },
  methods: {
    // Map Vuex actions to component's methods
    ...mapActions(['fetchdestinations']),
    // Method to navigate to the details page of the selected destination
    navigateToDestination(source) {
      this.$router.push({ name: 'source-details', params: { source: source.name.toLowerCase() } });
    },
  },
};
</script>

<style scoped>
/* Style for each internal card */
.internal-card {
  cursor: pointer; /* Change cursor to pointer on hover */
  background-color: #ffffff; /* Card background color */
  color: #000000; /* Text color */
  display: flex; /* Flexbox for layout */
  align-items: center; /* Center content vertically */
  justify-content: center; /* Center content horizontally */
  height: 150px; /* Fixed height for cards */
  width: 90%; /* Set width to 90% of the parent */
  border: 1px solid #d3d3d313; /* Subtle border */
  transition: all 0.3s ease; /* Smooth transition for hover effects */
  margin-left: auto; /* Center the card horizontally */
  margin-right: auto;
}

/* Change background color and text color on hover */
.internal-card:hover {
  background-color: #e8f0fe;
}

.internal-card:hover .large-icon,
.internal-card:hover .source-name {
  color: #023C83 !important; /* Change icon and name color on hover */
}

/* Padding for the card text section */
.v-card-text {
  padding-top: 8px;
  padding-bottom: 8px;
}

/* Styling for the large icon container */
.large-icon {
  width: 64px;
  height: 64px;
  display: flex; /* Flexbox to center the image */
  align-items: center; 
  justify-content: center;
}

/* Ensure the image fits within the icon container */
.large-icon .v-img {
  min-width: 70px;
  min-height: 70px;
  aspect-ratio: 3/2;
}

/* Styling for the destination name text */
.destination-name {
  text-align: center;
  font-size: 14px;
  line-height: 1.2;
  max-width: 120px; /* Max width to prevent overflow */
  word-wrap: break-word; /* Wrap long words to fit within the container */
}
</style>
