import axios from 'axios';

export default {
     state: {
        sources: [],
        token : "66b333ab02f04cf3ff04be0c|QbMjwjQaDKTuMqXiI1OUAl1rGWo9ABwcSyeNWN0o0362a37b"
     },
     mutations: {
        getSources(state, res){
            // console.log("getting connector's data "+ res);
            state.sources = res;
        }
     },
     actions: {
         async fetchSources({ commit , state}){
            try{
                const response = await axios.get('http://10.0.52.179:8081/api/connectors' , {
                    headers: {
                      'Authorization': `Bearer ${state.token}` // Include token in request headers
                    }
                  });
                console.log(response.data.sources)
            commit('getSources', response.data.sources)
        }catch(err){
            console.log("Error " + err)
        }
        }
     }
};