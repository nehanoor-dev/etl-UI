<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="bg-grey-lighten-5">
        <v-container>
          <div class="my-6">
            <ConnectorName />
          </div>
          <div v-if="fields">
            <v-card max-width="600">
              <div class="ma-4">
                <v-container>
                  <v-row>
                    <v-col class="mb-4">
                      <h3>Connection Details</h3>
                    </v-col>
                  </v-row>
                  <v-row>
                    <ConnectorForm />
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      <TestConnection />
                    </v-col>
                    <v-col cols="6">
                      <SubmitForm />
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </v-card>
          </div>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ConnectorForm from "./ConnectorForm.vue";
import TestConnection from "./TestConnection.vue";
import SubmitForm from "./SubmitForm.vue";
import ConnectorName from "./ConnectorName.vue";

export default {
  name: "DestinationConfiguration",
  components: {
    ConnectorForm,
    ConnectorName,
    TestConnection,
    SubmitForm,
  },
  computed: {
    ...mapState("destination", ["destination", "fields"]),
  },
  watch: {
    "$route.params.name": "fetchDestination",
  },
  methods: {
    ...mapActions("destination", ["fetchDestination"]),
  },
  mounted() {
    this.fetchDestination(this.$route.params.name);
  },
};
</script>
