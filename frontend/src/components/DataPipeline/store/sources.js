import axios from 'axios';

export default {
  state: {
    sources: [],  // Array to hold source data
    token: "66b333ab02f04cf3ff04be0c|QbMjwjQaDKTuMqXiI1OUAl1rGWo9ABwcSyeNWN0o0362a37b" // Authorization token for API requests
  },
  mutations: {
    getSources(state, res) {
      // Update the state with the fetched sources
      state.sources = res;
    }
  },
  actions: {
    // Action to fetch sources asynchronously
    async fetchSources({ commit, state }) {
      try {
        const response = await axios.get('http://10.0.52.179:8081/api/connectors', {
          headers: {
            'Authorization': `Bearer ${state.token}` // Include token in request headers
          }
        });
        console.log(response.data.sources); // Log the fetched sources for debugging
        commit('getSources', response.data.sources); // Commit the sources data to the state
      } catch (err) {
        console.log("Error " + err); // Log error details
      }
    }
  }
};
