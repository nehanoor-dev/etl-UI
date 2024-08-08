<template>
    <v-container fluid>
        <div class="my-2">
            <p class="heading"> Select Multiple Destination</p>
          </div>
        <BulkInputTable
        :table-list="destinationData"
        @update-selected="updateSelectedDestinations"
        />
        <v-row align="end">
          <v-btn @click="sendSelectedDestination">
            Next
          </v-btn>
        </v-row>
      </v-container>
</template>
<script setup>
import BulkInputTable from './BulkInputTable.vue';
import { useStore } from 'vuex';
import { ref, onBeforeMount, computed } from 'vue';


const store = useStore();
const emit = defineEmits(['destination-selected']);

onBeforeMount(() => {
  store.dispatch('fetchDestinations')
});


const destinations = computed(() => store.state.destination.destination || []);
const selectedDestination = ref([])
console.log(destinations)
const destinationData = computed(() => 
  (destinations.value || []).map(destination => ({
        id: destination ._id,
        name: destination .name,
        connector: destination .name,
        image: destination .image,
        lastUpdated: destination .updated_at,
  }))
);

const updateSelectedDestinations = (destinations) =>{
    selectedDestination.value=destinations;
}

const sendSelectedDestination = (sources) =>{
  emit('destination-selected', selectedDestination.value);
}

</script>
<style scoped>
.custom-style {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    border-radius: 10px;
    padding: 50px;
}
</style>