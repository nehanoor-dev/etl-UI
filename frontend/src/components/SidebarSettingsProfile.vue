<template>
  <v-form @submit.prevent="updateName" class="mt-4">
    <span>Email</span>
    <v-text-field
      variant="outlined"
      v-model="email"
      readonly
    ></v-text-field>
    <span>Full Name</span>
    <v-text-field
      variant="outlined"
      v-model="fullName"
    ></v-text-field>
    <v-btn type="submit" color="primary" class="float-right">
      Update Name
    </v-btn>
  </v-form>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('moazzam.akmal@pf.com.pk');
const fullName = ref('Moazzam Akmal');

const updateName = () => {
  console.log(`Updated name to: ${fullName.value}`);
  // Add logic to handle the name update
};
</script>
