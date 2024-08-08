<template>
  <v-container fluid>
    <v-stepper v-model="step" :items="items" :hide-actions="true">
      <template v-slot:item.1>
        <Source @source-selected="handleSourceSelected" />
      </template>
      <template v-slot:item.2>
        <Destination @destination-selected="handleDestinationSelected" />
      </template>
      <template v-slot:item.3>
        <ConfigMain
        :source-id="selectedSource"
        :destination-id="selectedDestination"
        >
        </ConfigMain>
      </template>
    </v-stepper>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import Source from './source/Source.vue';
import Destination from './Destination/Destination.vue';
import ConfigMain from './Configuration/ConfigForm.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const step = ref(1);
const items = ref(['Define Source', 'Define Destination', 'Configure Pipeline']);
const selectedSource = ref(null);
const selectedDestination = ref(null);

const handleSourceSelected = (source) => {
  selectedSource.value = source;
  step.value = 2;
};

const handleDestinationSelected = (destination) => {
  selectedDestination.value = destination;
  step.value = 3;
};
</script>
