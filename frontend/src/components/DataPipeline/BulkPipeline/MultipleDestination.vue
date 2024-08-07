<template>
    <v-container fluid>

        <div class="my-2">
            <p class="heading"> Select Source</p>
          </div>

        <div class="my-2">
            <p class="heading"> Select Multiple Destination</p>
          </div>
        <BulkInputTable
          :table-list="destinationData"
        />
      </v-container>
</template>
<script setup>
import BulkInputTable from './BulkInputTable.vue';
import { useStore } from 'vuex';
import { ref, onBeforeMount, computed } from 'vue';


const store = useStore();

onBeforeMount(() => {
  store.dispatch('fetchSources');
  store.dispatch('fetchDestinations')
});


const destinations = computed(() => store.state.destination.destination || []);

const destinationData = computed(() => 
  (destinations.value || []).map(destination => ({
    name: destination.name,
    connector: destination.connector.name,
    image:destination.connector.image,
    connections: destination.connectionCount,
    selected: false,
  }))
);


</script>
<style scoped>
.custom-style {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    border-radius: 10px;
    padding: 50px;
}
</style>