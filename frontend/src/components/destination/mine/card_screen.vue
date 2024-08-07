<template>
    <v-row class="box">
      <v-col cols="12">
        <v-card-text class="pt-2">
          <v-card class="pa-4" color="#FFFFFF" rounded="lg">
            <v-row class="no-gutters">
              <v-col
                v-for="destination in $store.state.destinations"
                :key="destination.name"
                cols="12"
                sm="6"
                md="3"
                class="text-center mb-3 d-flex justify-center"
              >
                <v-card
                  class="pa-4 internal-card rounded-lg"
                  elevation="2"
                  @click="navigateToSource(destination)"
                >
                  <div class="d-flex flex-column align-center justify-center">
                    <div class="large-icon mb-2">
                      <v-img class="img" :src="destination.image" contain></v-img>
                    </div>
                    <div class="destination-name">
                      {{ destination.name }}
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-card-text>
      </v-col>
    </v-row>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    name: "Cardsc",
    computed: {
      ...mapGetters(['destinations']),
    },
    created() {
      this.fetchdestinations();
    },
    methods: {
      ...mapActions(['fetchdestinations']),
      navigateToDestination(source) {
        this.$router.push({ name: 'source-details', params: { source: source.name.toLowerCase() } });
      },
    },
  };
  </script>
  
  <style scoped>
  .internal-card {
    cursor: pointer;
    background-color: #ffffff;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    width: 90%; /* Ensure full width for equal margin */
    border: 1px solid #d3d3d313;
    transition: all 0.3s ease;
    margin-left: auto;
    margin-right: auto;
  }
  
  .internal-card:hover {
    background-color: #e8f0fe;
  }
  
  .internal-card:hover .large-icon,
  .internal-card:hover .source-name {
    color: #023C83 !important;
  }
  
  .v-card-text {
    padding-top: 8px;
    padding-bottom: 8px;
  }
  
  .large-icon {
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .large-icon .v-img {
    min-width: 70px;
    min-height: 70px;
    aspect-ratio: 3/2;
  }
  
  .destination-name {
    text-align: center;
    font-size: 14px;
    line-height: 1.2;
    max-width: 120px;
    word-wrap: break-word;
  }
  </style>
  