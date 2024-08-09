<template>
  <!-- Button to navigate to the 'newpipeline' route -->
  <v-btn @click="newPipeline" class="custom-button" elevation="2" size="large" rounded="lg">
    <v-icon left>mdi-plus</v-icon>
    New Connection
  </v-btn>
</template>

<script setup>
import { useRouter } from 'vue-router'; 
const router = useRouter(); 

const newPipeline = () => {
  router.push('/newpipeline');  
};
</script>

<style scoped>
/* Custom styling for the button */
.custom-button {
  background-color: white;  /* White background color */
  color: #023c83;   /* Dark blue text color */
  border: 1px solid #023c83;        
  font-size: 14px;          /* Font size of 13px */
  text-transform: capitalize; /* Capitalize button text */
}

/* Custom styling for the icon within the button */
.custom-button .v-icon {
  margin-right: 12px;  /* Add space between the icon and the text */
}
</style>
