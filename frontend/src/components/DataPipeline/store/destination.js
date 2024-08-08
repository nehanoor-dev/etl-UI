import axios from 'axios';

export default {
  state: {
    destination: [],  // Array to hold destination data
    token: "66b333ab02f04cf3ff04be0c|QbMjwjQaDKTuMqXiI1OUAl1rGWo9ABwcSyeNWN0o0362a37b" // Authorization token for API requests
  },
  mutations: {
    getDestination(state, res) {
      // Log the received destination data for debugging
      console.log("Getting destination data " + res);
      // Update the state with the fetched destination data
      state.destination = res;
    }
  },
  actions: {
    // Action to fetch destination data asynchronously
    async fetchDestinations({ commit, state }) {
      try {
        // Perform a GET request to fetch connectors from the API
        const response = await axios.get('http://10.0.52.179:8081/api/connectors', {
          headers: {
            'Authorization': `Bearer ${state.token}` // Include token in request headers
          }
        });
        console.log(response.data.destinations); // Log the fetched destinations for debugging
        
        // Commit the fetched destination data to the state
        commit('getDestination', response.data.destinations);
      } catch (err) {
        // Log error details if fetching fails
        console.log("Getting error by fetching destination ", err.message);
      }
    }
  }
};
