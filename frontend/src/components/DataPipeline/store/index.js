import { createStore } from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";
import source from "./sources";
import destination from "./destination";

export default createStore({
    state:{
        pipelines : [],
        token : "66b30f1c02f04cf3ff04be0b|Apk0xtGOT3EeuneNytaQ80Ps76Ncl4gxzXX6lYJuf95822b3",
        jobHistory: [],
    },
    mutations:{
        getPipeLines(state,response){
            state.pipelines=response;
        },
        setJobHistory(state, response) {
          state.jobHistory = response ;
        },
        removePipeline(state, pipelineId) {
          state.pipelines = state.pipelines.filter(pipeline => pipeline.id !== pipelineId);
        },
        updatePipeline(state, pipelineId){
          state.pipelines = state.pipelines.filter(pipeline => pipeline.id !== pipelineId);
        }
    },
    actions:{
        async fetchPipelines({ commit , state}) {
            try {
             const response = await axios.get('http://10.0.52.179:8081/api/connections' , {
              headers: {
                'Authorization': `Bearer ${state.token}` // Include token in request headers
              }
            });
            console.log("Hello")
            console.log(response.data);
             
              commit('getPipeLines', response.data);
            } catch (error) {
              console.error('Error fetching pipelines:', error);
            }
          },
          async fetchJobHistory({ commit, state }, id) {
            try {
              const response = await axios.get(`http://10.0.52.179:8081/api/connections/${id}/jobhistory`, {
                headers: {
                  'Authorization':`Bearer ${state.token}`// Include token in request headers
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
            //     ]
              commit('setJobHistory', response.data );
            } catch (error) {
              console.error(`Error fetching job history for pipeline ${id}:`, error);
            }
          },
          async deletePipeline({ commit , state }, pipelineId) {
            try {
              await axios.delete(`http://10.0.52.179:8081/api/connection/${pipelineId}`, {
                headers: {
                  'Authorization':`Bearer ${state.token}`// Include token in request headers
                }
              });
              commit('removePipeline', pipelineId);
            } catch (error) {
              console.error('Error deleting pipeline:', error);
            }
          },
          async saveChanges ({commit}, pipelineId, connectionName, scheduleType, replicationFrequency)  {
            console.log(connectionName)
            const payload = {
              connectionName: connectionName.value,
              scheduleType: scheduleType.value,
              replicationFrequency: replicationFrequency.value,
            };
          
            try {
              const response = await axios.put('http://10.0.52.179:8081/api/connections/66b0ef1302f04cf3ff04bdf8', payload,{
                headers: {
                  'Authorization':`Bearer ${state.token}`// Include token in request headers
                }
              });
              console.log('Changes saved:', response.data);
              commit('updatePipeline',pipelineId)
            } catch (error) {
              console.error('Error saving changes:', error);
            }
          }
        },
    getters: {
      getPipelineById: (state) => (id) => {
        return state.pipelines.find(pipeline => pipeline.id === id);
      },
      getJobHistory: (state) => {
        return state.jobHistory;
      }
    },

    plugins: [createPersistedState()],

    modules:{
     source,
     destination,
    }

})