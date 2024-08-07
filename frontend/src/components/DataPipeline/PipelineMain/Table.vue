<template>
  <v-data-table 
  :custom-filter="filterOnlyCapsText" 
  :headers="headers" 
  :items="filteredPipelines" 
  :search="search"
    item-value="name">

     <!-- Adding a search bar -->
    <template v-slot:top>
      <v-text-field 
        v-model="search" 
        class="pa-2" 
        label="Search" 
        append-icon="mdi-magnify">
    </v-text-field>
    </template>

    <!--  Accessing each row slot in order to make them clickable  -->
    <template v-slot:item="{ item }">
      <tr @click="navigateToDetail(item)">
        <td>
          <v-icon
            class="mr-3 rounded-icon"
            :style="{ color: 'white', backgroundColor: '#329C47' }"
          >
            {{ getStatusIcon(item.status) }}
          </v-icon>
          <span class="status-text">{{ item.name }}</span>
        </td>

        <td>
          <v-icon class="mr-2"
          >
              <v-img
              class="rounded-icon"
              :src="'data:image/png;base64,' + item.sourceImage"
              height="20"
              width="20"
            ></v-img>
          </v-icon>
            <span class="status-text">{{ item.source }}</span>
        </td>

        <td>
          <v-icon class="mr-2"
          >
              <v-img
              class="rounded-icon"
              :src="'data:image/png;base64,' + item.destinationImage"
              height="20"
              width="20"
            ></v-img>
          </v-icon>
        <span class="status-text">{{ item.destination }}</span>
        </td>
        <td>{{item.scheduleType + item.syncType }}</td>
        <td>{{ item.lastSync }}</td>
        <td>{{ item.status }}</td>
        <td>
          <v-icon @click.stop="showDeleteDialog(item)" class="mr-2" color="red">
            mdi-delete
          </v-icon>
        </td>
      </tr>
    </template>

     <!-- Status Column Template -->
    <!-- <template v-slot:item.status="{ item }">
      <v-select
        :items="statusOptions"
        v-model="item.status"
        @change="updateStatus(item)"
        dense
        hide-details
        class="custom-select"
      />
    </template> -->
  </v-data-table>
  
  <v-dialog v-model="deleteDialog" max-width="500" >
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
import { ref, computed, onMounted , onBeforeMount} from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter();

const deleteDialog = ref(false);
const pipelineToDelete = ref(null);


const search = ref('');

const headers = ref([
  { title: 'Pipeline Name', align: 'start', key: 'name' ,},
  { title: 'Source Name', align: 'start', key: 'source' },
  { title: 'Destination Name', align: 'start', key: 'destination' },
  { title: 'Sync Type', align: 'start', key: 'syncType' },
  { title: 'Last Sync', align: 'start', key: 'lastSync' },
  { title: 'Status', align: 'start', key: 'status' },
]);

onBeforeMount(() => {
  store.dispatch('fetchPipelines');
});
  

const pipelines = computed(() => store.state.pipelines || []);

const filteredPipelines = computed(() =>
  (pipelines.value || []).map(pipeline => ({
    id: pipeline.id, 
    name: pipeline.name,
    source: pipeline.source_connector.name, 
    sourceImage: pipeline.source_connector.image,// assuming these keys from your response
    destination: pipeline.destination_connector.name,
    destinationImage: pipeline.destination_connector.image,
    scheduleType: pipeline.schedule_type,
    syncType: pipeline.frequency,
    lastSync: pipeline.last_sync,     // example key, adjust as needed
    status: pipeline.status,
  }))
);
console.log(filteredPipelines);

const getStatusIcon = (status) => {
  switch (status) {
    case 'enabled':
      return 'mdi-check';
    case 'disabled':
      return 'mdi-close';
    default:
      return 'mdi-equal';
  }
};

const showDeleteDialog = item => {
  pipelineToDelete.value = item;
  deleteDialog.value = true;
};

const closeDialog = () => {
  deleteDialog.value = false;
  pipelineToDelete.value = null;
};

const confirmDelete = () => {
  store.dispatch('deletePipeline', pipelineToDelete.value.id);
  console.log(pipelineToDelete.value.id);
  closeDialog();
};

const filteredItems = computed(() => {
  return items.value.filter((item) => filterText(item.name, search.value));
});


const navigateToDetail  = (item) =>{
  router.push({ name: 'PipelineInfo', params: { id: item.id } })
}


const filterText = (value, query) => {
  return value != null &&
    query != null &&
    typeof value === 'string' &&
    value.toString().toLocaleUpperCase().indexOf(query.toUpperCase()) !== -1;
};



</script>


<style scoped>

.rounded-icon {
  border-radius: 50%;
  padding: 12px; /* Adjust padding for size */
}



</style>