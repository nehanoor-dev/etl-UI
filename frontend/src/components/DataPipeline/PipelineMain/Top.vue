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

    <!-- Conditionally render the alert row -->
    <v-row v-if="pipelineChangeAlert">
      <!-- Alert for pipeline changes -->
      <v-alert type="info" dismissible @input="pipelineChangeAlert = false" variant="tonal" closable>
        {{ pipelineChangeMessage }}
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
