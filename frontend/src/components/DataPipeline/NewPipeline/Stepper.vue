<template>
   
        <v-stepper v-model="step" :items="items" show-actions>
            <template v-slot:item.1>
                <Source />
            </template>
            <template v-slot:item.2>
                <Destination />
            </template>
            <template v-slot:item.3>
                <ConfigMain />
            </template>
        </v-stepper>
   
       
    

</template>
<script setup>

import { ref } from 'vue';
import Source from './source/Source.vue';
import Destination from './Destination/Destination.vue';
import ConfigMain from './Configuration/ConfigMain.vue';
import { useRoute } from 'vue-router';


const route = useRoute()


     const name = ref(route.name.value)

console.log('stepper')
const step = ref(1);
const items = ref(['Define Source', 'Define Destination', 'Configure Pipeline'])
const items2 = ref(['Bulk Pipeline Setup', 'Configure Pipeline'])

</script>