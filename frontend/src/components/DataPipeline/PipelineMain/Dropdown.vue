<template>
    <v-container fluid>
        <v-row class="fill-height" align="center">
            <v-col lg="8" md="10" sm="12" >
                <v-row >
                    <v-col  >
                        <AllDropdown :drop-down-list="Statuses"></AllDropdown>
                    </v-col>
                    <v-col >
                        <AllDropdown :drop-down-list="scheduleTypes"></AllDropdown>
                    </v-col>
                    <v-col >
                        <AllDropdown :drop-down-list="sources"></AllDropdown>
                    </v-col>
                    <v-col >
                        <AllDropdown :drop-down-list="destinations"></AllDropdown>
                    </v-col>
                </v-row>
            </v-col>
            <v-col >
            </v-col>
        </v-row>
    </v-container>
    

</template>

<script setup>
import { onMounted, ref } from 'vue';
import { defineProps } from 'vue';
import { reactive } from 'vue';
import AllDropdown from './AllDropdown.vue';
import Table from './Table.vue';
import { useStore } from 'vuex';

const store = useStore();
// onMounted(()=>{
//     store.dispatch('getFilters', Statuses, scheduleTypes, sources, destinations)
// })
        const props = defineProps({
            headers: String,
            items: String
        }); 
        const Status = ref(['Enable']);
        const Statuses = ref(['Enable', 'Disable']);

        const scheduleType = ref(['Scheduled']);
        const scheduleTypes = ref(['Mannual', 'Scheduled', 'Cron']);

        const source = ref(['All sources']);
        const sources = ref(['source1', 'source2']);

        const destination = ref(['All Destinations']);
        const destinations = ref(['Destination1', 'Destination2']);

        const filteredConnections = ref([]);

        const filterConnections = () => {
            if (filters.value === 'Enabled Connections') {
                filteredConnections.value = connections.value.filter(
                    (connection) => connection.enable
                );
            } else {
                filteredConnections.value = connections.value;
            }
        };

</script>


<style scoped>


</style>