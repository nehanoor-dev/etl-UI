<template>
  <v-card flat>
    
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
