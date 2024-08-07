<template>
  <div class="text-h5">Password</div>
  <v-form @submit.prevent="securityStore.updateSecurity" class="mt-7">
    <v-text-field
      v-model="securityStore.oldPassword"
      label="Old Password"
      variant="outlined"
      density="compact"
      :type="showOldPassword ? 'text' : 'password'"
      :append-inner-icon="showOldPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append-inner="toggleOldPasswordVisibility"
    />
    <v-text-field
      v-model="securityStore.newPassword"
      label="New Password"
      variant="outlined"
      density="compact"
      :type="showNewPassword ? 'text' : 'password'"
      :append-inner-icon="showNewPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append-inner="toggleNewPasswordVisibility"
      :rules="passRules"
    />
    <v-text-field
      v-model="securityStore.confirmNewPassword"
      label="Confirm New Password"
      variant="outlined"
      density="compact"
      :type="showConfirmNewPassword ? 'text' : 'password'"
      :append-inner-icon="showConfirmNewPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append-inner="toggleConfirmNewPasswordVisibility"
      :rules="passConfirmRules"
    />
    <v-btn :disabled="securityStore.isButtonDisabled" type="submit" color="primary" class="float-right"> Save </v-btn>

    <!-- Error message display -->
    <v-alert v-if="securityStore.errorMessage" type="error">
      {{ securityStore.errorMessage }}
    </v-alert>
  </v-form>
</template>

<script setup>
import { ref } from 'vue';
import { useSecurityStore } from '@/store/modules/settings-security.js';

// Validation rules
const passRules = [
  v => !!v || 'Required*',
  v => v.length >= 6 || 'Password must contain at least 6 characters'
];

const passConfirmRules = [
  v => !!v || 'Required*',
  v => v === securityStore.newPassword || 'Passwords must match'
];

// Use the Pinia store in the component
const securityStore = useSecurityStore();

// Reactive variables for toggling visibility of each password field
const showOldPassword = ref(false);
const showNewPassword = ref(false);
const showConfirmNewPassword = ref(false);

// Functions to toggle the visibility of each password field
function toggleOldPasswordVisibility() {
  showOldPassword.value = !showOldPassword.value;
}

function toggleNewPasswordVisibility() {
  showNewPassword.value = !showNewPassword.value;
}

function toggleConfirmNewPasswordVisibility() {
  showConfirmNewPassword.value = !showConfirmNewPassword.value;
}
</script>
