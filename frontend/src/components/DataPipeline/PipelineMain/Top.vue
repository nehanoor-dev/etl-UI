<template>
    <v-container fluid fill-width>
        <v-row class="fill-height" align="center" justify="space-between">
            <!-- Left Side -->
            <v-col class="ml-2">
                <v-row class="heading">
                    Connections
                </v-row>
                <v-row>
                    <p class="mr-1 text-success " v-if="healthy > 0"> Healthy {{ healthy }}</p>
                    <p class="text-error mr-1" v-if="inactive > 0"> Inactive {{ inactive }}</p>
                    <p style="color: #535461" v-if="paused > 0"> Paused {{ paused }} </p>
                </v-row>
            </v-col>


            <!-- Right Side -->
            <v-col class="d-flex justify-end">
                <Button></Button>
                <BulkButton />
            </v-col>

        </v-row>
    </v-container>

</template>

<script setup>
import Button from './Button.vue';
import BulkButton from './BulkButton.vue';
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