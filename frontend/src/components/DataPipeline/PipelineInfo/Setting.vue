<template>
    <v-container>
        <v-row>
            <v-col>
                <div>Connection Name</div>
                <div class="">Name for your connection</div>
            </v-col>
            <v-col>
                <v-text-field label="" v-model="connectionName" outlined ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <div>Schedule type</div>
                <div class="">How you want your syncs to be triggered</div>

            </v-col>
            <v-col>
                <v-select label="" v-model="scheduleType1" :items="scheduleTypes" outlined dense></v-select>

            </v-col>
        </v-row>
        <v-row v-if="scheduleType1 == 'Scheduled'">
            <v-col>
                <div>Replication frequency</div>
                <div class="">How often your data will sync to your destination</div>
            </v-col>
            <v-col>
                <v-select label="" v-model="replicationFrequency" :items="replicationFrequencies" outlined
                    dense></v-select>
            </v-col>
        </v-row>
      

        <v-row>
            <v-col>
                <div>Delete Pipeline</div>

            </v-col>
            <v-col>
                <v-btn class="delete">Delete</v-btn>

            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn color="primary" @click="saveChanges">Save changes</v-btn></v-col>
            <v-col align="end"> <v-btn color="light" @click="cancelChanges">Cancel</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store=useStore();

const props=defineProps({
    pipelineName : String,
    scheduleType : String,
    frequency: String,
    id:String

});
const connectionName = ref(props.pipelineName);
const scheduleType1 = ref(props.scheduleType);
const replicationFrequency = ref(props.frequency);

console.log(props.scheduleType)
console.log(props.frequency)



const scheduleTypes = ['Scheduled', 'Manual', 'Cron'];
const replicationFrequencies = ['Every hour', 'Every 2 hour', 'Every 6 hours', 'Every 8 hour', 'Every 12 hours', 'Every 24 hours'];





console.log(scheduleTypes[0])

const saveChanges = () => {
    // Your save logic here
    console.log(connectionName.value);
    const payload = {
        id: props.id,
        connectionName:connectionName.value,
        scheduleType1:scheduleType1.value,
        replicationFrequency:replicationFrequency.value,
      };
    store.dispatch('saveChanges',payload )
    // console.log('Changes saved:', {
    //     connectionName: connectionName.value,
    //     scheduleType: scheduleType.value,
    //     replicationFrequency: replicationFrequency.value,
    // });
};

const cancelChanges = () => {
    // Your cancel logic here
    console.log('Changes canceled');
};
</script>

<style scoped>
.sub-label {
    font-size: 14px;
    color: #888;
    margin-top: -10px;
    margin-bottom: 10px;
}

.delete {
    background-color: #fb375e;
    color: white;
    width: 50vh;
}
</style>