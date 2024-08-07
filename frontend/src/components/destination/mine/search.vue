<template>
  <v-row>
    <v-col cols="10" class="d-flex justify-end" >
              <div>
                <v-text-field
               v-model="searchQuery"
                placeholder="Search Destination Connector"
                type="text"
                variant="outlined"
                clearable
                max-width="500" 
                class="search-input ml-8"
                :style="{ width: '400px' }"
                @input="performSearch"
                v-on:keypress.enter="performSearch"
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
                      @click="performSearch"
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
                      v-for="menu in $store.getters.type"
                      :key="menu"
                      color="primary"
                      size="large"
                      variant="text"
                      class="mb-2"
                      @click="performSearch"
                      block
                    >
                      {{ menu }}
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-menu>
              </div>
              
            </v-col>
  </v-row>
</template>



<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'SearchComponent',
  data() {
    return {
      searchQuery: '',
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
    computed: {
      ...mapGetters(['destinations']),
    },
    created() {
      this.fetchdestinations();
    },
  },
  methods: {

    ...mapActions(['searchdestinations']),
    performSearch() {
      this.searchdestinations(this.searchQuery,this.menu);
    },


   
  },
};
</script>

<style scoped>
.search-input {
}
/* 
.v-col-10 {
    flex: 0 0 83.3333333333%;
    max-width: 67%;
}

.margn{
  margin-right: -180px;
} */
</style>