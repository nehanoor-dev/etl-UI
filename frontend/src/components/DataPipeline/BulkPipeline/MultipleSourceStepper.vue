<template>
  <v-container fluid>

    <v-stepper v-model="step" :items="items" editable :hide-actions="true">
      <template v-slot:item.1>
        <MultipleSource @source-selected="handleSourceSelected"></MultipleSource>
      </template>
      <template v-slot:item.2>
        <Destination @destination-selected="handleDestinationSelected" />
      </template>
      <template v-slot:item.3>
        <ConfigBulkPipe @configuration-bulk="handleConfiguration"></ConfigBulkPipe>
        <v-row class="mb-2">
          <!-- Alerts -->
          <v-alert v-if="emptyNameAlert" type="error" dismissible @input="emptyNameAlert = false" variant="tonal" closable>
            Component Name cannot be empty.
          </v-alert>
          <v-alert v-if="invalidLengthAlert" type="error" dismissible @input="invalidLengthAlert = false" variant="tonal" closable>
            Component Name cannot be longer than 32 characters.
          </v-alert>
          <v-alert v-if="processingErrorAlert" type="error" dismissible @input="processingErrorAlert = false" variant="tonal" closable>
            An error occurred while processing: {{ processingErrorMessage }}
          </v-alert>
        </v-row>
        <v-btn @click="sendingData" color="#023c83">Finish & Sync</v-btn>
      </template>
    </v-stepper>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const route = useRouter();

import MultipleSource from './MultipleSource.vue';
import ConfigBulkPipe from './ConfigBulkPipe.vue';
import Destination from '../NewPipeline/Destination/Destination.vue';

const step = ref(1);
const items = ref(['Define Source', 'Define Destination', 'Configure Pipeline']);
const selectedSource = ref(null);
const selectedDestination = ref(null);
const configurations = ref([]);

const emptyNameAlert = ref(false);
const invalidLengthAlert = ref(false);
const processingErrorAlert = ref(false);
const processingErrorMessage = ref("");

const handleSourceSelected = (source) => {
  selectedSource.value = source;
  step.value = 2;
};

const handleDestinationSelected = (destination) => {
  selectedDestination.value = destination;
  step.value = 3;
};

const handleConfiguration = (configuration) => {
  configurations.value = configuration;
};

const sendingData = () => {
  // Reset alerts
  emptyNameAlert.value = false;
  invalidLengthAlert.value = false;
  processingErrorAlert.value = false;

  // Validate component name
  if (!configurations.value.connectionName) {
    emptyNameAlert.value = true;
    return;
  } else if (configurations.value.connectionName.length > 32) {
    invalidLengthAlert.value = true;
    return;
  }

  const sourceIds = selectedSource.value.map(source => source.id);

  const data = {
    name: configurations.value.connectionName,
    bulk_type: "Sources",
    status: 'Enabled',
    frequency: configurations.value.frequency,
    schedule_type: configurations.value.scheduleType,
    destination_id: selectedDestination.value,
    source_ids: sourceIds
  };

  // Dispatch action to create pipelines
  store.dispatch('setSourceBulkPipeLine', data).then(() => {
    route.push('/pipelines');
  }).catch((error) => {
    processingErrorMessage.value = error.message;
    processingErrorAlert.value = true;
  });
};
</script>
