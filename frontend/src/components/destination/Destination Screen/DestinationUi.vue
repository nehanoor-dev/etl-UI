<template>

  <v-container>
    <v-row>
      <v-col>
        <div>
    <h1>Destination</h1>
   </div>
      </v-col>
      <v-col>
        <div class="d-flex justify-end">
          <router-link
                class="text-decoration-none"
                to="/destination/maindest.vue"
              >
          <v-btn
      @click="addDestination"
      color="#023C83"
   
      elevation="2"
      class="ma-2"
 
    >
      <v-icon left>mdi-plus</v-icon> <!-- Icon to the left of the text -->
      Add Destination
    </v-btn>
  </router-link>
   </div>
      </v-col>
    </v-row>
    <div class="my-6">
      <v-card
    class="mx-auto"
    color="#023C83"
    max-width="600"
  >
    <v-card-text>
      <v-text-field
      v-model="search"
        :loading="loading"
        append-inner-icon="mdi-magnify"
        density="compact"
        label="Search Destination"
        variant="solo"
        hide-details
        single-line
        @click:append-inner="onClick"
      ></v-text-field>
    </v-card-text>
  </v-card>
    </div>
<div>
  <v-row class="my-4">
    <v-col>
      <div class="mt-3">
        <p class="text-grey-lighten-1"> Total Destinations found
        </p>
      </div>

    </v-col>
    <v-col>
<div class="d-flex justify-end">
  <v-menu 
    transition="scale-transition">
      <template v-slot:activator="{ props }">
        <v-btn
          
          v-bind="props"
          color="#023C83"
   prepend-icon="mdi-filter"
   elevation="2"
   class="ma-2"
   size="small"
        >
         Filter
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="filter('active')">
          <v-list-item-title>Active</v-list-item-title>
        
        </v-list-item>
        <v-list-item>
        
          <v-list-item-title @click="filter('Inactive')">Inactive</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
</div>
    </v-col>
  </v-row>
</div>

<v-table>
    <thead>
      <tr >
        <th class="text-left font-weight-bold">
          Name
        </th>
        <th class="text-left font-weight-bold">
          Connector
        </th>
        <th class="text-left font-weight-bold">
          Source
        </th>
        <th class="text-left font-weight-bold">
          Last Sync
        </th>
        <th class="text-left font-weight-bold">
          Status
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="destination in destinations" :key="destination.name">
        <td>{{ destination.name }}</td>
        <td><v-icon color="#35aedd"> <img :src="'data:image/png;base64,' + destination.connector.image" class="rounded-circle" width="20px" height="20px" alt="Connector Image" /></v-icon> <span>{{ destination.name}}</span></td>
        <td>{{ destination.source }}</td>
        <td>{{ destination.last_sync }}</td>
        <td>
          <v-btn
          variant="tonal"
          color="green"
          rounded
          size="small"
          
        >
        {{ destination.status }}
        </v-btn>
        </td>
      </tr>
     
      
    </tbody>
  </v-table>

 <div>
  
 </div>
  </v-container>
  
  
  
  </template>
  
  <script>
  
  export default {
    data: () => ({
      loading: false,
      destinations: [],

      loaded: false,
      search: '',
     
    }),

    methods: {

searchDestination(){
  fetch(`http://10.0.52.171:8081/api/existingdestinations/search/${this.search}`)
        .then(response => response.json())
        .then(data => {
          console.log('data',data)
          // Assuming data is an array of destinations
          this.destinations = data;
          this.loading = false;
        })
        .catch(error => {
          console.error("Error fetching destinations:", error);
          this.loading = false;
        });
},

      fetchDestinations() {
      this.loading = true;
      fetch("http://10.0.52.171:8081/api/existingdestinations")
        .then(response => response.json())
        .then(data => {
          // Assuming data is an array of destinations
          this.destinations = data;
          this.loading = false;
        })
        .catch(error => {
          console.error("Error fetching destinations:", error);
          this.loading = false;
        });
    },

    onClick () {
        this.loading = true
      this.searchDestination();
        setTimeout(() => {
          this.loading = false
          this.loaded = true
        }, 2000)
      },
  },
 
      created() {
    this.fetchDestinations();
  },
  };
  
  </script>
  
  <style>

.v-field__append-inner{
  color: #023C83;
}
   

</style>