<template>
    <v-container fluid>
      <v-row class="fill-height" align="center">
        <v-col lg="8" md="10" sm="12">
          <v-row>
            <v-col>
              <AllDropdown :drop-down-list="Statuses" v-model="Statuses" @change="applyFilters" label="Status"></AllDropdown>
            </v-col>
            <v-col>
              <AllDropdown :drop-down-list="scheduleTypes" v-model="scheduleTypes" @change="applyFilters" label="Schedule Type"></AllDropdown>
            </v-col>
            <v-col>
              <AllDropdown :drop-down-list="sources" v-model="selectedSource" @change="applyFilters" label="Source"></AllDropdown>
            </v-col>
            <v-col>
              <AllDropdown :drop-down-list="destinations" v-model="selectedDestination" @change="applyFilters" label="Destination"></AllDropdown>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import { useStore } from 'vuex';
  import AllDropdown from './AllDropdown.vue';
  
  const store = useStore();
  const allSources = computed(() => store.getters.allSources);
const allDestinations = computed(() => store.getters.allDestinations);
const sources = allSources.value
const destinations = allDestinations.value
// Use the data
onMounted(() => {
   
  console.log('Sources:', allSources.value);
  console.log('Destinations:', allDestinations.value);
});
   const Statuses = ref(['enabled', 'disabled']);
  const scheduleTypes = ref(['Manual', 'Scheduled', 'Cron']);
//   const sources = ref(['source1', 'source2']);
//   const destinations = ref(['Destination1', 'Destination2']);
  
  const selectedStatus = ref(null);
  const selectedScheduleType = ref(null);
  const selectedSource = ref(null);
  const selectedDestination = ref(null);
  
  const applyFilters = () => {
    store.dispatch('setFilters', {
      statuses: selectedStatus.value,
      schedule_type: selectedScheduleType.value,
      source_connector: selectedSource.value,
      destination_connector: selectedDestination.value,
    });
  };
  </script>
  