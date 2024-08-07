import { defineStore } from 'pinia';
import { ref, computed, onMounted } from 'vue';
import API from '@/services/api.js';

export const useWorkspaceAddStore = defineStore('workspaceAdd', () => {
  // Reactive variable for the menu state
  const menu = ref(false);

  // Reactive variable for the search query input
  const searchQuery = ref('');

  // Reactive variable for open the dailog
  const opendailoge = ref(false);

  // Reacitve variable for inputVa
  const inputValue = ref('');

  // Reactive array of all workspace item
  const allItems = ref([]);

  // Reactive variable for the currently selected item
  const selectedItem = ref(allItems.value[0]);

  /**
  * Computed property to filter items based on the search query and
  * exclude the currently selected item.

   * @param {none}
   * @returns {Array} - Returns an array of filtered items.
   */
  const filteredItems = computed(() => {
    return allItems.value
      .filter((item) => item.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
      .filter((item) => item.name !== selectedItem.value?.name);
  });

  /**
   * Function to get the initials of a title by splitting the title
   * into words and taking the first character of each word.
 
   * @param {string} title - The title to get initials from.
   * @returns {string} - Returns the initials of the title.
  */
  function getInitials(name) {
    return name
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase())
      .join('');
  }

  /**
   * Function to set the currently selected item.

   * @param {object} item - The item to be selected.
   * @return {void}
  */
  function selectItem(item) {
    selectedItem.value = item;
    console.log(selectItem);
  }

  /**
  * Function to open the dialog
 
  * @param {none}
  * @returns {void}
  */
  function Addworkspace() {
    opendailoge.value = true;
  }


  /**
   * Computed property to determine if the save button should be enabled.
   * Enables the button if the input value is not empty (i.e., has a trimmed length greater than 0).
   *
   * @returns {boolean} - Returns true if the input value is not empty; otherwise, false.
   */
  const isSaveButtonEnabled = computed(() => inputValue.value.trim().length > 0);


  /**
  * Function to open the dialog.
   
  * @param {none}
  * @return {void}
  */
  function openDailog() {
    opendailoge.value = true;
  }

  /**
  * Function to close the dialog.
   
  * @param {none}
  * @return {void}
  */
  function closeDailog() {
    opendailoge.value = false;
  }
  /**
   * Function to fetch workspaces and update the state.
   * This function performs an asynchronous request to fetch a list of workspaces from the server.
   * Upon receiving a successful response, it updates the state variables `allItems` and `selectedItem`.
   * If the request fails or if the server responds with an error status, appropriate error messages are logged.
   *
   * @param {none}
   * @returns {void}
   */
  const fetchWorkspaces = async () => {

    const done = (response) => {
      if (response.status === 200) {
        // Update the allItems ref with the data from the response.
        allItems.value = response.data;
        // Set the selectedItem to the first item in allItems, or null if allItems is empty.
        selectedItem.value = allItems.value[0] || null;
        console.log(selectedItem.value);
      } else {
        console.error('Failed to fetch workspaces');
      }
    };
    
    try {
      // Make a GET request to the '/api/workspaces' endpoint and pass the done callback.
      await API.get('/api/workspaces', done);
    } catch (error) {
      // Log any errors that occur during the API request.
      console.error('Error fetching workspaces:', error);
    }
  };

  /**
  * Function to create a new workspace and update the state.
  * This function performs an asynchronous request to create a new workspace on the server.
  * Upon receiving a successful response, it updates the state variable `allItems` with the newly created workspace
  * and resets the input field `inputValue`. Additionally, it closes the dialog used for creating the workspace.
  * If the request fails or if the server responds with an error status, appropriate error messages are logged.
  *
  * @param {none}
  * @returns {void}
  */
  const createWorkspace = async () => {
    
    const payload = { name: inputValue.value };
    
    const done = (response) => {
      if (response.status === 201) {
        allItems.value.push(response.data);
        closeDailog();
        inputValue.value = '';
      } else {
        console.error('Failed to create workspace');
      }
    };
    try {
      await API.post('/api/workspaces', done, payload);
    } catch (error) {
      console.error('Error creating workspace:', error);
    }
  };

   /**
   * Lifecycle hook that runs when the component is mounted.
   * This hook performs an asynchronous request to fetch the list of workspaces from the server
   * and updates the state accordingly by calling the `fetchWorkspaces` function.
   * The `await` keyword ensures that the function waits for the completion of the fetch operation
   * before proceeding.
   *
   * @param {none}
   * @returns {void}
   */  
  onMounted(async () => {
    await fetchWorkspaces();
  });

  return {
    menu,
    allItems,
    opendailoge,
    searchQuery,
    openDailog,
    Addworkspace,
    createWorkspace,
    isSaveButtonEnabled,
    selectItem,
    getInitials,
    filteredItems,
    selectedItem,
    closeDailog,
    inputValue,
  };
});
