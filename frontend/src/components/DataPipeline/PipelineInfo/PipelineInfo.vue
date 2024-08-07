<template>

    <TopContainer
    :id="id"
    ></TopContainer>

    <StreamsTable
    :id="id"
    >
    </StreamsTable>

  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useStore } from 'vuex';
  import TopContainer from './TopContainer.vue';
  import StreamsTable from './JobHistoryTable.vue';
  
  const route = useRoute();
  const store = useStore();
  const id = ref(route.params.id);

//   // Fetch the pipelines if not already loaded
// onMounted(async () => {
//   if (!pipeline.value) {
//     await store.dispatch('fetchPipelines');
//   }
// });
  </script>
  
  <style>
  .heading {
    color: #023C83;
    font-weight: bold;
    font-size: 25px;
  }

</style>