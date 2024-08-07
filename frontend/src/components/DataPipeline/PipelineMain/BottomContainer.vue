<template>
    <div class="ma-5 pa-2 custom-container" >
        <Dropdown></Dropdown>
        <Table />
    </div>

    
</template>

<script setup>
import Dropdown from './Dropdown.vue';
import Table from './Table.vue';

</script>
<style scoped>
.custom-container {
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;    }
</style>