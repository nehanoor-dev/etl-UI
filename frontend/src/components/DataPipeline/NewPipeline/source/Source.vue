<template>
    <v-container>
        <v-row justify="end">
            <v-btn @click="BulkPipeline" elevation="1" size="small" rounded="lg" class="pa-2">
                <v-icon left>mdi-plus</v-icon>
                Want to add a source?
            </v-btn>
        </v-row>
        <v-row>
            <v-container>
                <v-data-table :items="sourcesData" :search="search" hide-default-header>
                    <template v-slot:top>
                        <v-row class="align-center pa-2" justify="space-between">
                            <v-col sm="3" lg="3" class="justify-end">
                                <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify"
                                    variant="outlined" hide-details class="custom-search-bar"></v-text-field>
                            </v-col>
                        </v-row>
                    </template>

                    <template v-slot:item="{ item }">
                        <tr @click="selectSource(item)">
                            <td >
                                <v-row class="align-center no-gutters">
                                    <v-col cols="3">
                                        {{ item.name }}
                                    </v-col>
                                    <v-col cols="5">
                                        <div>
                                            <v-icon>mdi-snowflake</v-icon>
                                            <span class="font-weight-bold mr-5 ml-1">{{ item.connector }}</span>
                                        </div>
                                    </v-col>
                                    <v-col cols="3">
                                        <span class="font-weight-regular" style="font-size:12px;">{{
                                            item.connections }}</span>
                                    </v-col>
                                    <v-col cols="1">
                                        <v-icon>
                                            mdi-chevron-right
                                        </v-icon>
                                    </v-col>
                                </v-row>
                            </td>
                        </tr>
                    </template>
                </v-data-table>
            </v-container>
        </v-row>
    </v-container>
</template>

<script setup>
import { useStore } from 'vuex';
import { ref, computed, onBeforeMount, defineEmits} from 'vue';

const emit = defineEmits(['source-selected']);


const store = useStore();

onBeforeMount(() => {
    store.dispatch('fetchSources');
});

const sources = computed(() => store.state.source.sources || []);

const sourcesData = computed(() =>
    (sources.value || []).map(source => ({
        name: source.name,
        connector: source.connector,
        image: "",
        connections: source.connections,
        selected: false,
    }))
);

const selectSource = (source) =>{
    console.log(source);
    emit('source-selected', source);
}
console.log(sourcesData);

</script>
