<template>
        <slot >
        <v-select v-model="dropDownList[0]"
        :items=dropDownList
        @change="filterConnections" 
        variant="outlined"
        density="compact"
        dense 
        hide-details
        outlined></v-select>
     </slot>
 </template>

<script setup>

defineProps({
  dropDownList: Object
});

</script>

<style scoped>
</style>