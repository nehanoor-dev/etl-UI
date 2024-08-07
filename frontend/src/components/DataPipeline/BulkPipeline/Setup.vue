<template>
    <v-container fluid>
        <v-col >
                <div class="block pa-5 mx-2 mt-5">
                    <p class="ml-5 heading" >Define Source</p>
                    <v-row justify="center">
                        <v-col cols="12" lg="5" md="5" sm="5">
                            <v-btn
                                @click="selectedComponent = 'MultipleSource'"
                                :class="selectedComponent === 'MultipleSource' ? 'selected' : 'notSelected'"
                                class="pa-3 custom-button"
                            >
                                Multiple Source Single Destination
                            </v-btn>
                        </v-col>
                        <v-col cols="12" lg="5" md="5" sm="5">
                            <v-btn
                                @click="selectedComponent = 'MultipleDestination'"
                                :class="selectedComponent === 'MultipleDestination' ? 'selected' : 'notSelected'"
                                class="pa-3 custom-button"
                            >
                                Single Source Multiple Destination
                            </v-btn>
                        </v-col>
                    </v-row>
                </div>
                <component :is="showComponent"></component>
        </v-col>
    </v-container>
</template>

<style scoped>
.selected {
    color: blue;
    border: 1px solid blue;
}
.notSelected {
    border: 1px solid black;
}

.custom-button {
    width: 80vh; 
    height: 14vh;  
    font-size: 2vh;
    text-transform: capitalize;
    margin: 10px; 
}
.custom-button:hover {
    color: blue;
    border: 1px solid blue;
    transition: .4s;
}
.block {
    border-radius: 10px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
}
</style>

<script setup>
import { ref, computed } from 'vue';
import MultipleDestination from './MultipleDestination.vue';
import MultipleSource from './MultipleSource.vue';

const components = {
    MultipleDestination,
    MultipleSource,
};

const selectedComponent = ref('MultipleSource');
const showComponent = computed(() => components[selectedComponent.value]);
</script>
