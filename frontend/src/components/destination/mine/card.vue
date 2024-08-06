<template>

    <v-container>
<v-card       :class="['d-flex ']"
              height="200"
              dark 
              style=" max-width: 100px; max-height: 100px;">
                <v-img
                src="https://via.placeholder.com/200x130"
                max-height="130px"
                max-width="200px"
                class="white--text align-end"
                ></v-img>
                <v-card-title class="justify-center">
                <span>Item Name</span>
                </v-card-title>
            </v-card>
        </v-container>
</template>

<script>
    export default  {
        name: 'card',
    }
</script>

<style>

</style>