<template>
    <v-container>
      <v-row justify="end">
        <v-btn @click="addDestination" elevation="1" size="small" rounded="lg" class="pa-2">
          <v-icon left>mdi-plus</v-icon>
          Want to add a destination?
        </v-btn>
      </v-row>
      <v-row>
        <v-container>
          <v-data-table :items="destinationsData" :search="search" hide-default-header>
            <template v-slot:top>
              <v-row class="align-center pa-2" justify="space-between">
                <v-col sm="3" lg="3" class="justify-end">
                  <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify"
                                variant="outlined" hide-details class="custom-search-bar"></v-text-field>
                </v-col>
              </v-row>
            </template>
  
            <template v-slot:item="{ item }">
              <tr @click="selectDestination(item)">
                <td>
                  <v-row class="align-center no-gutters">
                    <v-col cols="3">{{ item.name }}</v-col>
                    <v-col cols="5">
                      <div>
                        <v-icon>mdi-database</v-icon>
                        <span class="font-weight-bold mr-5 ml-1">{{ item.connector.name }}</span>
                      </div>
                    </v-col>
                    <v-col cols="3">
                      <span class="font-weight-regular" style="font-size:12px;">{{ item.connectionCount }}</span>
                    </v-col>
                    <v-col cols="1">
                      <v-icon>mdi-chevron-right</v-icon>
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
  const search = ref('');
  
  onBeforeMount(() => {
    store.dispatch('fetchDestinations');
  });
  
  const destinations = computed(() => store.state.destination.destination || []);
  console.log(destinations)
  const destinationsData = computed(() =>
    (destinations.value || []).map(destination => ({
      name: destination.name,
      connector: destination.connector,
      connectionCount: destination.connectionCount,
      selected: false,
    }))
  );
  
  const selectDestination = (destination) => {
    console.log(destination);
    emit('destination-selected', destination);
  }
  </script>
  