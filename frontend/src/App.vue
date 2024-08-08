<template>
  <v-app theme="light" style="background-color: white; width: 100%; height: 1000px;">
    <v-main>
      <v-container class="auto-height-container">
        <v-row>
          <Sidbar />
          <v-col cols="12" style="height: 10vh;">
            <NavBar />
          </v-col>
          <v-col cols="12" style="height: 90vh">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import Sidbar from './components/SideBar.vue';
</script>

<style>

.v-col {
  padding: 0;
}
</style>
