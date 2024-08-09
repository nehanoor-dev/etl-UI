<template>
    <v-container fluid>
        <div class="my-2">
            <p class="heading"> Select Multiple Destination</p>
          </div>
        <BulkInputTable
        :table-list="destinationData"
        @update-selected="updateSelectedDestinations"
        />
        <div class="mb-4">
          <v-alert
          v-if="showMessage"
          type="error"
          dismissible
          width="350px"
          variant="tonal"
        >
          Please select at least one source.
        </v-alert>
      </div>
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
const showMessage = ref(false);

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
const isSelectedDestinationEmpty = computed(() => selectedDestination.value.length === 0);

const sendSelectedDestination = (sources) =>{
  if (isSelectedDestinationEmpty.value) {
    showMessage.value = true;
  } else {
    showMessage.value = false;
    emit('destination-selected', selectedDestination.value);
  }
}

</script>
<style scoped>
.custom-style {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    border-radius: 10px;
    padding: 50px;
}
</style>