<template>
    <v-card v-if="showContainer" class="container-card" max-width="500px">
      <v-card-text>
        <v-list>
          <v-list-item @click="navigateTo('/multiplesource')">
            <v-list-item-content>
              <v-list-item-title>Multiple Source</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="navigateTo('/multipledestination')">
            <v-list-item-content>
              <v-list-item-title>Multiple Destination</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showContainer: false
      };
    },
    methods: {
      openPopup() {
        this.showContainer = true;
      },
      closeContainer() {
        this.showContainer = false;
      },
      navigateTo(path) {
        this.$router.push(path);
        this.closeContainer(); // Optionally close the container after navigation
      }
    }
  };
  </script>
  
  <style scoped>
  .container-card {
    font-size: 10px;
    width: 30vh;
    position: fixed; /* Makes the card float over other content */
    top: 20%;
    left: 26%;
    transform: translateX(-50%);
    z-index: 1000; /* Ensure it's on top of other content */
  }
  </style>
  