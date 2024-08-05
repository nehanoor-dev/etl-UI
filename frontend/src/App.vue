<template>
  <v-app theme="light" style="background-color: white; width: 100%; height: 1000px;"> 
    <v-main>
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
      
    </v-main>

   
  </v-app>

  
</template>

<script setup>
import Home from './components/home/Home.vue';
// import DestinationScreen from './components/destination/DestinationScreen.vue' 
import maindest from './components/destination/mine/maindest.vue'


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
