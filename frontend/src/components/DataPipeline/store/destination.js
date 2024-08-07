import axios from 'vuex'

export default {

    state:{
        destination: [],
    },
    mutations:{
        getDestination(state, res) {
            console.log("Getting destination data "+ res);
            state.destination = res;
        },
    },
    actions: {
       async fetchDestinations({ commit }){
        try{
            const data = [
            {
                name: "myDestination",
                connector: {name:"MyConnector", image:""},
                connectionCount: "0 connections",
            },
            {
                name: "myDestination",
                connector: {name:"MyConnector", image:""},
                connectionCount: "6 connections",
            },
        ]
        commit('getDestination', data)
    }catch(err){
            console.log("Getting error by fetching destination ", err.message)
        }
       }
    }

};