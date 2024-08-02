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
    <v-container class="custom-container">
      <Title />
    </v-container>
  </template>
  
  <script>
  import Title from './title.vue';
  
  export default {    
    name: 'MainDest',
    components: {
      Title
    }
  }
  </script>

<style scoped>
.custom-container {
  width: 954px;
  height: 637px;
  background-color: aqua;
  /* text-align: center; */
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  /* margin: auto; */
}
</style>
  