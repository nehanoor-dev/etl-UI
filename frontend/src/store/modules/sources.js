// src/store/modules/sources.js
import axios from 'axios';

const state = {
  sources: [],
};

const mutations = {
  SET_SOURCES(state, sources) {
    state.sources = sources;
  },
};

const actions = {
  async fetchSources({ commit }) {
    try {
      const response = await axios.get('http://10.0.52.171:8081/api/data');
      const sources = response.data.map(source => ({
        ...source,
        image: source.image.startsWith('data:image') ? source.image : 'data:image/png;base64,' + source.image,
      }));
      commit('SET_SOURCES', sources);
    } catch (error) {
      console.error('Error fetching sources:', error);
    }
  },
};

const getters = {
  sources: state => state.sources,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
