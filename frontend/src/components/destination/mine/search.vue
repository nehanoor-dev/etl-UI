<template>
  <v-responsive
    class="mx-auto"
    max-width="550"
  >

    <v-container>
      <!-- <v-text-field
        class="search"
        v-model="search"
        label="Search"
        append-icon="mdi-magnify"
        @input="onSearch"
      > -->
    
      <v-text-field
        id="search"
        v-model="search"
        label="Search"
        @input="onSearch"
      ></v-text-field>   
      <!-- <v-list>
        <v-list-item
          v-for="(item, index) in filteredItems"
          :key="index"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list> -->
    </v-container>
  </v-responsive>
  </template>
  
  <script>
  export default {
    name: 'Search',
    components: {
    },

    data() {
      return {
        search: '',
        items: [
          'Apple',
          'Banana',
          'Orange',
          'Pineapple',
          'Strawberry',
        ],
      };
    },
    computed: {
      filteredItems() {
        if (!this.search) {
          return this.items;
        }
        return this.items.filter(item =>
          item.toLowerCase().includes(this.search.toLowerCase())
        );
      },
    },
    methods: {
      onSearch() {
        // Any additional logic for handling search can be added here
      },
    },
  };
  </script>
  
<style scoped>
#search{
    display: inline;
  }
</style>
  