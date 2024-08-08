<template>
  <v-data-table 
    :headers="headers" 
    :items="filteredPipelines" 
    :search="search"
    item-value="name">
    <template v-slot:top>
      <v-text-field 
        v-model="search" 
        class="pa-2" 
        label="Search" 
        append-icon="mdi-magnify">
      </v-text-field>
    </template>

    <template v-slot:item="{ item }">
      <tr  @click="navigateToDetail(item)" class="hover">
        <td>
          <v-icon class="mr-3 rounded-icon" :style="{ color: 'white', backgroundColor: '#329C47' }">
            {{ getStatusIcon(item.status) }}
          </v-icon>
          <span class="status-text">{{ item.name }}</span>
        </td>
        <td>
          <v-icon class="mr-2">
            <v-img class="rounded-icon" :src="'data:image/png;base64,' + item.sourceImage" height="20" width="20"></v-img>
          </v-icon>
          <span class="status-text">{{ item.source }}</span>
        </td>
        <td>
          <v-icon class="mr-2">
            <v-img class="rounded-icon" :src="'data:image/png;base64,' + item.destinationImage" height="20" width="20"></v-img>
          </v-icon>
          <span class="status-text">{{ item.destination }}</span>
        </td>
        <td>{{ item.scheduleType + ' ' + item.syncType }}</td>
        <td>{{ item.lastSync }}</td>
        <td>{{ item.status }}</td>
        <td>
          <v-icon @click.stop="showDeleteDialog(item)" class="mr-2" color="red">
            mdi-delete
          </v-icon>
        </td>
      </tr>
    </template>
  </v-data-table>

  <v-dialog v-model="deleteDialog" max-width="500">
    <v-card class="pa-2">
      <v-card-title class="headline">Confirm Delete</v-card-title>
      <v-card-text>Are you sure you want to delete this pipeline?</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="confirmDelete">Delete</v-btn>
        <v-btn color="grey darken-1" text @click="closeDialog">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, computed, watch, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter();

const deleteDialog = ref(false);
const pipelineToDelete = ref(null);
const search = ref('');

// Headers for the data table
const headers = ref([
  { title: 'Pipeline Name', align: 'start', key: 'name' },
  { title: 'Source Name', align: 'start', key: 'source' },
  { title: 'Destination Name', align: 'start', key: 'destination' },
  { title: 'Sync Type', align: 'start', key: 'syncType' },
  { title: 'Last Sync', align: 'start', key: 'lastSync' },
  { title: 'Status', align: 'start', key: 'status' },
]);

// Fetch pipelines on mount
onBeforeMount(() => {
  store.dispatch('fetchPipelines');
});

// Get pipelines from Vuex store
const pipelines = computed(() => store.state.pipelines || []);

// Filtered pipelines based on search query and other filters
const filteredPipelines = computed(() => {
  const filters = store.state.filters || {};
  return pipelines.value
    .map(pipeline => ({
      id: pipeline.id,
      name: pipeline.name,
      source: pipeline.source_connector?.name || 'Unknown',
      sourceImage: pipeline.source_connector?.image || '',
      destination: pipeline.destination_connector?.name || 'Unknown',
      destinationImage: pipeline.destination_connector?.image || '',
      scheduleType: pipeline.schedule_type,
      syncType: pipeline.frequency,
      lastSync: pipeline.last_sync,
      status: pipeline.status,
    }))
    .filter(pipeline => {
      const matchesSearch = filterText(pipeline.name, search.value);
      const matchesFilters = Object.keys(filters).every(key => {
        return !filters[key] || pipeline[key] === filters[key];
      });
      return matchesSearch && matchesFilters;
    });
});

// Get status icon based on pipeline status
const getStatusIcon = (status) => {
  switch (status) {
    case 'Enabled':
      return 'mdi-check';
    case 'Disabled':
      return 'mdi-close';
    default:
      return 'mdi-equal';
  }
};

// Show delete dialog
const showDeleteDialog = (item) => {
  pipelineToDelete.value = item;
  deleteDialog.value = true;
};

// Close delete dialog
const closeDialog = () => {
  deleteDialog.value = false;
  pipelineToDelete.value = null;
};

// Confirm delete action
const confirmDelete = () => {
  store.dispatch('deletePipeline', pipelineToDelete.value.id);
  closeDialog();
};

// Navigate to detail page
const navigateToDetail = (item) => {
  router.push({ name: 'PipelineInfo', params: { id: item.id } });
};

// Filter text based on search query
const filterText = (value, query) => {
  return value != null &&
    query != null &&
    typeof value === 'string' &&
    value.toString().toLocaleUpperCase().indexOf(query.toUpperCase()) !== -1;
};

// Watch for changes in filters and refetch data
watch(() => store.state.filters, () => {
  store.dispatch('getFilters');
}, { deep: true });

</script>

<style scoped>
.rounded-icon {
  border-radius: 50%;
  padding: 12px;
}
.hover:hover {
        background-color: #ecebff;
        transition: .3s;
        cursor: pointer;
    }
</style>
