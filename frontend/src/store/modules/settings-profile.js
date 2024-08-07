// src/stores/useProfileStore.js
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import API from '@/services/api.js';

export const useProfileStore = defineStore('profile', () => {
  // Reactive variable for email
  const email = ref('moazzam.akmal@pf.com.pk');

  // Reactive variable for full name, initially set to a default value
  const fullName = ref('Moazzam Akmal');

  // Variable to track the original value of full name
  const originalFullName = ref(fullName.value);

  /**
   * Computed property to determine if the save button should be enabled.
   * The button is enabled if the full name is not empty and has been modified
   * from its initial value.
   *
   * @param {none}
   * @returns {boolean} - Returns true if the full name is different from the original value and not empty; otherwise, false.
   */
  const isSaveButtonEnabled = computed(() => {
    return fullName.value.trim().length > 0 && fullName.value !== originalFullName.value;
  });

  /**
  * Function to update the user's name.
  * This function constructs a payload with the new full name and performs an asynchronous request to update the user's name on the server.
  * Upon receiving a successful response (status 200), it logs the updated name to the console and updates the `originalFullName` variable.
  * If the request fails or if the server responds with an error status, appropriate error messages are logged.
  *
  * @param {none}
  * @returns {void}
  */
  const updateName = async () => {
    const payload = { fullName: fullName.value };

    const done = (res) => {
      if (response.status === 200) {
        console.log(`Updated name to: ${fullName.value}`);
        // Update the original value after a successful save
        originalFullName.value = fullName.value;
      } else {
        console.error('Failed to update name');
      }
    };
    try {
      await API.put('/api/users/66ac7b8593f2820a23098f46', done, payload);
    } catch (error) {
      console.error('Error updating name:', error);
    }
  };

  return {
    email,
    fullName,
    isSaveButtonEnabled,
    updateName,
  };
});
