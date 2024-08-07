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
    background-color: #F5FAFE;
    color: #023C83;
  }

  .custom-button .v-icon {
    margin-right: 10px;
  }

  .custom-button:hover {
    background-color: #e1ecf7;
  }
</style>