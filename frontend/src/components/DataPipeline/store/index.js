import { createStore } from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";
import source from "./sources";
import destination from "./destination";

export default createStore({
  state: {
    pipelines: [],
    token: "66b30f1c02f04cf3ff04be0b|Apk0xtGOT3EeuneNytaQ80Ps76Ncl4gxzXX6lYJuf95822b3",
    jobHistory: [],
    sources: [],
  },
  mutations: {
    getPipeLines(state, response) {
      state.pipelines = response;
    },
    setJobHistory(state, response) {
      state.jobHistory = response;
    },
    removePipeline(state, pipelineId) {
      state.pipelines = state.pipelines.filter(pipeline => pipeline.id !== pipelineId);
    },
    updatePipeline(state, pipelineId) {
      state.pipelines = state.pipelines.filter(pipeline => pipeline.id !== pipelineId);
    },
    updateStatus(state, pipelineId) {
      state.pipelines = state.pipelines.filter(pipeline => pipeline.id !== pipelineId);
    },
    setPipelines(state, pipelines) {
      state.pipelines = pipelines;
    },
    setFilters(state, filters) {
      state.filters = filters;
    },
    setSource(state, source) {
      state.selectedSource = source;
    },
    setDestination(state, destination) {
      state.selectedDestination = destination;
    }
  },
  actions: {
    async fetchPipelines({ commit, state }) {
      try {
        const response = await axios.get('http://10.0.52.179:8081/api/connections', {
          headers: {
            'Authorization': `Bearer ${state.token}` // Include token in request headers
          }
        });
        console.log("Hello");
        console.log(response.data);
        commit('getPipeLines', response.data);
      } catch (error) {
        console.error('Error fetching pipelines:', error);
      }
    },
    async fetchSource({ commit, state }, pipelineId) {
      try {
        // Assume updateSource is an existing function. If not, it should be defined or removed.
        updateSource({ commit }, source);
        commit('setSource', source);
      } catch (err) {
        console.log("Fetching Source error", err);
      }
    },
    async fetchDestination({ commit }) {
      try {
        // Assume updateDestination is an existing function. If not, it should be defined or removed.
        updateDestination({ commit }, destination);
        commit('setDestination', destination);
      } catch (err) {
        console.log("Fetching Destination", err);
      }
    },
    async fetchJobHistory({ commit, state }, id) {
      try {
        const response = await axios.get(`http://10.0.52.179:8081/api/connections/${id}/jobhistory`, {
          headers: {
            'Authorization': `Bearer ${state.token}` // Include token in request headers
          }
        });
        console.log(response.data);
        //  const response= [
        //     {
        //     "end_time": "2024-08-03T10:47:00Z",
        //     "result": "Success",
        //     "size": "50 MB",
        //     "rowsLoaded": "3000",
        //     "rowsExtracted": "3000",
        //     "timeTaken": "-176400 seconds"
        //     }
        // ]
        commit('setJobHistory', response.data);
      } catch (error) {
        console.error(`Error fetching job history for pipeline ${id}:`, error);
      }
    },
    async deletePipeline({ commit, state }, pipelineId) {
      try {
        //console.log(id)
        await axios.delete(`http://10.0.52.179:8081/api/connection/${pipelineId}`, {
          headers: {
            'Authorization': `Bearer ${state.token}` // Include token in request headers
          }
        });
        commit('removePipeline', pipelineId);
      } catch (error) {
        console.error('Error deleting pipeline:', error);
      }
    },
    async saveChanges({ commit, state }, payload) {
      console.log('Payload:', payload);
      
      try {
        const response = await axios.put(`http://10.0.52.179:8081/api/connections/${payload.id}`,payload, {
          headers: {
            'Authorization': `Bearer ${state.token}`
          }
        });
        console.log('Changes saved:', response.data);
        commit('updatePipeline');
        commit('updateStatus')
      } catch (error) {
        console.error('Error saving changes:', error.response.data); // Detailed error information
      }
    },
    
    async getFilters({ commit, state }) {
      const params = new URLSearchParams();
      console.log('Filters before request:', { statuses, schedule_type, source_connector, destination_connector });

      const { statuses, schedule_type, source_connector, destination_connector } = state.filters;

      if (statuses) params.append('status', statuses);
      if (schedule_type) params.append('scheduleType', schedule_type);
      if (source_connector) params.append('source',source_connector);
      if (destination_connector) params.append('destination', destination_connector);

      try {
        const response = await axios.get(`http://10.0.52.179:8081/api/filter-connections?${params.toString()}`, {
          headers: {
            'Authorization': `Bearer ${state.token}`
          }
        });
        commit('setPipelines', response.data);
        console.log("Filters")
      } catch (err) {
        console.log('Error during filters', err);
      }
    },
    setFilters({ commit, dispatch }, filters) {
      commit('setFilters', filters);
      dispatch('getFilters');
    },
  },
  getters: {
    getPipelineById: (state) => (id) => {
      return state.pipelines.find(pipeline => pipeline.id === id);
    },
    getJobHistory: (state) => {
      return state.jobHistory;
    },
    allSources: (state) => {
      const sources = new Set();
      state.pipelines.forEach(pipeline => {
        if (pipeline.source_connector) {
          sources.add(pipeline.source_connector.name);
        }
      });
      return Array.from(sources);
    },
    allDestinations: (state) => {
      const destinations = new Set();
      state.pipelines.forEach(pipeline => {
        if (pipeline.destination_connector) {
          destinations.add(pipeline.destination_connector.name);
        }
      });
      return Array.from(destinations);
    }

  },
  plugins: [createPersistedState()],
  modules: {
    source,
    destination,
  }
});
