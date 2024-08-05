<template>
    <v-app > 
      <v-main>
        <v-container fluid>
          <v-row>
            
              <Sidbar />
            
            <v-col cols="12" style="height: 10vh;">
              <NavBar />

              
            </v-col>
            <v-col cols="12">
              
            </v-col>
            
          </v-row>
          
        </v-container>
        
      </v-main>

     
    </v-app>

    
  </template>


<script>
import NavBar from './NavBar.vue';
import Sidbar from './SideBar.vue';

export default {
  components: {
    NavBar,
    Sidbar,
  },
};
</script>
  

<style  scoped>
.v-container {
  height: 100vh;
}

.v-col {
  padding: 0;
}
</style>
