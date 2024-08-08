<template>
        <slot >
        <v-select v-model="dropDownList[0]"
        :items=dropDownList
        @change="handleChange"
        variant="outlined"
        density="compact"
        dense 
        hide-details
        outlined></v-select>
     </slot>
 </template>

<script setup>

import { ref , defineEmits, defineProps } from 'vue'
const props = defineProps({
  dropDownList: Array,
  applyFilters: Function,
});

const emit = defineEmits(['change']); // Declare the custom event here

const handleChange = (value) => {
  emit('change', value);
  if (props.applyFilters) {
    props.applyFilters();
  }
}
const selected = ref(null);
</script>

<style scoped>
</style>