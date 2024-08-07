<template>
    <v-container>
        <v-btn @click="showComponent = 'ExistingDestiination'">Select an Existing Destination</v-btn>
        <v-btn @click="showComponent = 'NewDestination'">Set up a new Destination</v-btn>

        <component :is="currentComponent"></component>
    </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';
import ExistingDestiination from './ExistingDestiination.vue';
import NewDestination from './NewDestination.vue';

const showComponent = ref('ExistingDestiination');

const components = {
    ExistingDestiination,
    NewDestination
}

const currentComponent = computed(() => components[showComponent.value]);

</script>
