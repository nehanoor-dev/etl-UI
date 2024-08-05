<template>
  <v-menu transition="slide-x-transition">
    <template v-slot:activator="{ props }">
      <v-btn
        class="filter-btn"
        elevation="5"
        size="x-large"
        color="primary"
        v-bind="props"
      >
        <v-icon left >mdi-filter</v-icon>
        Filter
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="(item, i) in items" :key="i">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'Database' },
        { title: 'Search Engine'},
        { title: 'Storage'},
        { title: 'File Transfer'},
        { title: 'API'},
        { title: 'File'},
        { title: 'DataWarehouse' },
        { title: 'BI Tools' },
      ],
    };
  },
};
</script>

<style scoped>
.filter-btn {
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  /* height: 56px; */
  margin-bottom: 22px;
  text-transform: capitalize;
}

</style>
