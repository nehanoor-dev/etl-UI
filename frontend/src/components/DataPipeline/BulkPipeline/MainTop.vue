<template>
    <v-container fluid>
        <v-row class="fill-height" align="center" justify="space-between">
            <!-- Left Side -->
            <v-col cols='2' lg="5" class="ml-2">
                <v-row class="heading">
                    Connections
                </v-row>
            </v-col>

            <!-- Right Side -->
            <v-col class="d-flex justify-end">
                <v-btn @click="goToMutilpleSourceStepper" elevation="2" size="large" rounded="lg"
                    style="font-size: 14px; color: #023C83; border: 1px solid #023C83; text-transform: capitalize;">
                    <v-icon left>mdi-plus</v-icon>
                    Multiple Source ?
                </v-btn>
            </v-col>

            <v-col class="d-flex justify-end">
                <v-btn @click="goToMutilpleDestinationStepper" elevation="2" size="large" rounded="lg"
                    style="font-size: 14px; color: #023C83;border: 1px solid #023C83; text-transform: capitalize;">
                    <v-icon left>mdi-plus</v-icon>
                    Multiple Destination ?
                </v-btn>
            </v-col>

        </v-row>
    </v-container>

</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToMutilpleSourceStepper = () => {
    router.push({ name: 'NewSourceBulk' });
};

const goToMutilpleDestinationStepper = () => {
    router.push({ name: 'NewDestinationBulk' });
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