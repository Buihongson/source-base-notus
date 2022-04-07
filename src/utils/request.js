import axios from "axios";
import qs from "qs";
import humps from "humps";
import { API_URL } from "constant";
import { toast } from "react-toastify";

export const request = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
  paramsSerializer: (params) =>
    qs.stringify(params, { arrayFormat: "brackets" }),
});

request.interceptors.request.use(
  (config) => {
    config.params = humps.decamelizeKeys(config.params);
    config.data = humps.decamelizeKeys(config.data);

    const accessToken = ""; // Get accessToken
    if (accessToken) {
      // config.headers['x-auth-token'] = accessToken;
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return humps.camelizeKeys(response.data);
  },
  (error) => {
    const errorResponse = error?.response?.errorRes;

    return toast("error", errorResponse?.message || "Unknown error");
  }
);
