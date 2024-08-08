<template>
    <v-row justify="center" class="custom-style pa-5">
      <v-col class="ma-10">
        <!-- Connection Name Input -->
        <v-row>
          <v-col>
            <p class="headingFont">Connection Name</p>
            <span class="font">Name of your Connection</span>
          </v-col>
          <v-text-field v-model="connectionName" variant="outlined" width="40px" />
        </v-row>
  
        <!-- Schedule Type Selector -->
        <v-row>
          <v-col>
            <p class="headingFont">Schedule Type</p>
            <span class="font">How you want your sync to be triggered?</span>
          </v-col>
          <v-select
            v-model="selectedScheduleType"
            :items="scheduleType"
            width="40px"
            variant="outlined"
          />
        </v-row>
  
        <!-- Replication Frequency Selector (shown if 'Scheduled' is selected) -->
        <v-row v-if="selectedScheduleType === 'Scheduled'">
          <v-col>
            <p class="headingFont">Replication Frequency</p>
            <span class="font">How often your data will sync to your destination</span>
          </v-col>
          <v-select
            v-model="frequency"
            :items="replicationFrequencies"
            variant="outlined"
            width="40px"
          />
        </v-row>
  
        <!-- Finish & Sync Button -->
        <v-row class="mt-10" justify="end">
          <v-btn @click="syncing" color="primary">Finish & Sync</v-btn>
        </v-row>
      </v-col>
    </v-row>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  
  // Vuex store instance
  const store = useStore();
  
  // Component state
  const connectionName = ref("Custom Connection");
  const selectedScheduleType = ref("Schedule");
  const scheduleType = ref(['Scheduled', 'Manual', 'Cron']);
  const frequency = ref("Enter");
  const replicationFrequencies = ['Every hour', 'Every 2 hours', 'Every 6 hours', 'Every 8 hours', 'Every 12 hours', 'Every 24 hours'];
  
  // Props for source and destination IDs
  const props = defineProps({
    sourceId: String,
    destinationId: String
  });
  
  // Method to handle form submission and create pipelines
  const syncing = () => {
    const data = {
      name: connectionName.value,
      source_connector_id: props.sourceId,
      destination_connector_id: props.destinationId,
      status: "enabled",
      frequency: frequency.value,
      schedule_type: selectedScheduleType.value.toLowerCase()
    };
  
    // Dispatch action to create pipelines
    store.dispatch('createPipelines', data);
  
    // Uncomment the following line if routing is needed after submission
    // router.push('/loader');
  };
  </script>
  
  <style scoped>
  /* Custom styles for the component */
   .font {
    font-size: 11px;
    color: grey;
  }
  
  .headingFont {
    font-size: 15px;
  }
  </style>
  