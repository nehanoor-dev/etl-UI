<template>
    <v-container fluid>
      <v-stepper v-model="step" :items="items" :hide-actions="true">
        <template v-slot:item.1>
            <Source @source-selected="handleSourceSelected" />
        </template>
        <template v-slot:item.2>
          <MultipleDestination
            @destination-selected="handleDestinationSelected">
          </MultipleDestination>


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
  import MultipleDestination from './MultipleDestination.vue';
  import ConfigBulkPipe from './ConfigBulkPipe.vue';
  import Source from '../NewPipeline/source/Source.vue';
  
  const route = useRouter();
  const step = ref(1);
  const items = ref(['Define Source', 'Define Destination', 'Configure Pipeline']);
  const selectedSource = ref(null);
  const selectedDestination = ref(null);
  const configurations = ref([])
  import { useStore } from 'vuex';

  const store = useStore();
  
  
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

  const destinaitonIds = selectedDestination.value.map(source => source.id);
  console.log(configurations.value)

  const data = {
    name:configurations.value.connectionName,
    bulk_type:"Destinations",
    status:'Enabled',
    frequency:configurations.value.frequency,
    schedule_type:configurations.value.scheduleType,
    destination_ids:destinaitonIds,
    source_id:selectedSource.value
  }

  store.dispatch('setDestinationBulkPipeLine',data);

  route.push('/pipelines');  
  
  }
   </script>
  