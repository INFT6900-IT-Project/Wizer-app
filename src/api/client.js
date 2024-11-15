import baseRequest from "./axios";

const client = {
  get: async (url, data = {}, configs) => {
    return baseRequest(url, "GET", data, configs);
  },

  post: async (url, data, configs) => {
    return baseRequest(url, "POST", data, configs);
  },

  put: async (url, data, configs) => {
    return baseRequest(url, "PUT", data, configs);
  },

  delete: async (url, data = null, configs) => {
    if (Array.isArray(data)) {
      const queryString = data.join(",");
      data = {user_ids: queryString};
    } else if (typeof data === "string" || typeof data === "number") {
      url += `/${data}`;
    }
    return baseRequest(url, "DELETE", data, configs);
  },
};

export default client;
