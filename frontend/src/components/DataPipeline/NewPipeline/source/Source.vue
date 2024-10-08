<template>
    <!-- Button to add a new source -->
    <v-row justify="end">
      <v-btn 
        @click="BulkPipeline" 
        style="font-size: 14px; color: #023c83; font-weight: bolder; border: 1px solid #023c83; text-transform: capitalize;" 
        elevation="1"
        size="large" 
        rounded="lg"
        class="ma-5"
        
      >
        <v-icon left>mdi-plus</v-icon>
        Want to add a source?
      </v-btn>
    </v-row>
  
    <!-- Data table displaying sources -->
    <v-row>
      <v-data-table 
        :items="sourcesData" 
        :search="search" 
        :pagination.sync="pagination" 
        hide-default-header 
        hide-default-footer
      >
        <template v-slot:top>
          <v-row class="align-center pa-2">
            <v-col class="justify-end">
              <v-text-field 
                v-model="search" 
                label="Search" 
                prepend-inner-icon="mdi-magnify"
                variant="outlined" 
                hide-details 
                class="custom-search-bar pa-2"
              ></v-text-field>
            </v-col>
          </v-row>
        </template>
   
        <template v-slot:item="{ item }">
          <tr @click="selectSource(item.id)" class="hover">
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
                  <span class="font-weight-regular" style="font-size:12px;">
                    {{ item.lastUpdated }}
                  </span>
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
    </v-row>
  </template>
  
  <script setup>
  import { useStore } from 'vuex';
  import { ref, computed, onBeforeMount, defineEmits } from 'vue';
  
  const emit = defineEmits(['source-selected']);
  const pagination = ref({
    rowsPerPage: -1, // No pagination (show all rows)
  });
  
  const store = useStore();
  
  // Fetch sources from Vuex store when component is mounted
  onBeforeMount(() => {
    store.dispatch('fetchSources');
  });
  
  // Get sources from Vuex store
  const sources = computed(() => store.state.source.sources || []);
  
  // Prepare data for the data table
  const sourcesData = computed(() =>
    (sources.value || []).map(source => ({
      id: source._id,
      name: source.name,
      connector: source.name,
      image: source.image,
      lastUpdated: source.updated_at,
    }))
  );
  
  // Emit selected source ID
  const selectSource = (id) => {
    emit('source-selected', id);
  }
  </script>
  
  <style scoped>
  /* Styles for hover effect on table rows */
  .hover:hover {
    background-color: #ecebff;
    transition: .3s;
    cursor: pointer;
  }
  </style>
  