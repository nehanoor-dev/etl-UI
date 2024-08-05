<template>
  <v-app theme="light" style="background-color: white; width: 100%; height: 1000px;"> 
    <v-main>
<<<<<<< HEAD
      <v-container class="auto-height-container">
        <v-row>
          
            <Sidbar />
          
          <v-col cols="12" style="height: 10vh;">
            <NavBar />

            
          </v-col>
          <v-col cols="12" style="height: 90vh;">
            <router-view></router-view>
          </v-col>
          
        </v-row>
        
      </v-container>
      
=======
      <Home />
       <!-- <DestinationScreen></DestinationScreen> -->
        <!-- <maindest></maindest> -->
>>>>>>> 6b028a94a581b5f3dc50f8b5087dc9b484d6c640
    </v-main>

   
  </v-app>

  
</template>

<<<<<<< HEAD
=======
<script setup>
import Home from './components/home/Home.vue';
// import DestinationScreen from './components/destination/DestinationScreen.vue' 
import maindest from './components/destination/mine/maindest.vue'

>>>>>>> 6b028a94a581b5f3dc50f8b5087dc9b484d6c640

<script>
import NavBar from './components/NavBar.vue';
import Sidbar from './components/SideBar.vue';

export default {
components: {
  NavBar,
  Sidbar,
},
};
</script>


<style >
.v-container {
height: 100vh;
}

.v-col {
padding: 0;
}
</style>
