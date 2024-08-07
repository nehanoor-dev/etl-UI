<template>
    <v-container>
        <v-btn @click="showComponent = 'ExistingSource'">Select an Existing Source</v-btn>
        <v-btn @click="showComponent = 'NewSource'">Set up a new Source</v-btn>

        <component :is="currentComponent"></component>
    </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';
import ExistingSource from '../../BulkPipeline/BulkInputTable.vue';
import NewSource from './NewSource.vue';

 const showComponent = ref('ExistingSource');
const components = {
    ExistingSource,
    NewSource
}

const currentComponent = computed(() => components[showComponent.value]);

</script>
