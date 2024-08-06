<template>
  <div class="text-h5">Password</div>
  <v-form @submit.prevent="updateSecurity" class="mt-7">
    <v-text-field v-model="oldPassword" label="Old Password" variant="outlined" density="compact" type="password">
    </v-text-field>
    <v-text-field v-model="newPassword" label="New Password" variant="outlined" density="compact" type="password">
    </v-text-field>
    <v-text-field
      v-model="confirmNewPassword"
      label="Confirm New Password"
      variant="outlined"
      type="password"
      density="compact"
    >
    </v-text-field>

    <v-btn :disabled="isButtonDisabled" type="submit" color="primary" class="float-right">Save</v-btn>
  </v-form>
</template>

<script setup>
import { ref, computed } from 'vue';

// Define reactive variables for the password fields
const oldPassword = ref('');
const newPassword = ref('');
const confirmNewPassword = ref('');

/**
  * Computed property to check if the "Update Security" button should be disabled
  
  * @param {none}
  * @returns {boolean} - Returns true if any of the password fields are empty, otherwise false
  */
const isButtonDisabled = computed(() => {
  return !oldPassword.value || !newPassword.value || !confirmNewPassword.value;
});

const updateSecurity = () => {
  console.log('Security settings updated');
  // Add logic to handle the security update
};
</script>
