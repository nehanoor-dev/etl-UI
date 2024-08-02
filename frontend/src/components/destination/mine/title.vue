<!-- <template>
    <v-container>
      <v-typo variant="h1">
        {{ title }}
      </v-typo>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'Title',
    data: () => ({
      title: 'Select Destination',
    }),
  }
  </script>
  
  <style scoped>
  .v-container {
    text-align: center;
  }
  </style>
   -->

   <template>
    <v-container>
      <v-typo variant="text-h1" class="text--black">
        {{ heading }}
      </v-typo>
    </v-container>
  </template>
  
  <script>
  export default {    
    name: 'Title',
    data: () => ({
      heading: 'Select Destination',
    })
  }
  </script>
  
  <style scoped>
  .v-container {
    text-align: center;
  }
  </style>
  