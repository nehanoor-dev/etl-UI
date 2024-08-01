<template>

    <v-container fluid>
    
    <v-row>
    
    <v-col cols="10" class="color  " >
    
    <SideBar/>
    
    </v-col>
    

    <v-col cols="2" class="bg-green-darken-2">
    
    <workingarea/>
    
    </v-col>
    
    </v-row>
    
    </v-container>
    
    </template>
    
    <script>
    
    
    
    import workingarea from './workingarea.vue';
    
    import SideBar from './sidebar.vue';
    
    export default {
    
    name: 'DestinationScreen',
    
    components: {
    
    SideBar,
    workingarea,
    
    },
    
    data: () => ({
    
    }),
    
    }
    
    </script>
<style scoped>
.color{
    overflow-x: scroll;
    color: rgb(165, 41, 41);
}
</style>