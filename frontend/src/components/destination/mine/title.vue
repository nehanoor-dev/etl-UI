<template>
  <!-- Main container for the title component -->
  <v-container>
    <!-- Row container to hold the title -->
    <v-row>
      <!-- Column spanning the entire row width -->
      <v-col cols="12">
        <!-- Title text with inline styles for font, size, margin, alignment, and color -->
        <p :style="{ fontFamily: 'Roboto', fontSize: '2em', marginBottom: '10px', textAlign: 'center', color: '#023C83' }">
          {{ heading }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Title', // Name of the component
  data: () => ({
    heading: 'Select Destination Connector', // Data property to hold the title text
  }),
}
</script>

<style scoped></style>
