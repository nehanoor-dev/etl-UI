<template>
  <v-responsive class="mx-auto" max-width="550">
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="8">
          <v-text-field
        class="search"
        rounded=25
        v-model="search"
        label="Search"
        @input="onSearch"
      ></v-text-field>
        </v-col>
        <v-col cols="auto">
          <Filter />
        </v-col>
      </v-row>
    </v-container>
  </v-responsive>
</template>

<script>
import Filter from './filter.vue';
export default {
  name: 'Search',
  components: {
    Filter,
  },
  data() {
    return {
      search: '',
      items: ['Apple', 'Banana', 'Orange', 'Pineapple', 'Strawberry'],
    };
  },
  computed: {
    filteredItems() {
      if (!this.search) {
        return this.items;
      }
      return this.items.filter((item) =>
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
.search-input {
  margin-top: 0;
  border-top-left-radius: 25px !important;
  border-bottom-left-radius: 25px !important;
  /* height: 56px; Adjust height to match the filter button */
}
</style>
