<template>
    <v-container fluid fill-width>
        <v-row class="fill-height" align="center" justify="space-between">
            <!-- Left Side -->
            <v-col class="ml-2">
                <v-row class="heading">
                    Connections
                </v-row>
                <v-row>
                 
                </v-row>
            </v-col>


            <!-- Right Side -->
            <v-col class="d-flex justify-end">
                <Button></Button>
            </v-col>

        </v-row>
    </v-container>

</template>

<script setup>
import Button from './Button.vue';
import { ref } from 'vue';
const healthy = ref(9);
const inactive = ref(4);
const paused = ref(1);

const Newpipeline = () => {
      router.push({ name: 'Stepper' });
    };

</script>


<style scoped>
.heading {
    color: #023C83;
    font-weight: bold;
    font-size: 30px;
}

p {
    font-size: 14px;
}

</style>