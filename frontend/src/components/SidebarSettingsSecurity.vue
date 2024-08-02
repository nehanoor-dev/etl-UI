<template>
  <v-form @submit.prevent="updateSecurity">
    <v-text-field
      label="Current Password"
      v-model="currentPassword"
      type="password"
    ></v-text-field>
    <v-text-field
      label="New Password"
      v-model="newPassword"
      type="password"
    ></v-text-field>
    <v-btn type="submit" color="primary">
      Update Security
    </v-btn>
  </v-form>
</template>

<script setup>
import { ref } from 'vue';

const currentPassword = ref('');
const newPassword = ref('');

const updateSecurity = () => {
  console.log('Security settings updated');
  // Add logic to handle the security update
};
</script>
