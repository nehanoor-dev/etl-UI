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

    </v-col>
  </v-row>

</template>
<script setup>
import { inject, ref , computed, watch} from 'vue';
import router from '@/router';

const connectionName = ref("Custom Connection")
const scheduleType = ref(['Scheduled', 'Manual', 'Cron'])
const selectedScheduleType = ref("Scheduled")
const frequency = ref("Enter Frequency")
const replicationFrequencies = ['Every hour', 'Every 2 hours', 'Every 6 hours', 'Every 8 hours', 'Every 12 hours', 'Every 24 hours'];

const emit = defineEmits('configuration-bulk')

const emitConfiguration = () => {
    emit('configuration-bulk', {
        connectionName: connectionName.value,
        scheduleType: selectedScheduleType.value,
        frequency: frequency.value
    });
};


watch([connectionName, selectedScheduleType, frequency], emitConfiguration, { immediate: true });

emitConfiguration();

</script>
<style scoped>
.custom-style {
    column-gap: 100px;
 }
.radioBorder {
    border: 1px solid grey;
    height: 100px;
}
.font {
    font-size: 11px;
    color: grey;
}
.headingFont{
    font-size: 15px;
}
</style>