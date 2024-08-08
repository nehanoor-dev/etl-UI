import { createStore } from 'vuex';
import apiModule from './modules/apiModule';
import searchModule from './modules/searchModule';
import destination from './modules/destination.js';
import submit from './modules/submit';
import testConnection from './modules/testConnection';

const store = createStore({
  modules: {
    api: apiModule,
    search: searchModule,
    destination: destination,
    submit,
    testConnection,
  },
});

export default store;