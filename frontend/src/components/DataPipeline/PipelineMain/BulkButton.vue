<template>
    <v-btn @click="BulkPipeline" class="custom-button" elevation="2" size="large" rounded="lg">
        <v-icon left>mdi-plus</v-icon>
        BulkPipeline Connection
    </v-btn>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const BulkPipeline = () => {
  router.push('/bulkpipeline');
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