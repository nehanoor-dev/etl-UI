<template>
    <v-container fluid>
    <v-row>


        <v-col cols="12" class="bg-grey-lighten-5"> 
     
        <DestinationUi/>  
    

<!--<DestinationConfiguration/>
     -->



        </v-col>
    </v-row>
    </v-container>
  </template>
  
  <script>
 

import DestinationUi from '../destination/Destination Screen/DestinationUi.vue';

//import DestinationConfiguration from './DestinationConfiguration.vue';
  export default {
    name: 'Destination',
    components: {
   
    
   
  DestinationUi,
  //DestinationConfiguration,
 },
    data: () => ({
      
          
    }),
  }
  </script>
  