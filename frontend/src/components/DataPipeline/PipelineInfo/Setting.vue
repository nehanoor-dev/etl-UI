<template>
    <v-container>
      <v-row>
        <v-col>
          <div>Connection Name</div>
          <div class="">Name for your connection</div>
        </v-col>
        <v-col>
          <v-text-field label="" v-model="connectionName" outlined></v-text-field>
        </v-col>
      </v-row>
  
      <v-row>
        <v-col>
          <div>Schedule type</div>
          <div class="">How you want your syncs to be triggered</div>
        </v-col>
        <v-col>
          <v-select label="" v-model="scheduleType1" :items="scheduleTypes" outlined dense></v-select>
        </v-col>
      </v-row>
  
      <v-row v-if="scheduleType1 == 'Scheduled'">
        <v-col>
          <div>Replication frequency</div>
          <div class="">How often your data will sync to your destination</div>
        </v-col>
        <v-col>
          <v-select label="" v-model="replicationFrequency" :items="replicationFrequencies" outlined dense></v-select>
        </v-col>
      </v-row>
  
      <v-row>
        <v-col>
          <div>Delete Pipeline</div>
          <div>This cannot be undone without a full re-sync.</div>
        </v-col>
        <v-col>
          <!-- Button to trigger the delete confirmation dialog -->
          <v-btn class="delete" @click="showDeleteDialog">Delete Pipeline</v-btn>
        </v-col>=
      </v-row>
  
      <v-row>
        <v-col>
          <v-btn color="primary" @click="saveChanges">Save changes</v-btn>
        </v-col>
        <v-col align="end">
          <v-btn color="light" @click="cancelChanges">Cancel</v-btn>
        </v-col>
      </v-row>
  
      <!-- Delete Confirmation Dialog -->
      <v-dialog v-model="showDelete"  max-width="510">
        <v-card height="200" class="pt-10 pl-2">
          <v-card-title class="headline">Are you sure you want to delete the pipeline?</v-card-title>
          <v-card-actions class="mt-5 pt-10">
            <v-spacer></v-spacer>
            <v-btn color="grey" @click="showDelete = false">Discard</v-btn>
            <v-btn color="red" @click="confirmDelete">Yes</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  import { useRouter  } from 'vue-router';
  
  const store = useStore();
  const route = useRouter();
  
  const props = defineProps({
    pipelineName: String,
    scheduleType: String,
    frequency: String,
    id: String,
    dialogVisible: Boolean
  });
  
  const connectionName = ref(props.pipelineName);
  const scheduleType1 = ref(props.scheduleType);
  const replicationFrequency = ref(props.frequency);
  const showDelete = ref(false);
  
  const scheduleTypes = ['Scheduled', 'Manual', 'Cron'];
  const replicationFrequencies = ['Every hour', 'Every 2 hours', 'Every 6 hours', 'Every 8 hours', 'Every 12 hours', 'Every 24 hours'];
  
  const emit = defineEmits('dialog');
  
  const saveChanges = () => {
    const payload = {
      id: props.id,
      name: connectionName.value,
      scheduleType: scheduleType1.value,
      frequency: replicationFrequency.value,
    };
    store.dispatch('saveChanges', payload);
    emit('dialog', false);
  };
  
  const cancelChanges = () => {
    console.log('Changes canceled');
  };
  
  const confirmDelete = () => {
    const pipelineId = props.id;
    store.dispatch('deletePipeline',pipelineId)
    console.log('Pipeline deleted');
    showDelete.value = false;
    emit('dialog', false);
    route.push('/pipelines')

  };
  const showDeleteDialog = () => {
  console.log('Delete dialog triggered'); // Add this for debugging
  showDelete.value = true;
};
  </script>
  
  <style scoped>
  .sub-label {
    font-size: 14px;
    color: #888;
    margin-top: -10px;
    margin-bottom: 10px;
  }
  
  .delete {
    background-color: #fb375e;
    color: white;
    width: 50vh;
  }
  </style>
  