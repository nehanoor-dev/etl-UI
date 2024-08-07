<template>
<v-card
   title="Nutrition"
   flat>
  
  <template v-slot:text>
   <v-text-field
   v-model="search"
   label="Search"
   prepend-inner-icon="mdi-magnify"
   variant="outlined"
   hide-details
   single-line
   ></v-text-field>
  
  </template>
  
  <v-data-table
  
  :headers="headers"
  
  :items="destinationData"
  
  :search="search"
  
  ></v-data-table>
  
  </v-card>
  
  </template>
  
  <script setup>
  
  import { computed, onMounted, ref } from 'vue';
  
  import { useStore } from 'vuex';
  
  
  
  const store = useStore();
  
  
  
  // Reactive state
  
  const search = ref('');
  
  const headers = ref([
  
  { key: 'destinationName', title: 'Name' },
  
  { key: 'destinationConnector', title: 'Connector' },
  
  { key: 'destinationConnections', title: 'Connections' },
  
  ]);
  
  onMounted(()=>{
  
  store.dispatch('fetchDestination');
  
  });
  
  
  
  const myDestination = computed(()=> store.state.destination.destination);
  
  const destinationData = computed(()=>
  
  (myDestination.value || []).map(destinations =>({
  
  destinationName: destinations.destinationName,
  
  destinationConnector: destinations.destinationConnector,
  
  destinationConnections: destinations.destinationConnections,
  
  })))
  
  // const data = ref([
  
  // {
  
  // namespace: '<Destination-schema>',
  
  // streams: "Sheets",
  
  // syncMode: 'overwrite',
  
  // fields: 'All',
  
  // enable: 'true',
  
  // },
  
  // ]);
  
  </script>