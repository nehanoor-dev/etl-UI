import axios from "axios";

const actions = {
  async submitForm(_, formData) {
    console.log("Submitting form with data:", formData); // Debugging log
    try {
      const response = await axios.post(
        "http://10.0.52.171:8081/api/createdestination",
        formData
      );
      console.log("Form submitted successfully:", response.data);
      return response.data; // Return response data
    } catch (error) {
      if (error.response) {
        console.error("Error response from server:", error.response.data);
        throw new Error(
          error.response.data.message || "Error submitting form."
        );
      } else {
        console.error("Error submitting form:", error.message);
        throw new Error(error.message);
      }
    }
  },
};

export default {
  namespaced: true,
  actions,
};
