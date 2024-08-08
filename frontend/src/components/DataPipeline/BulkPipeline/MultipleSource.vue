<template>
  <v-container fluid>
    <div class="my-2">
      <h3 class="heading">Select Multiple Sources</h3>
    </div>
    <BulkInputTable
      :table-list="sourcesData"
      @update-selected="updateSelectedSources"
    />
    <v-row align="end">
      <v-btn @click="sendSelectedSources">
        Next
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
const emit = defineEmits(['source-selected']);

onBeforeMount(() => {
    store.dispatch('fetchSources');
});
const sources = computed(() => store.state.source.sources || []);
const selectedSources = ref([])

const sourcesData = computed(() =>
    (sources.value || []).map(source => ({
        id: source._id,
        name: source.name,
        connector: source.name,
        image: source.image,
        lastUpdated: source.updated_at,
    }))
);

const updateSelectedSources = (sources) =>{
    selectedSources.value=sources;
}

const sendSelectedSources = (sources) =>{
  emit('source-selected', selectedSources.value);
}


</script>
