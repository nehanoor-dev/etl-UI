<template>
  <v-container fluid>
    <!-- Stepper component for multi-step process -->
    <v-stepper editable v-model="step" :items="items" :hide-actions="true" class="custom-stepper">
      ``
      <!-- Step 1: Source selection -->
      <template v-slot:item.1>
        <Source @source-selected="handleSourceSelected" />
      </template>

      <!-- Step 2: Destination selection -->
      <template v-slot:item.2>
        <Destination @destination-selected="handleDestinationSelected" />
      </template>

      <!-- Step 3: Configuration -->
      <template v-slot:item.3>
        <ConfigMain
          :source-id="selectedSource"
          :destination-id="selectedDestination"
        />
      </template>
    </v-stepper>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import Source from './source/Source.vue';
import Destination from './Destination/Destination.vue';
import ConfigMain from './Configuration/ConfigForm.vue';

const step = ref(1); // Current step in the stepper
const items = ref(['Define Source', 'Define Destination', 'Configure Pipeline']); // Step names
const selectedSource = ref(null); // Selected source ID
const selectedDestination = ref(null); // Selected destination ID

// Handler for when a source is selected
const handleSourceSelected = (source) => {
  selectedSource.value = source;
  step.value = 2; // Move to the next step
};

// Handler for when a destination is selected
const handleDestinationSelected = (destination) => {
  selectedDestination.value = destination;
  step.value = 3; // Move to the final step
};
</script>

<style scoped>
/* Custom styles for the stepper component */
.custom-stepper {
  box-shadow: none !important;
}

/* Remove default styling and apply custom colors */
.v-stepper__header {
  border: none !important;
  box-shadow: none !important;
  background-color: blue !important; /* Change to desired color */
  color: white; /* Optional: Change text color */
}

.v-stepper__step {
  border: none !important;
  box-shadow: none !important;
}

.v-stepper__step--active {
  border: none !important;
  box-shadow: none !important;
}
 
</style>
