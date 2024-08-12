<template>
  <v-row justify="center" class="custom-style pa-5">
    <v-col class="ma-10">
      <!-- Alerts -->
      <v-row class="mb-2">
        <v-alert v-if="emptyNameAlert" type="error" dismissible @input="emptyNameAlert = false" variant="tonal"
           closable>
          Connection Name cannot be empty.
        </v-alert>
        <v-alert v-if="invalidLengthAlert" type="error" dismissible @input="invalidLengthAlert = false" variant="tonal"
          closable>
          Connection Name cannot be longer than 32 characters.
        </v-alert>
        <!-- <v-alert else="errorAlert" type="error" dismissible @input="errorAlert = false"
          variant="tonal" closable>
          An error occurred while processing: {{ processingErrorMessage }}
        </v-alert> -->
      </v-row>
      <!-- Connection Name Input -->
      <v-row>
        <v-col>
          <p class="headingFont">Connection Name</p>
          <span class="font">Name of your Connection</span>
        </v-col>

        <v-text-field @input="validation" v-model="connectionName" variant="outlined" width="40px" />

        <div></div>
      </v-row>

      <!-- Schedule Type Selector -->
      <v-row>
        <v-col>
          <p class="headingFont">Schedule Type</p>
          <span class="font">How you want your sync to be triggered?</span>
        </v-col>
        <v-select v-model="selectedScheduleType" :items="scheduleType" width="40px" variant="outlined" />
      </v-row>

      <!-- Replication Frequency Selector (shown if 'Scheduled' is selected) -->
      <v-row v-if="selectedScheduleType === 'Scheduled'">
        <v-col>
          <p class="headingFont">Replication Frequency</p>
          <span class="font">How often your data will sync to your destination</span>
        </v-col>
        <v-select v-model="frequency" :items="replicationFrequencies" variant="outlined" width="40px" />
      </v-row>

      <!-- Finish & Sync Button -->
      <v-row class="mt-10" justify="end">
        <v-btn @click="syncing" color="#023c83">Finish & Sync</v-btn>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useStore();

 const connectionName = ref("Custom Connection");
const selectedScheduleType = ref("Scheduled");
const scheduleType = ref(['Scheduled', 'Manual', 'Cron']);
const frequency = ref("Enter Frequency");
const replicationFrequencies = ['Every hour', 'Every 2 hours', 'Every 6 hours', 'Every 8 hours', 'Every 12 hours', 'Every 24 hours'];

const emptyNameAlert = ref(false);
const invalidLengthAlert = ref(false);
const processingErrorAlert = ref(false);
const errorAlert = ref(false);
const processingErrorMessage = ref("");

const props = defineProps({
  sourceId: String,
  destinationId: String,
});

const syncing = () => {
  // Reset alerts
  emptyNameAlert.value = false;
  invalidLengthAlert.value = false;
  processingErrorAlert.value = false;
  errorAlert.value = false;

  // Validate connection name
  if (!connectionName.value) {
    emptyNameAlert.value = true;
    return;
  } else if (connectionName.value.length > 32) {
    invalidLengthAlert.value = true;
    return;
  }else{
      errorAlert.value =true;
  }

  const data = {
    name: connectionName.value,
    source_connector_id: props.sourceId,
    destination_connector_id: props.destinationId,
    status: "Enabled",
    frequency: frequency.value,
    schedule_type: selectedScheduleType.value,
  };

  // Dispatch action to create pipelines
  store.dispatch('createPipelines', data).then(() => {
    router.push('/pipelines');
  }).catch((error) => {
    processingErrorMessage.value = error.message;
    processingErrorAlert.value = true;
  });
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
