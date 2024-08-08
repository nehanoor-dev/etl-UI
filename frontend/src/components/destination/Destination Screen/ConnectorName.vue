<template>
  <v-card max-width="600">
    <div class="ma-4">
      <v-container>
        <v-row>
          <v-col>
            <h3>Create a Destination</h3>
          </v-col>
          <v-col>
            <div class="d-flex justify-end">
              <v-icon left>mdi-snowflake</v-icon>
              <p>{{ connector }}</p>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <div class="my-1 mt-4">
              <h4>Destination Name</h4>
            </div>
            <v-text-field
              v-model="name"
              clearable
              :placeholder="'Enter Destination '"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <div class="my-1">
              <h4>Connector</h4>
            </div>
            <v-text-field
              readonly
              v-model="connector"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("destination", {
      destination: (state) => state.destination,
    }),

    name: {
      get() {
        console.log("this.destination", this.destination);
        return this.$store.state?.formData?.name ?? this.destination?.name;
      },
      set(value) {
        console.log("this.$store", this.$store);

        this.setFormDataAction({ key: "name", value: value });
      },
    },
    connector: {
      get() {
        return this.destination?.connector ?? "";
      },
      set(value) {
        console.log("this.$store", this.$store);
        this.setFormDataAction({ key: "connector", value: value });
      },
    },
  },
  async mounted() {
    await this.loadDestination();
  },
  watch: {
    "$route.params.name": "loadDestination",
  },
  methods: {
    ...mapActions("destination", ["setFormDataAction"]),

    async loadDestination() {
      const name = this.$route.params.name;
      await this.$store.dispatch("destination/fetchDestination", name);
    },
  },
};
</script>
