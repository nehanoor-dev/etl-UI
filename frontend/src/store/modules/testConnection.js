// store/modules/testConnection.js
import axios from "axios";

const actions = {
  async testConnection(_, formData) {
    console.log("Submitting form with data:", formData); // Debugging log
    try {
      const response = await axios.post(
        "http://10.0.52.171:8081/api/testconnection",
        formData
      );
      console.log("Connection test successful:", response.data);
      return response.data;
    } catch (error) {
      if (error.response) {
        console.error("Error response from server:", error.response.data);
        throw new Error(
          error.response.data.message || "Error testing connection."
        );
      } else {
        console.error("Error testing connection:", error.message);
        throw new Error(error.message);
      }
    }
  },
};

export default {
  namespaced: true,
  actions,
};
