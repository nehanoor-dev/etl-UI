<template>
 
        <Setup />


</template>
<script setup>
import Setup from './Setup.vue';
import { ref } from 'vue';
import ConfigMain from '../BulkPipeline/ConfigBulkPipe.vue';
const step = ref(1);
const items2 = ref(['Bulk Pipeline Setup', 'Configure Pipeline'])
</script>