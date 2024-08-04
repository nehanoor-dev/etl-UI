<template>
  <div class="text-h5">Profile</div>
  <v-form @submit.prevent="updateName" class="mt-4">
    <span>Email</span>
    <v-text-field
      variant="outlined"
      v-model="email"
      readonly
      class="email"
      density="compact"
      bg-color="grey-lighten-5"
      base-color="grey-lighten-5"
      color="grey-lighten-3"
    ></v-text-field>

    <span>Full Name</span>

    <v-text-field 
    autofocus 
    v-model="fullName" 
    variant="outlined" 
    density="compact"> 
    </v-text-field>

    <v-btn 
    :disabled="!isSaveButtonEnabled"
    type="submit" 
    color="primary" 
    class="float-right"> Update Name </v-btn>

</v-form>
</template>

<script setup>
import { ref , watch } from 'vue';

// Define a reactive variable to control the save button's enabled state
const isSaveButtonEnabled = ref(false);

// Define reactive variables for email and full name
const email = ref('moazzam.akmal@pf.com.pk');
const fullName = ref('Moazzam Akmal');

/**
 * Function to update the name
 * @param {none}
 * @returns {void}
 */
const updateName = () => {
  console.log(`Updated name to: ${fullName.value}`);
  // Add logic to handle the name update
};

/**
 * Watcher to enable the save button if the full name is not empty
 * @param {string} newValue - The new value of fullName
 * @returns {void}
 */
watch(fullName, (newValue) => {
  isSaveButtonEnabled.value = newValue.trim().length > 0;
});

</script>

<style scoped>
.v-field__field {
  color: aqua;
}
</style>
