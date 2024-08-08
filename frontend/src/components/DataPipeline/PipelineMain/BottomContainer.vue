<template>
    <!-- Container with custom styling to wrap Dropdown and Table components -->
    <div class="ma-5 pa-2 custom-container">
      <!-- Dropdown component -->
      <Dropdown></Dropdown>
      <!-- Table component -->
      <Table />
    </div>
  </template>
  
  <script setup>
  import Dropdown from './Dropdown.vue'; 
  import Table from './Table.vue';       
  </script>
  
  <style scoped>
  /* Custom styling for the container */
  .custom-container {
    border-radius: 20px;  /* Rounded corners for the container */
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, /* Subtle shadow effect */
                rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; /* Slight border shadow */
  }
  </style>
  