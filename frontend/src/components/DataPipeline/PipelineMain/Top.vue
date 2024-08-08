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
    </v-container>
  </template>
  
  <script setup>
  import Button from './Button.vue'; // Import the Button component
  import { ref } from 'vue';
  
  // Reactive variables (currently not used in the template)
  const healthy = ref(9);
  const inactive = ref(4);
  const paused = ref(1);
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
  