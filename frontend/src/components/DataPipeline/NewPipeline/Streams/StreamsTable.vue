<template>
    <v-card
      title="Nutrition"
      flat
    >
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
        :items="data"
        :search="search"
      ></v-data-table>
    </v-card>
  </template>
  <script setup>
  import { ref } from 'vue';
  
  // Reactive state
  const search = ref('');
  const headers = ref([
   
    { key: 'namespace', title: 'Namespace' },
    { key: 'streams', title: 'Streams' },
    { key: 'syncMode', title: 'Sync Mode' },
    { key: 'fields', title: 'Fields' },
    { key: 'enable', title: 'Enable' },
  ]);
  
  const data = ref([
    {
      namespace: '<Destination-schema>',
        streams: "Sheets",
        syncMode: 'overwrite',
        fields: 'All',
        enable: 'true',     
    },
    
  ]);
  </script>