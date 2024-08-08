<template>
  <v-col v-for="(type, key) in fields" :key="key" cols="12">
    <div class="my-1">
      <h4>{{ key }}</h4>
    </div>
    <v-text-field
      v-if="type === 'string'"
      v-model="formData[key]"
      :placeholder="'Enter ' + key"
      :readonly="key === 'connector'"
      clearable
      variant="outlined"
    ></v-text-field>
    <v-text-field
      v-if="type === 'integer'"
      v-model="formData[key]"
      :placeholder="'Enter ' + key"
      :readonly="key === 'connector'"
      variant="outlined"
      type="number"
    ></v-text-field>
  </v-col>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("destination", ["fields", "formData"]),
  },
  mounted() {
    console.log("formData", this.formData);
    this.$store.dispatch(
      "destination/fetchDestination",
      this.$route.params.name
    );
  },
};
</script>
