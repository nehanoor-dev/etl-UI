<template>
  <v-select
    :items="options"
    item-text="name"
    item-value="name"
    v-model="internalValue"
    label="Select a destination"
  ></v-select>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue';

const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  modelValue: {
    type: [String, Object],
    default: null
  }
});

const emit = defineEmits(['update:modelValue']);
const internalValue = ref(props.modelValue);

watch(internalValue, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>
