// store/modules/destination.js
import axios from "axios";

const state = {
  destination: null,
  fields: {},
  formData: {},
  mystate: 1,
};

const getters = {
  destination: (state) => state.destination,
  fields: (state) => state.fields,
  getMystate: (state) => state.mystate,
  formData: (state) => state.formData,
};

const actions = {
  //change the name of function
  async fetchExistingDestination({ commit }, name) {
    try {
      const response = await axios.get(
        `http://10.0.52.171:8081/api/generate-static-form/${name}`
      );
        //change the name of function
      commit("setExistingDestination", response.data);
    } catch (error) {
      console.error("Error fetching destination:", error);
    }
  },
  setFormDataAction({ commit }, payload) {
    commit("setFormData", payload);
  },
};

const mutations = {
    setExistingDestination(state, data) {
    console.log("setDestination mutation wor=king");
    state.destination = data;
    state.formData.connector = data.connector;
    state.fields = Object.keys(data).reduce((acc, key) => {
      if (key !== "connector" && key !== "name") {
        if (data[key] === "string") {
          acc[key] = "string";
        } else if (data[key] === "integer") {
          acc[key] = "integer";
        }
      }
      return acc;
    }, {});
  },

  setFormData(state, data) {
    state.formData[data.key] = data.value;
    console.log("state", state);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
