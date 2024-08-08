<template>
    <v-container fluid >
        <v-row class="fill-height" align="center" justify="space-between">
            <!-- Left Side -->
            <v-col cols='6' class="ml-2">
                <v-row class="heading">
                    Connections
                </v-row>
            </v-col>

            <!-- Right Side -->
            <v-col class="d-flex justify-end">
                <v-btn @click="goToMutilpleSourceStepper"  elevation="2" size="large" rounded="lg">
                    <v-icon left>mdi-plus</v-icon>
                    Multiple Source ?
                </v-btn>
            </v-col>

            <v-col class="d-flex justify-end">
                <v-btn @click="newPipeline"  elevation="2" size="large" rounded="lg">
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