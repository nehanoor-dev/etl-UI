<!-- Sidebar.vue

<template>

<h1>HelloWorldvbsj</h1>

</template>

<script>

export default {

name: 'SideBar',

data: () => ({

}),

}

</script> -->

<template>
    <v-container>
      <!-- Title and Search Bar -->
      <v-row>
        <v-col>
          <h1>Select Destination</h1>
        </v-col>
        <v-col>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search Destination"
            solo-inverted
          ></v-text-field>
        </v-col>
      </v-row>
  
      <!-- Tabs for Category Filtering -->
      <v-row>
        <v-col>
          <v-tabs v-model="tab" background-color="white" slider-color="blue">
            <v-tab href="#databases">Databases</v-tab>
            <v-tab href="#datawarehouse">DataWarehouse</v-tab>
            <v-tab href="#datalakes">DataLakes</v-tab>
            <v-tab href="#bitools">BI Tools</v-tab>
            <v-tab href="#erptools">ERP Tools</v-tab>
          </v-tabs>
        </v-col>
      </v-row>
  
      <!-- Grid of Options -->
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="item in filteredItems" :key="item.name">
          <v-card class="pa-2" elevation="2">
            <v-card-title>
              <v-icon left>{{ item.icon }}</v-icon>
              {{ item.name }}
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
    <!-- Title and Search Bar -->
    <v-row>
      <v-col cols="12" class="text-center">
        <h1>Select Destination</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search Destination"
          solo-inverted
          hide-details
        ></v-text-field>
      </v-col>
    </v-row>

    <!-- Tabs for Category Filtering -->
    <v-row>
      <v-col cols="12">
        <v-tabs v-model="tab" background-color="white" slider-color="blue">
          <v-tab>Databases</v-tab>
          <v-tab>DataWarehouse</v-tab>
          <v-tab>DataLakes</v-tab>
          <v-tab>BI Tools</v-tab>
          <v-tab>ERP Tools</v-tab>
        </v-tabs>
      </v-col>
    </v-row>

    <!-- Grid of Options -->
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" v-for="item in filteredItems" :key="item.name">
        <v-card class="pa-2" elevation="2">
          <v-img :src="item.image" aspect-ratio="16/9"></v-img>
          <v-card-title class="text-center">{{ item.name }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </template>
  
  <script>
  export default {
    data: () => ({
      search: '',
      tab: null,
      items: [
        { icon: 'mdi-database', name: 'MySQL', category: 'Databases' },
        { icon: 'mdi-database', name: 'Mongo DB', category: 'Databases' },
        { icon: 'mdi-database', name: 'Oracle', category: 'Databases' },
        { icon: 'mdi-database', name: 'SQLite', category: 'Databases' },
        { icon: 'mdi-database', name: 'SQL Server', category: 'Databases' },
        { icon: 'mdi-database', name: 'CouchDB', category: 'Databases' },
        { icon: 'mdi-database', name: 'PostgreSQL', category: 'Databases' },
        { icon: 'mdi-database', name: 'Redis', category: 'Databases' }
      ]
    }),
    computed: {
      filteredItems() {
        return this.items.filter(item => item.category === this.tab);
      }
    }
  }
  </script>
  
  <style scoped>
  h1 {
    font-size: 24px;
    text-align: center;
  }
  </style>
  