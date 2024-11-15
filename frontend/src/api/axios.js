import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000";
const REQUEST_TIMEOUT = 30000;

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  timeout: REQUEST_TIMEOUT,
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally here, e.g., log out user on 401, show messages, etc.
    return Promise.reject(error);
  }
);

const formatRequestParams = (params) => {
  if (params === null) return params;
  const { page, limit, order, sort, ...otherParams } = params;
  return {
    _page: page,
    _limit: limit,
    _order: order,
    _sort: sort,
    ...Object.keys(otherParams)
      .filter(
        (key) =>
          otherParams[key] !== null &&
          otherParams[key] !== undefined &&
          otherParams[key] !== ""
      )
      .reduce((obj, key) => {
        obj[key] = otherParams[key];
        return obj;
      }, {}),
  };
};

const baseRequest = async (url, method, data, configs) => {
  try {
    const newConfigs = {
      ...configs,
      url: API_BASE_URL + url,
      method,
    };

    if (method === "GET") {
      newConfigs.params = formatRequestParams(data);
    } else {
      newConfigs.data = data;
    }

    const res = await axiosInstance.request(newConfigs);
    return [res.data.data || res.data, undefined];
  } catch (error) {
    const err = error;
    const requestError = {};

    if (err.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx

      const responseData = err.response.data;
      requestError.message = responseData.detail;
      requestError.code = String(err.response.status);
      requestError.errors = responseData.errors;
    } else if (err.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      requestError.message = err.detail;
    } else {
      // Something happened in setting up the request that triggered an Error
      requestError.message = err.detail;
    }

    return [undefined, requestError];
  }
};

export default baseRequest;
