<template>
    <v-container>
        <v-row justify="end">
            <v-btn @click="addDestination" elevation="1" style="font-size: 12px; color: #023c83; font-weight: bolder;"
            size="large" rounded="lg" class="">
                <v-icon left>mdi-plus</v-icon>
                Want to add a destination?
            </v-btn>
        </v-row>
        <v-row>
            <v-container>
                <v-data-table :items="destinationsData" :search="search" hide-default-header hide-default-footer>
                    <template v-slot:top>
                        <v-row class="align-center pa-2" justify="space-between">
                            <v-col>
                                <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify"
                                    variant="outlined" hide-details class="custom-search-bar ma-10"></v-text-field>
                            </v-col>
                        </v-row>
                    </template>

                    <template v-slot:item="{ item }">
                        <tr @click="selectDestination(item.id)" class="hover">
                            <td>
                                <v-row class="align-center no-gutters">
                                    <v-col cols="3">
                                        {{ item.name }}
                                    </v-col>
                                    <v-col cols="5">
                                        <div>
                                            <v-icon class="mr-2">
                                                <v-img
                                                    class="rounded-icon"
                                                    :src="'data:image/png;base64,' + item.image"
                                                    height="20"
                                                    width="20"
                                                ></v-img>
                                            </v-icon>
                                            <span class="font-weight-bold mr-5 ml-1">{{ item.connector }}</span>
                                        </div>
                                    </v-col>
                                    <v-col cols="3">
                                        <span class="font-weight-regular" style="font-size:12px;">{{
                                            item.lastUpdated}}</span>
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
import { ref, computed, onBeforeMount, defineEmits } from 'vue';

const emit = defineEmits(['destination-selected']);
const store = useStore();

onBeforeMount(() => {
    store.dispatch('fetchDestinations');
});

const destinations = computed(() => store.state.destination.destination || []);
console.log('simple::::',destinations);

const destinationsData = computed(() =>
    
    (destinations.value).map(destination => ({
        id:destination._id,
        name: destination.name,
        connector: destination.name,
        image: destination.image,
        lastUpdated: destination.updated_at,
        selected: false,
    }))
);
console.log(destinationsData);

const selectDestination = (destination) => {
    console.log("my");
    emit('destination-selected', destination);
}

const search = ref('');


</script>
<style scoped>
  .hover:hover {
        background-color: #ecebff;
        transition: .3s;
        cursor: pointer;
    }
</style>