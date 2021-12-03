import axios from "axios";
import env from "utils/env";
import { injectToken } from "./middlewares";

// Configure base http client
const http = axios.create({
  baseURL: env.API_BASE,
});

// Add token injector middleware
http.interceptors.request.use(injectToken);

/**
 *
 * @param {string} endpoint - Path to resource endpoint
 * @param {import("axios").AxiosRequestConfig} extraConfig - additional axios settings for the request
 * @returns {Promise<import("axios").AxiosResponse<any>>}
 */
export const fetchGetRequest = (endpoint, extraConfig = {}) => {
  return http.get(endpoint, { ...extraConfig });
};

/**
 *
 * @param {string} endpoint - Path to resource endpoint
 * @param {any} payload - Required API inputs
 * @param {import("axios").AxiosRequestConfig} extraConfig - additional axios settings for the request
 * @returns {Promise<import("axios").AxiosResponse<any>>}
 */
export const fetchPostRequest = (endpoint, payload, extraConfig = {}) => {
  return http.post(endpoint, payload, { ...extraConfig });
};

/**
 *
 * @param {string} endpoint - Path to resource endpoint
 * @param {any} payload - Required API inputs
 * @param {import("axios").AxiosRequestConfig} extraConfig - additional axios settings for the request
 * @returns {Promise<import("axios").AxiosResponse<any>>}
 */
export const fetchMultipartPostRequest = (endpoint, payload, extraConfig = {}) => {
  return http.post(endpoint, payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    ...extraConfig,
  });
};

/**
 *
 * @param {string} endpoint - Path to resource endpoint
 * @param {any} payload - Required API inputs
 * @param {import("axios").AxiosRequestConfig} extraConfig - additional axios settings for the request
 * @returns {Promise<import("axios").AxiosResponse<any>>}
 */
export const fetchPutRequest = (endpoint, payload, extraConfig = {}) => {
  return http.put(endpoint, payload, { ...extraConfig });
};

/**
 *
 * @param {string} endpoint - Path to resource endpoint
 * @param {any} payload - Required API inputs
 * @param {import("axios").AxiosRequestConfig} extraConfig - additional axios settings for the request
 * @returns {Promise<import("axios").AxiosResponse<any>>}
 */
export const fetchMultipartPutRequest = async (
  endpoint,
  payload,
  extraConfig = {}
) => {
  try {
    return await http.put(endpoint, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      ...extraConfig,
    });
  } catch (error) {
    return error.response;
  }
};

/**
 *
 * @param {string} endpoint - Path to resource endpoint
 * @param {any} payload - Required API inputs
 * @param {import("axios").AxiosRequestConfig} extraConfig - additional axios settings for the request
 * @returns {Promise<import("axios").AxiosResponse<any>>}
 */
export const fetchPatchRequest = (endpoint, payload, extraConfig = {}) => {
  return http.patch(endpoint, payload, { ...extraConfig });
};

/**
 *
 * @param {string} endpoint - Path to resource endpoint
 * @param {any} payload - Required API inputs
 * @param {import("axios").AxiosRequestConfig} extraConfig - additional axios settings for the request
 * @returns {Promise<import("axios").AxiosResponse<any>>}
 */
export const fetchMultipartPatchRequest = async (
  endpoint,
  payload,
  extraConfig = {}
) => {
  try {
    return await http.patch(endpoint, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      ...extraConfig,
    });
  } catch (error) {
    return error.response;
  }
};

/**
 *
 * @param {string} endpoint - Path to resource endpoint
 * @param {import("axios").AxiosRequestConfig} extraConfig - additional axios settings for the request
 * @returns {Promise<import("axios").AxiosResponse<any>>}
 */
export const fetchDeleteRequest = (endpoint, extraConfig = {}) => {
  return http.delete(endpoint, { ...extraConfig });
};
