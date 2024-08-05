<!-- 
<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-btn
            class="mx-2"
            color="primary"
            rounded
            @click="toggleFilter"
          >
            <v-icon left>mdi-filter-variant</v-icon>
            Category
          </v-btn>
        </v-col>
      </v-row>
      <v-row v-if="showFilter">
        <v-col cols="12" v-for="item in filteredData" :key="item.id">
          <v-card>
            <v-card-title>{{ item.name }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>   -->
  <template>
  <v-menu
      transition="slide-x-transition"
    >
      <template v-slot:activator="{ props }">
        <div class="d-flex justify-end">
        <v-btn
          class="filter"
          elevation="20"
          color="primary"
          v-bind="props"
        >
        <v-icon left>mdi-filter</v-icon>
          Filter
        </v-btn>
      </div>
    </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
</template>
<script>
  export default {
    data() {
      return {
        showFilter: false,
        items: [
          { id: 1, name: 'Item 1', category: 'A' },
          { id: 2, name: 'Item 2', category: 'B' },
          { id: 3, name: 'Item 3', category: 'A' },
          { id: 4, name: 'Item 4', category: 'B' },
          { id: 5, name: 'Item 5', category: 'A' },
        ],
      };
    },
    computed: {
      filteredData() {
        // Change the condition according to your filter criteria
        return this.items.filter(item => item.category === 'A');
      },
    },
    methods: {
      toggleFilter() {
        this.showFilter = !this.showFilter;
      },
    },
  };
  </script>
  
  <style scoped>
  .v-btn {
    border-radius: 50px;
  }
  .filter {
   
  }
  </style>
  