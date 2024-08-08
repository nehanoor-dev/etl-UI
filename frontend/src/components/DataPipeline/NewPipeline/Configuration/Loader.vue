<template>
  <v-container style="height: 400px;">
    <v-row align-content="center" class="fill-height" justify="center">
      <!-- Sync Status Message -->
      <v-col class="text-subtitle-1 text-center" cols="12">
        Syncing Your Data
      </v-col>

      <!-- Progress Indicator -->
      <v-col cols="6">
        <v-progress-linear
          color="deep-purple-accent-4"
          height="6"
          indeterminate
          rounded
        ></v-progress-linear>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
/* Add any component-specific styles here */
</style>
