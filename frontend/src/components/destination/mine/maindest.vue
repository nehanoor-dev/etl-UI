<!-- <template>
    <v-container>
        <title></title>
    </v-container>
</template>


<script>

import title from './title.vue'
export default {    
    name: 'maindest',
    
    components: {
    title
    },
    
    data: () => ({
    
    }),
    
    }
</script> -->

<template>
  <v-responsive
    class="mx-auto"
    max-width="950"
    max-height="550"
  >
    <v-container class="custom-container">
    <v-container>
      <Title />
      <Search></Search>
      <Filter/>
    </v-container>

    <v-container>
    <Cardscontainer></Cardscontainer>
    </v-container>
    
    
    </v-container>
  </v-responsive>
  </template>
  
<script>
import Search from './search.vue';
import Title from './title.vue';
import Cardscontainer from './cardscontainer.vue';
import Filter from './filter.vue';

  export default {    
    name: 'MainDest',
    components: {
      Title,
      Search,
      Cardscontainer,
      Filter
    }
  }
  </script>

<style scoped>
.custom-container {
  width: 950px;
  height: 550px;
  display: flow-root;
  /*overflow: scroll;; */
  background-color: #F1F4F8;
  border: 5px solid #023C83;
  border-radius: 10px;
  /* text-align: center; */
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  /* margin: auto; */
}
</style>
  