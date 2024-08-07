<template>
  <v-card flat>
    <v-data-table
      :items="tableList"
      :search="search"
      hide-default-header
    >
      <template v-slot:top>
        <v-row class="align-center pa-2" justify="space-between">
          <v-col sm="3" lg="3" class="justify-end">
            <v-text-field
              v-model="search"
              label="Search"
              prepend-inner-icon="mdi-magnify"
              variant="outlined"
              hide-details
              class="custom-search-bar"
            ></v-text-field>
          </v-col>
        </v-row>
      </template>

      <template v-slot:item="{ item }">
        <tr>
          <td>
            <v-row class="align-center no-gutters">
              <v-col cols="1">
                <v-checkbox v-model="item.selected" @change="handleCheckboxChange(item)"></v-checkbox>
              </v-col>
              <v-col cols="3">
                {{ item.name }}
              </v-col>
              <v-col cols="5">
                <div>
                  <v-icon>mdi-snowflake</v-icon>
                  <span class="font-weight-bold mr-5 ml-1">{{ item.connector }}</span>
                  <span class="font-weight-regular" style="font-size:12px;">{{ item.connections }}</span>
                </div>
              </v-col>
              <v-col cols="2" class="text-right">
                {{ item.selected ? 'Selected' : 'Not Selected' }}
              </v-col>
            </v-row>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  tableList: Array,
});

const emit = defineEmits(['update-selected']);

const search = ref('');

const handleCheckboxChange = (item) => {
  emit('update-selected', props.tableList.filter(item => item.selected));
};
</script>

<style scoped>
</style>
