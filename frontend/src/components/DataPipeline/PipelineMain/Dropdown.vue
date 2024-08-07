<template>
    <v-container fluid>
        <v-row class="fill-height" align="center">
            <v-col lg="8" md="10" sm="12" >
                <v-row >
                    <v-col  >
                        <AllDropdown :drop-down-list="connections"></AllDropdown>
                    </v-col>
                    <v-col >
                        <AllDropdown :drop-down-list="statuses"></AllDropdown>
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

<script>
import { ref } from 'vue';
import { defineProps } from 'vue';
import { reactive } from 'vue';
import AllDropdown from './AllDropdown.vue';
import Table from './Table.vue';

export default {

    setup() {

        const props = defineProps({
            headers: String,
            items: String
        }); 
        const connection = ref(['All Connections']);
        const connections = ref(['All Connections', 'Enabled Connections', 'Disable Connection']);

        const status = ref(['All Statuses']);
        const statuses = ref(['Healthy', 'Failed', 'Running']);

        const source = ref(['All sources']);
        const sources = ref(['source1', 'source2']);

        const destination = ref(['All Destinations']);
        const destinations = ref(['Destination1', 'Destination2']);

       
        // const connections = ref([
        //     { name: 'Connection 1', enable: true },
        //     { name: 'Connection 2', enable: false },
        //     { name: 'Connection 3', enable: true },
        // ]);

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

        return {
            source,
            sources,
            destination,
            destinations,
            status,
            statuses,
            connection,
            connections,
            filteredConnections,
            filterConnections,
        };
    },

};
</script>


<style scoped>


</style>