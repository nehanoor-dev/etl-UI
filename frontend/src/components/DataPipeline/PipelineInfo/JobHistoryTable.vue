<template>
    <div class="mx-2 px-2 rounded-border">
      <v-data-table 
      :items="jobHistory" 
      hide-default-header
      >

        <template v-slot:top>
          <v-row class="align-center pa-2" justify="space-between">
            <v-col sm="3" lg="4" >
              <p class="heading">Job History</p>
                <AllDropdown :drop-down-list="statuses" ></AllDropdown>

            </v-col>
            <v-col  sm="3" lg="3" class="justify-end"   >
                <v-text-field
                    v-model="search"
                    label="Search"
                    prepend-inner-icon="mdi-magnify"
                    variant="underlined"
                    hide-details
                 ></v-text-field>
            </v-col>
          </v-row>
        </template>

        <template v-slot:item="{ item }">
          <tr>
            <td >
              <v-row class="align-center no-gutters">
                <v-col cols="1">
                  <v-icon color="teal">mdi-check-circle</v-icon>
                </v-col>
                <v-col cols="9">
                  <div class="d-flex flex-column">
                    <span class="font-weight-medium">Sync Succeeded</span>
                    <span class="font-weight-regular" style="font-size: 12px;">{{ item.size }} | {{ item.rowsLoaded }} records loaded | {{ item.timeTaken }}</span>
                  </div>
                </v-col>
                <v-col cols="2" class="text-right">
                  {{ new Date(item.end_time).toLocaleString() }}
                </v-col>
              </v-row>

            </td>
            
          </tr>

        </template>



      </v-data-table>
    </div>
  </template>
  
  <script setup>
  import { ref , onBeforeMount, computed} from 'vue';
  import AllDropdown from '../PipelineMain/AllDropdown.vue';
  import { useStore } from 'vuex';

  const store = useStore();
  
  
  const search = ref('');

  const statuses = ref(['Successfull', 'Cancelled', 'Paused']);
  
  const props =defineProps({
    id: String,
  });

  onBeforeMount(() => {
  store.dispatch('fetchJobHistory', props.id);
  });

  const jobHistory = computed(() => store.getters.getJobHistory || []);
  console.log(jobHistory)

  </script>
  
  <style scoped>
  .rounded-border {
    border: 1.5px solid #E7E6ED;
    border-radius: 8px; /* Adjust the radius as needed */
  }


  </style>
  