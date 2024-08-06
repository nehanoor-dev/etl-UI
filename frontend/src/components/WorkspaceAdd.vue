<template>
  <v-dialog :model-value="opendailoge" width="auto" activator="parent" max-width="500">
    <template v-slot:default="{ isActive }">
      <v-card rounded="lg" min-width="500">
        <v-card-title>
          <v-btn icon="mdi-close" class="float-right" variant="text" @click="closeDailog"></v-btn>
          <div class="text-subtitle text-medium-emphasis text-center mt-7">Add New Workspace</div>
        </v-card-title>

        <v-card-text class="mt-2">
          <div class="mb-1">Workspace Name</div>
          <v-text-field autofocus v-model="inputValue" class="mb-2" variant="outlined" density="compact"></v-text-field>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="my-2 d-flex justify-end">
          <v-btn class="text-none" rounded="xl" text="Cancel" @click="closeDailog"></v-btn>

          <v-btn
            :disabled="!isSaveButtonEnabled"
            class="text-none"
            color="primary"
            rounded="lg"
            text="Add"
            variant="flat"
            @click="isActive.value = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue';

// Define a reactive variable for the input value
const inputValue = ref('');

// Define a reactive variable to control the save button's enabled state
const isSaveButtonEnabled = ref(false);

// Define emit for closeDialog event
const emit = defineEmits(['closeDailog']);

// Define props for the component
const props = defineProps({
  opendailoge: Boolean,
});

/**
 * Function to emit the closeDialog event
 
 * @param {none}
 * @returns {void}
 */
function closeDailog() {
  emit('closeDailog');
}

/**
 * Watcher to enable the save button if the input value is not empty
 * @param {string} newValue - The new value of inputValue
 * @returns {void}
 */
watch(inputValue, (newValue) => {
  isSaveButtonEnabled.value = newValue.trim().length > 0;
});

</script>
