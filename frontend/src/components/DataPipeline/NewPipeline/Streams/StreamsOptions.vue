<template>
  <v-container fluid>
    <v-radio-group inline v-model="radios">
      <template v-slot:label>
        <div>How do you want data to be delivered to the destination?</div>
      </template>
      <v-row align="center" class="justify-center ma-5 " style="column-gap: 10px;">
        <v-col cols="12" lg="5" md="5" class="custom-style pa-5 rounded">
          <v-radio value="replicate">
            <template v-slot:label>
              <v-col>
                <h5>Replicate Source</h5>
                <div>Maintain your up-to date copy of source data into destinaiton.</div>
              </v-col>
            </template>
          </v-radio>
        </v-col>
        <v-col cols="12" lg="5" md="5" class="custom-style pa-5 rounded">
          <v-radio value="append">
            <template v-slot:label>
              <v-col>
                <h5>Append Historical Changes</h5>
                <div>Track changes to your data over time. Changes are append to the destination.</div>
              </v-col>
            </template>
          </v-radio>
        </v-col>
      </v-row>
    </v-radio-group>
  </v-container>
</template>
<script setup>
import { ref } from 'vue';
const radios = ref(null);
</script>

<style scoped>
.custom-style {
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

}

.custom-style:hover {
  border: none;
  border: 1px solid grey;

}
</style>