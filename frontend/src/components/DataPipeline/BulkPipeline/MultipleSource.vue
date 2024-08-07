<template>
  <v-container fluid>
    <div class="my-2">
      <h3 class="heading">Select Multiple Sources</h3>
    </div>
    <BulkInputTable
      :table-list="sourcesData"
      @update-selected="updateSelectedSources"
    />

    <div class="my-2">
      <p class="heading"> Select Destination</p>
    </div>

    <v-row justify="end">
      <v-btn @click="BulkPipeline" class="custom-button" elevation="2" size="large" rounded="lg">
        <v-icon left>mdi-plus</v-icon>
        BulkPipeline Connection
      </v-btn>
    </v-row>
  </v-container>
</template>

<script setup>
import BulkInputTable from './BulkInputTable.vue';
import CustomDropDown from './CustomDropDown.vue';
import { ref, onBeforeMount, computed, inject } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useStore();

onBeforeMount(() => {
  store.dispatch('fetchSources');
  store.dispatch('fetchDestinations')
});

const selectedSources = ref([]);

const updateSelectedSources = (newSelectedSources) => {
  selectedSources.value = newSelectedSources;
  console.log(selectedSources.value);
};

const sources = computed(() => store.state.source.sources || []);

const sourcesData = computed(() => 
  (sources.value || []).map(source => ({
    name: source.name,
    connector: source.connector,
    image:"",
    connections: source.connections,
    selected: false,
  }))
);

const destinations = [
            {
                name: "myDestination",
                connector: {name:"MyConnector", image:""},
                connectionCount: "0 connections",
            },
            {
                name: "myDestination",
                connector: {name:"MyConnector", image:""},
                connectionCount: "6 connections",
            },
        ];

        const BulkPipeline = () => {
          
  router.push('/bulkconfig');
};


</script>
