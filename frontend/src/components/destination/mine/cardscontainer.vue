<template>

    <v-container class="cardsDiv" >
      <v-row rows="2" align="start">
        <v-col cols="9" md="2">
            <Card/>
            <Card/>
            <Card/>
          <Card/><Card/>
          <Card/><Card/>
          <Card/><Card/>
          <Card/><Card/>
          <Card/><Card/>
          <Card/>
        </v-col>
      </v-row>
    </v-container>
    <!-- <v-container style="overflow: scroll; flex-direction: column;">
    <v-item-group selected-class="bg-primary">
    
      <v-row>
        <!-- <v-col
          v-for="n in 3"
          :key="n"
          cols="12"
          md="4"
        > -->
        
        <!-- <v-col 
          cols="12"
          md="4"
        >
          <Card/>
          <Card/>
          <Card/>
        </v-col>
      </v-row>
    
  </v-item-group>
</v-container> -->
  </template>
  
<script>
import Card from './card.vue';

export default  {
    name: 'Cardscontainer',
    Components: {
      Card
    },
    data() {
      return {
        // You can replace the src with your actual image URLs and set names dynamically if needed
      };
    },
  };
</script>
  
<style >
.cardsDiv {
    display:flex;

    background-color: white; 
    border-radius: 10px;
}
</style>
  