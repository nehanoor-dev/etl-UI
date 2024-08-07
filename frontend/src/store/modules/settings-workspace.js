// stores/useWorkspaceStore.js
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useWorkspaceAddStore } from './workspace-show.js';
import API from '@/services/api.js';

export const useWorkspaceStore = defineStore('workspace', () => {
  
  // Import the workspace add store to access its getters and state
  const workspaceshow = useWorkspaceAddStore();

  /**
   * Computed property to determine if the save button should be disabled.
   * This property checks if the `name` property of the selected workspace is empty or not.
   * It relies on the `selectedItem` getter from the imported `useWorkspaceAddStore`.
   *
   * @param {none}
   * @returns {boolean} - Returns true if the name is empty, otherwise false.
   */
  const isButtonDisabled = computed(() => {
    return workspaceshow.selectedItem.name.trim().length > 0;
  });

  /**
  * Function to update an existing workspace.
  * This function performs an asynchronous request to update the specified workspace on the server.
  * It logs the workspace ID being updated and constructs a payload with the new name.
  * Upon receiving a successful response (status 200), it logs a success message.
  * If the request fails or if the server responds with an error status, appropriate error messages are logged.
  *
  * @param {string} id - The ID of the workspace to be updated.
  * @param {string} name - The new name for the workspace.
  * @returns {void}
  */
  const updateWorkspace = async (id, name) => {
  
    const done = (response) => {
      if (response.status === 200) {
        console.log('Workspace updated successfully');
        // Optionally, you can also update the store or trigger any other updates here
      } else {
        console.error('Failed to update workspace');
      }
    };

    try {
      await API.put(`/api/workspaces/${id}`, done, { name });
    } catch (error) {
      console.error('Error updating workspace:', error);
    }
  };

  return {
    isButtonDisabled,
    updateWorkspace,
  };
});
