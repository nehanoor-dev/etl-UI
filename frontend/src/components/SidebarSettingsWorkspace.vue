<template>
  <div>
    <div class="text-h5 text-bold">General WorkSpace Setting</div>
    <v-form @submit.prevent="updateSecurity" class="mt-7">
      <span>Workspace Name</span>

      <v-text-field autofocus v-model="fullName" variant="outlined" density="compact"> </v-text-field>

      <v-btn :disabled="!isButtonDisabled" type="submit" color="primary" class="float-right">Save</v-btn>
    </v-form>
  </div>
  <v-divider></v-divider>
</template>

<script setup>
import { ref, watch } from 'vue';

// Define reactive variables for the password fields
const isButtonDisabled = ref(false);
const fullName = ref('Moazzam Akmal');

const updateSecurity = () => {
  console.log('Security settings updated');
  // Add logic to handle the security update
};

/**
 * Watcher to enable the save button if the full name is not empty

 * @param {string} newValue - The new value of fullName
 * @returns {void}
 */
watch(fullName, (newValue) => {
  isButtonDisabled.value = newValue.trim().length > 0;
});
</script>

<!-- <template>
  <div>
    <div class="text-h5 text-bold">General WorkSpace Setting</div>
    <v-form @submit.prevent="handleUpdate" class="mt-7">
      <span>Workspace Name</span>
      <v-text-field autofocus v-model="selectedItem.name" variant="outlined" density="compact" />

      <v-btn :disabled="!workspaceStore.isButtonDisabled" type="submit" color="primary" class="float-right">
        Save
      </v-btn>
    </v-form>
  </div>
</template>

<script setup>
import { useWorkspaceStore } from '@/store/modules/settings-workspace.js';
import { useWorkspaceAddStore } from '@/store/modules/workspace-show.js';
import { storeToRefs } from 'pinia';

const workspaceStore = useWorkspaceStore();
const workspaceAddStore = useWorkspaceAddStore();

const { selectedItem } = storeToRefs(workspaceAddStore);

const handleUpdate = () => {
  if (selectedItem.value) {
    workspaceStore.updateWorkspace(selectedItem.value._id, selectedItem.value.name);
  }
};
</script> -->
