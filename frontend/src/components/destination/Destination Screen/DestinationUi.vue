<template>
  <v-container>
    <v-row>
      <v-col class="ma-3">
        <div>
          <h1>Destination</h1>
        </div>
      </v-col>
      <v-col>
        <div class="d-flex justify-end">
          <router-link to="/destination/maindest">
            <v-btn
              @click="addDestination"
              color="#023C83"
              elevation="2"
              class="ma-2"
            >
              <v-icon left>mdi-plus</v-icon>
              <!-- Icon to the left of the text -->
              Add Destination
            </v-btn>
          </router-link>
        </div>
      </v-col>
    </v-row>
    <div>
      <ExistingSearch />
    </div>

    <div>
      <ExistingDestinations />
    </div>
  </v-container>
</template>

<script>
import ExistingDestinations from "./ExistingDestinations.vue";
import ExistingSearch from "./ExistingSearch.vue";

export default {
  name: "DestinationUi",

  components: {
    ExistingDestinations,

    ExistingSearch,
    //DestinationConfiguration,
  },
  data: () => ({}),
};
</script>

<style>
.v-field__append-inner {
  color: #023c83;
}
</style>
