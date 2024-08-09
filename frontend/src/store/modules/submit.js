import axios from "axios";

const actions = {
  // Action to submit form data to the server
  async submitForm(_, formData) {
    console.log("Submitting form with data:", formData); // Debugging log to check the form data being submitted

    try {
      // Make a POST request to submit the form data
      const response = await axios.post(
        "http://10.0.52.171:8081/api/createdestination",
        formData
      );

      // Log the successful response for debugging
      console.log("Form submitted successfully:", response.data);

      // Return the response data from the server
      return response.data;
    } catch (error) {
      // Handle errors that occur during the request
      if (error.response) {
        // Server responded with an error status code
        console.error("Error response from server:", error.response.data);
        // Throw a new error with the message from the server response or a default message
        throw new Error(
          error.response.data.message || "Error submitting form."
        );
      } else {
        // No response from the server (e.g., network issues)
        console.error("Error submitting form:", error.message);
        // Throw a new error with the message
        throw new Error(error.message);
      }
    }
  },
};

export default {
  namespaced: true, // Enable namespacing for this module
  actions,
};
