<template>
  <!-- Container for the layout of the page -->
  <v-container fluid fill-width>
    <v-row class="fill-height" align="center" justify="space-between">
      
      <!-- Left Side -->
      <v-col class="ml-2">
        <!-- Heading for the left section -->
        <v-row class="heading">
          Connections
        </v-row>
        <!-- Additional content can be added here -->
        <v-row>
          <!-- Potential space for more elements or content -->
        </v-row>
      </v-col>

      <!-- Right Side -->
      <v-col class="d-flex justify-end">
        <!-- Button component for actions on the right side -->
        <Button></Button>
      </v-col>
      
    </v-row>

    <!-- Conditionally render the row for pipeline change alerts -->
    <v-row v-if="pipelineChangeAlert">
      <v-alert type="info" dismissible @input="pipelineChangeAlert = false" variant="tonal" closable>
        {{ pipelineChangeMessage }}
      </v-alert>
    </v-row>

    <!-- Conditionally render the row for error alerts -->
    <v-row v-if="errorAlert">
      <v-alert type="error" dismissible @input="errorAlert = false" variant="tonal" closable>
        {{ errorMessage }}
      </v-alert>
    </v-row>
    
  </v-container>
</template>

<script setup>
import Button from './Button.vue'; // Import the Button component
import { ref, watch } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const pipelineChangeAlert = ref(false);
const pipelineChangeMessage = ref("");
const errorAlert = ref(false);
const errorMessage = ref("");

// Watcher for pipeline changes
watch(
  () => store.state.pipelines,
  (newVal, oldVal) => {
    if (newVal.length > oldVal.length) {
      pipelineChangeAlert.value = true;
      pipelineChangeMessage.value = "A pipeline has been added.";
    } else if (newVal.length < oldVal.length) {
      pipelineChangeAlert.value = true;
      pipelineChangeMessage.value = "A pipeline has been removed.";
    }
  },
  { deep: true } // Watch deeply to detect changes in nested arrays
);

// Example function to handle API errors (you can modify this according to your specific API calls)
const handleError = (error) => {
  errorAlert.value = true;
  errorMessage.value = `Error: ${error.message || 'An error occurred during the API request.'}`;
};

// Example: Fetching pipelines with error handling
const fetchPipelines = async () => {
  try {
    await store.dispatch('fetchPipelines');
  } catch (error) {
    handleError(error);
  }
};

// You can call `fetchPipelines` or other similar functions that involve API calls and wrap them in a try-catch block to handle errors
fetchPipelines();
</script>

<style scoped> 
/* Styles for the heading */
.heading {
  color: #023C83;
  font-weight: bold;
  font-size: 30px;
}

p {
  font-size: 14px;
}
</style>
