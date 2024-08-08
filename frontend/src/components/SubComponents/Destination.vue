<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="bg-grey-lighten-5">
        <DestinationUi />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DestinationUi from "../destination/Destination Screen/DestinationUi.vue";

export default {
  name: "Destination",
  components: {
    DestinationUi,
  },
  data: () => ({}),
};
</script>
