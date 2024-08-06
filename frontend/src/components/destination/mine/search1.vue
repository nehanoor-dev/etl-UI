<template>
  <v-row>
    <!-- <v-col cols="12" class="d-flex justify-center"> -->
      <!-- <v-form> -->
        <!-- <v-container> -->
          <!-- <v-row> -->
            <v-col cols="10" class="d-flex justify-end" >
              <div>
                <v-text-field
                v-model="search"
                label="Search"
                type="text"
                variant="outlined"
                clearable
                max-width="500" 
                class="search-input ml-8"
                :style="{ width: '400px' }"
                @input="onSearch"
              >
                <template v-slot:append-inner>
                  <v-fade-transition leave-absolute>
                    <v-progress-circular
                      v-if="loading"
                      color="info"
                      size="24"
                      indeterminate
                    ></v-progress-circular>
                    <v-icon
                      v-else
                      size="24"
                      icon="mdi-magnify"
                      @click="onSearch"
                    ></v-icon>
                  </v-fade-transition>
                </template>
              </v-text-field>
              </div>
              
            </v-col>

            <v-col cols="2" class="d-flex justify-end">
              <div class="margn">

                <v-menu>
                <template v-slot:activator="{ props }">
                  <v-btn v-bind="props" width="20"
                    height="40"
                    class="rounded-circle">
                    <v-icon icon="mdi-filter"></v-icon>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-text class="pa-">
                    <v-btn
                      v-for="item in items"
                      :key="item"
                      color="primary"
                      size="large"
                      variant="text"
                      @click="searchItem(item)"
                      class="mb-2"
                      block
                    >
                      {{ item.title }}
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-menu>
              </div>
              
            </v-col>
          <!-- </v-row> -->
        <!-- </v-container> -->
      <!-- </v-form> -->
    <!-- </v-col> -->
  </v-row>
</template>
<script>
export default {
  name: 'SearchComponent',
  data() {
    return {
      search: '',
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
      loading: false,
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
      this.loading = true;
      // Any additional logic for handling search can be added here
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
    searchItem(item) {
      this.search = item;
      this.onSearch();
    },
  },
};
</script>

<style scoped>
.search-input {
  /* Adjust height to match the filter button if needed */
}

.v-col-10 {
    flex: 0 0 83.3333333333%;
    max-width: 67%;
}

.margn{
  margin-right: -180px;
}
</style>