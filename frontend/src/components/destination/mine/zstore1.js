import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    avldes: 0,
    searchInput: 'blue',
    searchResults: [], // New state variable to hold search results
    apiResponse: null // New state variable to hold API response
  },
  mutations: {
    showAll(state, response) {
      state.avldes += response;
    },
    updateSearchInput(state, newVal) {
      state.searchInput = newVal;
    },
    updateSearchResults(state, results) {
      state.searchResults = results;
    },
    updateApiResponse(state, response) {
      state.apiResponse = response;
    }
  },
  actions: {
    async searchAPI({ commit }, searchTerm) {
      try {
        const response = await axios.post('http://10.0.52.171:8081/api/search', {
          search: searchTerm
        });
        commit('updateSearchResults', response.data);
        commit('updateApiResponse', response.data);
      } catch (error) {
        console.error('Error searching API:', error);
      }
    },
    searchItem({ commit }, item) {
      commit('updateSearchInput', item);
      dispatch('searchAPI', item);
    }
  },
  getters: {
    squaredavldes(state) {
      return state.avldes * state.avldes;
    }
  },
  modules: {
  }
})