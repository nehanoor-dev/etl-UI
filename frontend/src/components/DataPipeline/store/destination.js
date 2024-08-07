import axios from 'axios'

export default {

    state:{
        destination: [],
        token : "66b333ab02f04cf3ff04be0c|QbMjwjQaDKTuMqXiI1OUAl1rGWo9ABwcSyeNWN0o0362a37b",
    },
    mutations:{
        getDestination(state, res) {
            console.log("Getting destination data "+ res);
            state.destination = res;
        },
    },
    actions: {
       async fetchDestinations({ commit , state}){
        try{
            const response = await axios.get('http://10.0.52.179:8081/api/connectors' , {
                headers: {
                  'Authorization': `Bearer ${state.token}` // Include token in request headers
                }
              });
              console.log(response.data.destinations)
        //     const data = [
        //     {
        //         name: "myDestination",
        //         connector: {name:"MyConnector", image:""},
        //         connectionCount: "0 connections",
        //     },
        //     {
        //         name: "myDestination",
        //         connector: {name:"MyConnector", image:""},
        //         connectionCount: "6 connections",
        //     },
        // ]
        commit('getDestination', response.data.destinations)
    }catch(err){
            console.log("Getting error by fetching destination ", err.message)
        }
       }
    }

};