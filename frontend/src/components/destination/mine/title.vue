<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <p class="heading">{{ heading }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Title',
  data: () => ({
    heading: 'Select Destination',
  }),
}
</script>

<style scoped>
.heading {
  font-size: 24px; /* Adjust the font size as needed */
  color: black; /* Adjust the color as needed */
}
.text-center {
  text-align: center;
}
</style>
