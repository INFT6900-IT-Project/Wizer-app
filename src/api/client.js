import baseRequest from "./axios";

const client = {
  get: async (url, data, configs) => {
    return baseRequest(url, "GET", data, configs);
  },

  post: async (url, data, configs) => {
    return baseRequest(url, "POST", data, configs);
  },

  put: async (url, data, configs) => {
    return baseRequest(url, "PUT", data, configs);
  },

  delete: async (url, configs) => {
    return baseRequest(url, "DELETE", null, configs);
  },
};

export default client;
