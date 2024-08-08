<template>
  <v-container>
    <div>
      <v-row class="my-4">
        <v-col>
          <div class="ma-3">
            <p class="text-grey-lighten-1">
              {{ totalDestinations }} Destinations found
            </p>
          </div>
        </v-col>
        <v-col>
          <div class="d-flex justify-end">
            <v-menu transition="scale-transition">
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
                <v-list-item @click="filter('Inactive')">
                  <v-list-item-title>Inactive</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-col>
      </v-row>
    </div>

    <v-table>
      <thead>
        <tr>
          <th class="text-left font-weight-bold">Name</th>
          <th class="text-left font-weight-bold">Connector</th>
          <th class="text-left font-weight-bold">Source</th>
          <th class="text-left font-weight-bold">Last Sync</th>
          <th class="text-left font-weight-bold">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="destination in destinations" :key="destination.name">
          <td>{{ destination.name }}</td>
          <td>
            <v-icon color="#35aedd">
              <img
                :src="'data:image/png;base64,' + destination.connector.image"
                class="rounded-circle"
                width="20px"
                height="20px"
                alt="Connector Image"
              />
            </v-icon>
            <span>{{ destination.name }}</span>
          </td>
          <td>{{ destination.source }}</td>
          <td>{{ destination.last_sync }}</td>
          <td>
            <v-btn
              variant="tonal"
              rounded
              size="small"
              :color="
                destination.status === 'pending'
                  ? 'orange-lighten-3'
                  : destination.status === 'healthy'
                  ? 'green'
                  : destination.status === 'unhealthy'
                  ? 'red'
                  : ''
              "
            >
              {{ destination.status }}
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "DataTable",
  computed: {
    ...mapGetters("api", ["destinations", "totalDestinations", "loading"]),
  },
  created() {
    this.fetchDestinations();
  },
  methods: {
    ...mapActions("api", ["fetchDestinations"]),
  },
};
</script>
