import axios from "axios";

const state = {
  destinations: [],
  totalDestinations: 0,
  loading: false,
};

const getters = {
  destinations: (state) => state.destinations,
  totalDestinations: (state) => state.totalDestinations,
  loading: (state) => state.loading,
};

const actions = {
  async fetchDestinations({ commit }) {
    commit("setLoading", true);
    try {
      const response = await axios.get(
        "http://10.0.52.171:8081/api/existingdestinations"
      );
      commit("setDestinations", response.data);

      commit("setTotalDestinations", response.data.length);
    } catch (error) {
      console.error("Error fetching destinations:", error);
    } finally {
      commit("setLoading", false);
    }
  },
};

const mutations = {
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
