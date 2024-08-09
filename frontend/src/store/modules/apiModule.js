import axios from "axios";

const state = {
  destinations: [], // Array to store the list of destinations
  totalDestinations: 0, // Number to keep track of the total number of destinations
  loading: false, // Boolean to indicate if data is currently being loaded
};

const getters = {
  // Getter to access the list of destinations
  destinations: (state) => state.destinations,

  // Getter to access the total number of destinations
  totalDestinations: (state) => state.totalDestinations,

  // Getter to access the loading state
  loading: (state) => state.loading,
};

const actions = {
  // Action to fetch destinations from the API
  async fetchDestinations({ commit }) {
    commit("setLoading", true); // Set loading to true before making the API request
    try {
      // Make the API request to fetch destinations
      const response = await axios.get(
        "http://10.0.52.171:8081/api/existingdestinations"
      );
      // Commit the fetched destinations to the state
      commit("setDestinations", response.data);

      // Commit the total number of destinations to the state
      commit("setTotalDestinations", response.data.length);
    } catch (error) {
      // Log any errors that occur during the API request
      console.error("Error fetching destinations:", error);
    } finally {
      // Set loading to false after the API request completes, regardless of success or failure
      commit("setLoading", false);
    }
  },
};

const mutations = {
  // Mutation to update the list of destinations in the state
  setDestinations: (state, destinations) => {
    state.destinations = destinations;
  },

  // Mutation to update the total number of destinations in the state
  setTotalDestinations: (state, total) => {
    state.totalDestinations = total;
  },

  // Mutation to update the loading state in the state
  setLoading: (state, loading) => {
    state.loading = loading;
  },
};

export default {
  namespaced: true, // Enables namespacing for this module
  state,
  getters,
  actions,
  mutations,
};
