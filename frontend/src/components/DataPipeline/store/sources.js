import axios from 'axios';

export default {
     state: {
        sources: []
     },
     mutations: {
        getSources(state, res){
            // console.log("getting connector's data "+ res);
            state.sources = res;
        }
     },
     actions: {
         async fetchSources({ commit }){
            try{
            const res = [{
                name : "Connector",
                connector : "GoogleSheets",
                connections : "3 connections",
            },
            {
                name : "myConnector",
                connector : "GoogleSheets",
                connections : "3 connections",
            },
            {
                name : "myConnector",
                connector : "GoogleSheets",
                connections : "3 connections",
            }
        ]
            commit('getSources', res)
        }catch(err){
            console.log("Error " + err)
        }
        }
     }
};