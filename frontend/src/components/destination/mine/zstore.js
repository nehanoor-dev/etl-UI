import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  // Initial state of the Vuex store
  state: {
    destinations: [], // Array to store the list of destinations
    type: [], // Array to store the unique types of destinations
    filter: [] // Array to store the filtered destinations
  },
  
  // Mutations to directly modify the state
  mutations: {
    // Sets the destinations array with the fetched data
    SET_DESTINATIONS(state, destinations) {
      state.destinations = destinations;
    },
    
    // Populates the types array with unique destination types
    SET_TYPES(state, destinations) {
      destinations.forEach(destination => {
        if (!state.type.includes(destination.type)) {
          state.type.push(destination.type); // Add type if it doesn't exist in the array
        }
      });
      if (!state.type.includes('All')) {
        state.type.push('All'); // Add 'All' option if it doesn't exist
      }
    },
    
    // Filters the destinations based on the selected type
    SET_FILTER(state, menu) {
      state.filter = []; // Clear the existing filter results
      if (menu == 'All') {
        state.filter = state.destinations; // If 'All' is selected, show all destinations
        state.destinations = state.filter;
      } else {
        state.destinations.forEach(destination => {
          if (destination.type == menu) {
            state.filter.push(destination); // Add matching destinations to the filter array
            console.log('filter result');
            console.log(destination.type); // Log the filter result for debugging
          }
        });
        state.destinations = state.filter; // Update the destinations array with filtered results
      }
    }
  },

  // Actions to perform asynchronous operations
  actions: {
    // Fetches the list of available destinations from the API
    async fetchdestinations({ commit }) {
      try {
        const response = await axios.get('http://10.0.52.171:8081/api/available-destinations');
        const destinations = response.data.map(destination => ({
          ...destination,
          image: destination.image.startsWith('data:image') ? destination.image : 'data:image/png;base64,' + destination.image, // Handle the image format
          type: destination.type,
        }));
        commit('SET_DESTINATIONS', destinations); // Commit the fetched destinations to the store
        commit('SET_TYPES', destinations); // Commit the types derived from the destinations
      } catch (error) {
        console.error('Error fetching destinations:', error); // Handle errors in fetching
      }
    },

    // Searches for destinations based on a search query
    async searchdestinations({ commit }, searchQuery) {
      try {
        const response = await axios.get(`http://10.0.52.171:8081/api/search/${searchQuery}`);
        const destinations = response.data.map(destination => ({
          ...destination,
          image: destination.image.startsWith('data:image') ? destination.image : 'data:image/png;base64,' + destination.image, // Handle the image format
        }));
        commit('SET_DESTINATIONS', destinations); // Commit the search results to the store
        commit('SET_TYPES', destinations); // Update types if necessary
      } catch (error) {
        console.error('Error fetching destinations:', error); // Handle errors in searching
      }
    },
  },
  
  // Getters to retrieve state properties
  getters: {
    destinations: state => state.destinations, // Getter to retrieve the list of destinations
    type: state => state.type // Getter to retrieve the list of types
  },
});

export default store; // Export the Vuex store for use in the Vue application
