import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    destinations: [],
    type:[],
    filter: [],
  },
  mutations: {
    SET_DESTINATIONS(state, destinations) {
      state.destinations = destinations;
    },
    SET_TYPES(state,destinations){
      destinations.forEach(destination => {
        if (!state.type.includes(destination.type)) {
          state.type.push(destination.type);
          console.log(destination.type);
        }
      });
      // state.type.push('All');
    },
    // SET_FILTER(state,destinations,menu){
    // destinations.forEach (destinations => {
    //   if (destinations.type == menu){
    //     state.destinations.push(destinations);
    //   }
    // }    )
    // }
    SET_FILTER(state, menu) {
      if (menu === 'All') {
        state.filter = state.destinations;
      } else {
        state.filter = state.destinations.filter(destination => destination.type === menu);
      }
    }
  },
  actions: {
    async fetchdestinations({ commit }) {
      try {
        const response = await axios.get('http://10.0.52.171:8081/api/data');
        const destinations = response.data.map(destination => ({
          ...destination,
          image: destination.image.startsWith('data:image') ? destination.image : 'data:image/png;base64,' + destination.image,
          type: destination.type,
        }));
        commit('SET_DESTINATIONS', destinations);
        commit('SET_TYPES', destinations);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    },
    
    async searchdestinations({ commit }, searchQuery, menu) {
      try {
        const response = await axios.get(`http://10.0.52.171:8081/api/search/${searchQuery}`);
        const destinations = response.data.map(destination => ({
          ...destination,
          image: destination.image.startsWith('data:image') ? destination.image : 'data:image/png;base64,' + destination.image,
        }));
        commit('SET_DESTINATIONS', destinations,menu);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    },
  },
  getters: {
    destinations: state => state.destinations,
    type : state => state.type
  },
});

export default store;
