import axios from "axios";

const state = {
  query: "",
  destinations: [], // Initialize destinations
  totalDestinations: 0, // Initialize totalDestinations
  loading: false,
};

const getters = {
  query: (state) => state.query,
};

const actions = {
  async updateQuery({ commit, dispatch }, query) {
    commit("setQuery", query);
    if (query) {
      commit("api/setLoading", true, { root: true });
      try {
        const response = await axios.get(
          `http://10.0.52.171:8081/api/existingdestinations/search/${query}`
        );
        const data = response.data;

        if (Array.isArray(data)) {
          // Log the response data to ensure it's correct
          commit("api/setDestinations", data, { root: true });
          console.log(data);
          commit("api/setTotalDestinations", data.length, { root: true });
        } else {
          console.error("Response data is not an array:", data);
        }
      } catch (error) {
        console.error("Error searching destinations:", error);
      } finally {
        commit("api/setLoading", false, { root: true });
      }
    } else {
      dispatch("api/fetchDestinations", null, { root: true });
    }
  },
};

const mutations = {
  setQuery: (state, query) => {
    state.query = query;
  },
  setDestinations: (state, destinations) => {
    state.destinations = destinations;
  },
  setTotalDestinations: (state, total) => {
    state.totalDestinations = total;
  },
  setLoading: (state, loading) => {
    state.loading = loading;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
