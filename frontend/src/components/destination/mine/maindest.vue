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

    <v-container class="mt-n16 custom-container" >
      <Title />
      <Search></Search>
      <Cardsc></Cardsc>
    <!-- <v-container>
    <Cardscontainer></Cardscontainer>
    </v-container> -->
    
    
    </v-container>
  </template>
  
<script>
import Search from './search.vue';
import Title from './title.vue';
import Cardscontainer from './cardscontainer.vue';
import Cardsc from './card_screen.vue'

  export default {    
    name: 'MainDest',
    components: {
      Title,
      Search,
      Cardsc
      // Cardscontainer
    }
  }
  </script>

<style scoped>
.custom-container {
  width: auto;
  height: auto;
  margin-left: 0;
  margin-right: 0;
  /*overflow: scroll;; */
  background-color: #F1F4F8;
  border: 5px solid #023C83;
  border-radius: 10px;
  /* text-align: center; */
  /* display: flex; 
  align-items: center;
  justify-content: center; */
  /* margin: auto; */
}
</style>
  