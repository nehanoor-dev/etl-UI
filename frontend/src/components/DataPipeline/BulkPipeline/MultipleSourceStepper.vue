<template>
  <v-container fluid>
    <v-stepper v-model="step" :items="items" :hide-actions="true">
      <template v-slot:item.1>
        <MultipleSource
        @source-selected="handleSourceSelected">
        </MultipleSource>

      </template>
      <template v-slot:item.2>
        <Destination @destination-selected="handleDestinationSelected" />
      </template>
      <template v-slot:item.3>
        <ConfigBulkPipe></ConfigBulkPipe>
       
      </template>
    </v-stepper>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import MultipleSource from './MultipleSource.vue'
import ConfigBulkPipe from './ConfigBulkPipe.vue';
import Destination from '../NewPipeline/Destination/Destination.vue';

const route = useRoute();
const step = ref(1);
const items = ref(['Define Source', 'Define Destination', 'Configure Pipeline']);
const selectedSource = ref(null);
const selectedDestination = ref(null);


const handleSourceSelected = (source) => {
  selectedSource.value = source;
  console.log(selectedSource)
  step.value = 2;
};

const handleDestinationSelected = (destination) => {
  console.log("Hello"+ destination);
  selectedDestination.value = destination;
  step.value = 3;
};
</script>
