import axios from "axios";

const state = {
  query: "", // Holds the current search query
  destinations: [], // Stores the search results
  totalDestinations: 0, // Stores the total number of search results
  loading: false, // Indicates whether the search is in progress
};

const getters = {
  // Getter to access the current search query from the state
  query: (state) => state.query,
};

const actions = {
  // Action to update the search query and fetch destinations based on it
  async updateQuery({ commit, dispatch }, query) {
    commit("setQuery", query); // Update the query in the state
    
    if (query) {
      // If there is a query, perform a search
      commit("api/setLoading", true, { root: true }); // Set loading to true

      try {
        // Make an API request to search for destinations based on the query
        const response = await axios.get(
          `http://10.0.52.171:8081/api/existingdestinations/search/${query}`
        );
        const data = response.data;

        // Check if the response data is an array
        if (Array.isArray(data)) {
          commit("api/setDestinations", data, { root: true }); // Update the destinations in the state
          console.log(data); // Log the response data for debugging
          commit("api/setTotalDestinations", data.length, { root: true }); // Update the total number of destinations
        } else {
          console.error("Response data is not an array:", data); // Log error if data is not an array
        }
      } catch (error) {
        console.error("Error searching destinations:", error); // Log any errors during the search
      } finally {
        commit("api/setLoading", false, { root: true }); // Set loading to false after the search completes
      }
    } else {
      // If there is no query, fetch all destinations
      dispatch("api/fetchDestinations", null, { root: true });
    }
  },
};

const mutations = {
  // Mutation to update the query state
  setQuery: (state, query) => {
    state.query = query;
  },

  // Mutation to update the destinations state
  setDestinations: (state, destinations) => {
    state.destinations = destinations;
  },

  // Mutation to update the total number of destinations
  setTotalDestinations: (state, total) => {
    state.totalDestinations = total;
  },

  // Mutation to set the loading state
  setLoading: (state, loading) => {
    state.loading = loading;
  },
};

export default {
  namespaced: true, // Enable namespacing for this module
  state,
  getters,
  actions,
  mutations,
};
