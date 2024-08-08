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
        <ConfigBulkPipe
        @configuration-bulk="handleConfiguration"
        ></ConfigBulkPipe>
          <v-btn @click="sendingData" color="primary"  >Finish & Sync</v-btn>
      </template>
    </v-stepper>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; 
import { useStore } from 'vuex';

const store = useStore();

import MultipleSource from './MultipleSource.vue'
import ConfigBulkPipe from './ConfigBulkPipe.vue';
import Destination from '../NewPipeline/Destination/Destination.vue';

const route = useRouter();
const step = ref(1);
const items = ref(['Define Source', 'Define Destination', 'Configure Pipeline']);
const selectedSource = ref(null);
const selectedDestination = ref(null);
const configurations = ref([])


const handleSourceSelected = (source) => {
  selectedSource.value = source;
  step.value = 2;
};

const handleDestinationSelected = (destination) => {
  selectedDestination.value = destination;
  step.value = 3;
};

const handleConfiguration = (configuration) => {
  configurations.value=configuration
};

const sendingData = () =>{
  const sourceIds = selectedSource.value.map(source => source.id);
  console.log(configurations.value)

  const data = {
    name:configurations.value.connectionName,
    bulk_type:"Sources",
    status:'Enabled',
    frequency:configurations.value.frequency,
    schedule_type:configurations.value.scheduleType,
    destination_id:selectedDestination.value,
    source_ids:sourceIds
  }

  store.dispatch('setSourceBulkPipeLine',data);
  route.push('/pipelines');  


}
 </script>
