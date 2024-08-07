<template>
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

.custom-button {
  background-color:#023c83;
  color: white;
  font-size: 10px;
  text-transform: capitalize;
  }

  .custom-button .v-icon {
    margin-right: 12px;
  }

  .custom-button:hover {
    background-color:#023c83;
    color: white;
  }
</style>