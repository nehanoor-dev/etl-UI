<template>
  <v-app class="bg-white" theme="light" >
    <v-toolbar color="white" class="custom-toolbar sticky-toolbar">
      
     
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
     
    </v-toolbar>
    

    <v-divider></v-divider>
  </v-app>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.custom-toolbar {
  height: 56px;
  width: 100%;
}

.sticky-toolbar {
  position: -webkit-sticky; /* For Safari */
  position: sticky;
  top: 0;
  z-index: 1000; 
}
</style>
