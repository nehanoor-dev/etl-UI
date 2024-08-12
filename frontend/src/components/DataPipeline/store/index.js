// Importing necessary modules and dependencies
import { createStore } from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";
import source from "./sources";
import destination from "./destination";

// Vuex store setup
export default createStore({
  state: {
    pipelines: [],               // Array to hold pipeline data
    token: "66b30f1c02f04cf3ff04be0b|Apk0xtGOT3EeuneNytaQ80Ps76Ncl4gxzXX6lYJuf95822b3", // Authorization token for API requests
    jobHistory: [],              // Array to hold job history data
    sources: [],                 // Array to hold source data
    filters: {}
  },
  mutations: {
    // Mutations to update the state
    getPipeLines(state, response) {
      state.pipelines = response; // Set pipelines data from API response
    },
    setJobHistory(state, response) {
      state.jobHistory = response; // Set job history data from API response
    },
    removePipeline(state, pipelineId) {
      state.pipelines = state.pipelines.filter(pipeline => pipeline.id !== pipelineId); // Remove pipeline by ID
    },
    updatePipeline(state, updatedData) {
      const pipelineIndex = state.pipelines.findIndex(pipeline => pipeline.id === updatedData._id);
      if (pipelineIndex !== -1) {
        // Update the specific fields of the pipeline in the state
        const pipeline = state.pipelines[pipelineIndex];
        pipeline.schedule_type = updatedData.schedule_type;
        pipeline.name = updatedData.name;
        pipeline.frequency = updatedData.frequency;
        pipeline.status = updatedData.status;
      }
    },
    setPipelines(state, pipelines) {
      state.pipelines = pipelines; // Set pipelines data
    },
    setFilters(state, filters) {
      state.filters = filters; // Set filters for pipeline filtering
    },
    setSource(state, source) {
      state.selectedSource = source; // Set selected source
    },
    setDestination(state, destination) {
      state.selectedDestination = destination; // Set selected destination
    }
  },
  actions: {
    // Actions to handle asynchronous operations
    async createPipelines({ commit, state }, data) {
      console.log(data)
      try {
        const response = await axios.post('http://10.0.52.179:8081/api/connections', data, {
          headers: {
            'Authorization': `Bearer ${state.token}` // Include token in request headers
          }
        });
        //console.log(response.status); // Log response status for debugging
        
      } catch (error) {
        console.error('Error fetching pipelines:', error); // Log error details
      }
    },
    async fetchPipelines({ commit, state }) {
      try {
        const response = await axios.get('http://10.0.52.179:8081/api/connections', {
          headers: {
            'Authorization': `Bearer ${state.token}` // Include token in request headers
          }
        });
        console.log("Hello");
          console.log(response.data.data); // Log response data for debugging
         commit('getPipeLines', response.data.data); // Commit response data to state
      } catch (error) {
        console.error('Error fetching pipelines:', error); // Log error details
      }
    },
    async fetchSource({ commit, state }, pipelineId) {
      try {
        // Assume updateSource is an existing function. If not, it should be defined or removed.
        updateSource({ commit }, source);
        commit('setSource', source); // Commit the source data to state
      } catch (err) {
        console.log("Fetching Source error", err); // Log error details
      }
    },
    async fetchDestination({ commit }) {
      try {
        updateDestination({ commit }, destination);
        commit('setDestination', destination); // Commit the destination data to state
      } catch (err) {
        console.log("Fetching Destination", err); // Log error details
      }
    },
    async fetchJobHistory({ commit, state }, id) {
      try {
        const response = await axios.get(`http://10.0.52.179:8081/api/connections/${id}/jobhistory`, {
          headers: {
            'Authorization': `Bearer ${state.token}` // Include token in request headers
          }
        });
        console.log(response.data); // Log response data for debugging
        commit('setJobHistory', response.data); // Commit job history data to state
      } catch (error) {
        console.error(`Error fetching job history for pipeline ${id}:`, error); // Log error details
      }
    },
    async deletePipeline({ commit, state }, pipelineId) {
      try {
        console.log(pipelineId)
        await axios.delete(`http://10.0.52.179:8081/api/connections/${pipelineId}`, {
          headers: {
            'Authorization': `Bearer ${state.token}` // Include token in request headers
          }
        });
        commit('removePipeline', pipelineId); // Commit pipeline removal to state
      } catch (error) {
        console.error('Error deleting pipeline:', error); // Log error details
      }
    },
    async saveChanges({ commit, state }, payload) {
      console.log('Payload:', payload); // Log payload for debugging
      
      try {
        const response = await axios.put(`http://10.0.52.179:8081/api/connections/${payload.id}`, payload, {
          headers: {
            'Authorization': `Bearer ${state.token}` // Include token in request headers
          }
        });
        console.log('Changes saved:', response.data); // Log saved changes for debugging
        commit('updatePipeline', response.data);
      } catch (error) {
        console.error('Error saving changes:', error.response.data); // Log detailed error information
      }
    },
    
    async getFilters({ commit, state }) {
      const params = new URLSearchParams();
      
      const { statuses, schedule_type, source_connector, destination_connector } = state.filters;
      console.log('Filters before request:', { statuses, schedule_type, source_connector, destination_connector });
    
      // Append filter parameters to the request
      if (Array.isArray(statuses) && statuses.length > 0) params.append('status', statuses.join(','));
      if (schedule_type) params.append('scheduleType', schedule_type);
      if (source_connector) params.append('source', source_connector);
      if (destination_connector) params.append('destination', destination_connector);
    
      try {
        const response = await axios.get(`http://10.0.52.179:8081/api/filter-connections?${params.toString()}`, {
          headers: {
            'Authorization': `Bearer ${state.token}` // Include token in request headers
          }
        });
        commit('setPipelines', response.data); // Commit filtered data to state
        console.log("Filters fetched successfully");
      } catch (err) {
        console.error('Error during filters', err.response ? err.response.data : err.message); // Log error details
      }
    },    
    setFilters({ commit, dispatch }, filters) {
      commit('setFilters', filters); // Commit filters to state
      dispatch('getFilters');        // Fetch filtered pipelines
    },

    async setSourceBulkPipeLine({commit,state}, data){

      console.log(data)
      try {
        const response = await axios.post(`http://10.0.52.179:8081/api/bulkConnections`, data, {
          headers: {
            'Authorization': `Bearer ${state.token}` // Include token in request headers
          }
        });
        commit('setPipelines', response.data); // Commit filtered data to state
        console.log("Filters"); // Log success message
      } catch (err) {
        console.log('Error during filters', err); // Log error details
      }
    },
    setFilters({ commit, dispatch }, filters) {
      commit('setFilters', filters); // Commit filters to state
      dispatch('getFilters');        // Fetch filtered pipelines
    },

    async setSourceBulkPipeLine({commit,state}, data){

      console.log(data)
      try {
        const response = await axios.post(`http://10.0.52.179:8081/api/bulkConnections`, data, {
          headers: {
            'Authorization': `Bearer ${state.token}`
          }
        });
        //commit('setPipelines', response.data);
        console.log("Filters")
      } catch (err) {
        console.log('Error during filters', err);
      }

    },

    async setDestinationBulkPipeLine({commit,state}, data){
      

      console.log(data)
      try {
        const response = await axios.post(`http://10.0.52.179:8081/api/bulkConnections`, data, {
          headers: {
            'Authorization': `Bearer ${state.token}`
          }
        });
        //commit('setPipelines', response.data);
        console.log("Filters")
      } catch (err) {
        console.log('Error during filters', err);
      }

    }


    
  },
  getters: {
    // Getter functions to retrieve specific data from the state
    getPipelineById: (state) => (id) => {
      return state.pipelines.find(pipeline => pipeline.id === id); // Return a specific pipeline by ID
    },
    getJobHistory: (state) => {
      return state.jobHistory; // Return job history data
    },
    allSources: (state) => {
      const sources = new Set();
      console.log(state.pipelines)
      state.pipelines.forEach(pipeline => {
        if (pipeline.source_connector) {
          sources.add(pipeline.source_connector.name); // Add unique sources to the set
        }
      });
      return Array.from(sources); // Convert set to array and return
    },
    allDestinations: (state) => {
      const destinations = new Set();
      
      state.pipelines.forEach(pipeline => {
        if (pipeline.destination_connector) {
          destinations.add(pipeline.destination_connector.name); // Add unique destinations to the set
        }
      });
      return Array.from(destinations); // Convert set to array and return
    }
  },
  plugins: [createPersistedState()], // Persist state across page reloads using a plugin
  modules: {
    source,       // Module for managing sources
    destination,  // Module for managing destinations
  }
});
