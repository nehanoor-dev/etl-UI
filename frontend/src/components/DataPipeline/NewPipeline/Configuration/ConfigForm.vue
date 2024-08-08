<template>
    <v-row justify="center" class="custom-style justify-center pa-5">

    <v-col  class="ma-10">
        <v-row>
            <v-col>
                <p class="headingFont">Connection Name</p>
                <span class="font">Name of your Connection</span>
            </v-col>
            <v-text-field v-model=connectionName variant="outlined" width="40px" ></v-text-field>
        </v-row>
        <v-row>
            <v-col>
                <p class="headingFont">Schedule Type</p>
                <span class="font">How you want your sync to be triggered?</span>
            </v-col>
            <v-select v-model="selectedScheduleType" :items=scheduleType width="40px" variant="outlined"></v-select>
        </v-row>
        <v-row>
            <v-col>
                <p class="headingFont">Replication Frequency</p>
                <span class="font">How often your data will sync to your destinaiton</span>
            </v-col>
            <v-select v-model=replicationFrequencies[0] :items=replicationFrequencies variant="outlined" width="40px" ></v-select>
        </v-row>
       
        <v-row class="mt-10" justify="end">
            <v-btn @click="syncing" color="primary"  >Finish & Sync</v-btn>
        </v-row>
        </v-col>

    </v-row>

</template>
<script setup>
import { ref } from 'vue';
import router from '@/router';
import { useStore } from 'vuex';

const store = useStore();

const connectionName = ref("Custom Connection")
const selectedScheduleType = ref("Schedule")
const scheduleType = ref(['Schedule', 'Manual', 'Cron'])
const frequency = ref("Enter")
const replicationFrequencies = ['Every hour', 'Every 2 hours', 'Every 6 hours', 'Every 8 hours', 'Every 12 hours', 'Every 24 hours'];


const props = defineProps({
    sourceId: String,
    destinationId: String
})

const syncing = ()=> {
    console.log(props.destinationId)
    const data = {
    name: connectionName.value,
    source_connector_id: props.sourceId,
    destination_connector_id: props.destinationId,
    status: "enabled",
    frequency: frequency.value,
    schedule_type: selectedScheduleType.value.toLowerCase()
  };
    store.dispatch('createPipelines' ,data )

    //router.push('/loader')
}

</script>
<style scoped>

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