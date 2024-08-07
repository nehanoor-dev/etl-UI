// src/stores/useSecurityStore.js
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import API from '@/services/api.js';

export const useSecurityStore = defineStore('security', () => {
  // Define reactive variables for the password fields
  const oldPassword = ref('');
  const newPassword = ref('');
  const confirmNewPassword = ref('');
  const errorMessage = ref('');

  /**
   * Computed property to check if the "Save" button should be disabled.
   * This property evaluates if any of the password fields (old password, new password, or confirm new password) are empty.
   * If any of these fields are empty, the "Save" button should be disabled to prevent incomplete submissions.
   *
   * @param {none}
   * @returns {boolean} - Returns true if any of the password fields are empty, otherwise false.
  */
  const isButtonDisabled = computed(() => {
    return !oldPassword.value || !newPassword.value || !confirmNewPassword.value;
  });

  /**
  * Function to update the user's password.
  * This function performs an asynchronous request to update the user's password on the server.
  * It first checks if the new password and the confirmation password match.
  * If they do not match, it sets an appropriate error message.
  * If they match, it constructs a payload with the current password, new password, and confirmation password.
  * Upon receiving a successful response (status 200), it clears the password fields and any error messages.
  * If the response status indicates an error (e.g., 401 for incorrect old password), it sets an appropriate error message.
  * If the request fails, it logs the error and sets a generic error message.
  *
  * @param {none}
  * @returns {void}
  */
  const updateSecurity = async () => {
    if (newPassword.value !== confirmNewPassword.value) {
      errorMessage.value = 'New password and confirmation do not match';
      return;
    }

    const payload = {
      current_password: oldPassword.value,
      new_password: newPassword.value,
      new_password_confirmation: confirmNewPassword.value,
    };

    const done = (res) => {
      if (res.status === 200) {
        console.log('Password updated successfully');
        // Clear password fields on success
        oldPassword.value = '';
        newPassword.value = '';
        confirmNewPassword.value = '';
        errorMessage.value = ''; // Clear error message
      } else if (res.status === 401) {
        // Assuming 400 status code for incorrect old password
        errorMessage.value = 'Old password is incorrect';
      } else {
        errorMessage.value = 'Failed to update password';
      }
    };
    try {
      await API.put('/api/users/66ac7b8593f2820a23098f46', done, payload);
    } catch (error) {
      console.error('Error updating password:', error);
      errorMessage.value = 'Error updating password';
    }
  };

  return {
    oldPassword,
    newPassword,
    confirmNewPassword,
    isButtonDisabled,
    updateSecurity,
    errorMessage,
  };
});
