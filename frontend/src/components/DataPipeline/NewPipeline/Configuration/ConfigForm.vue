<template>
    <v-row class="custom-style justify-center pa-5">

    <v-col cols="12" lg="5" md="5" class="mt-5">
        <v-row>
            <v-col>
                <p class="headingFont">Connection Name</p>
                <span class="font">Name of your Connection</span>
            </v-col>
            <v-text-field :model-value=connectionName variant="outlined" width="40px" readonly></v-text-field>
        </v-row>
        <v-row>
            <v-col>
                <p class="headingFont">Replication Frequency</p>
                <span class="font">How often your data will sync to your destinaiton</span>
            </v-col>
            <v-text-field :model-value=connectionName variant="outlined" width="40px" readonly></v-text-field>
        </v-row>
        <v-row>
            <v-col>
                <p class="headingFont">Schedule Type</p>
                <span class="font">How you want your sync to be triggered?</span>
            </v-col>
            <v-select v-model="scheduleType[0]" :items=scheduleType width="40px" variant="outlined"></v-select>
        </v-row>
        </v-col>
        <v-col cols="12" lg="5" md="5" class="pa-5">
            <v-btn @click="syncing" color="primary" >Finish & Sync</v-btn>
        </v-col>
    </v-row>

</template>
<script setup>
import { ref } from 'vue';
import router from '@/router';

const connectionName = ref("Custom Connection")
const scheduleType = ref(['Schedule', 'Manual', 'Corn'])
const DestNamespace = ref(null)

const syncing = ()=> {
    router.push('/loader')
}

</script>
<style scoped>
.custom-style {
    column-gap: 100px;
 }
.radioBorder {
    border: 1px solid grey;
    height: 100px;
}
.font {
    font-size: 11px;
    color: grey;
}
.headingFont{
    font-size: 15px;
}
</style>