<template>
<<<<<<< HEAD:frontend/src/components/Home.vue
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
=======
  <!-- <v-app> -->
    <v-container class="mt-n16">
      <v-row>
        <v-col cols="2">
          <v-navigation-drawer app v-model="drawer" :rail="rail" permanent @click="rail = false">
            <v-list-item title="Unify Data" nav class="custom-list-item">
              <template v-slot:append>
                <v-btn icon="mdi-chevron-left" variant="text" @click.stop="rail = !rail" class="custom-btn"></v-btn>
              </template>
            </v-list-item>
            <v-divider></v-divider>
            <div class="custom-header ml-12">Dashboard</div>
            <v-list density="compact" nav>
              <v-list-item prepend-icon="mdi-home-city" title="Dashboard" value="home" class="custom-list-item"></v-list-item>
              <v-list-item prepend-icon="mdi-account" title="Pipelines" value="account" class="custom-list-item"></v-list-item>
              <v-list-item prepend-icon="mdi-account" title="Bulk Pipelines" value="account" class="custom-list-item"></v-list-item>
              <div class="custom-header ml-12">Editor</div>
              <v-list-item prepend-icon="mdi-account" title="Source" value="account" class="custom-list-item"></v-list-item>
              <v-list-item prepend-icon="mdi-account" title="Destination" value="account" class="custom-list-item"></v-list-item>
              <v-list-item prepend-icon="mdi-account" title="Transformation" value="account" class="custom-list-item"></v-list-item>
              <v-list-item prepend-icon="mdi-account" title="Build AI Connections" value="account" class="custom-list-item"></v-list-item>
              <v-list-item prepend-icon="mdi-account-group-outline" title="Workspaces" value="users" class="custom-list-item"></v-list-item>
            </v-list>
            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="John Leider" nav class="custom-list-item">
            </v-list-item>
          </v-navigation-drawer>
        </v-col>

        <v-col cols="10">
          <v-app-bar app class="custom-app-bar">
            <v-toolbar-title class="custom-toolbar-title">Navigation</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon class="custom-btn">
              <v-icon>mdi-bell</v-icon>
            </v-btn>
          </v-app-bar>
          <v-main>
            <v-container class="custom-container">
              <!-- Your main content -->
              <router-view></router-view>
            </v-container>
          </v-main>
        </v-col>
      </v-row>
    </v-container>
    <Maindest/>
  <!-- </v-app> -->
</template>

<script>
import Maindest from '../destination/mine/maindest.vue';
export default {
  name:"home",
  components:{
    Maindest
  },
  data() {
    return {
      drawer: true,
      rail: true,
    };
>>>>>>> 6b028a94a581b5f3dc50f8b5087dc9b484d6c640:frontend/src/components/home/Home.vue
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
