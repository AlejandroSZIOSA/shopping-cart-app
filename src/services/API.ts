import axios from "axios";

import { VITE_BASE_URL as BASE_URL } from "../utils/constants";
import { type DataReq } from "./API.types";

// Create a new axios instance
const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
  },
  timeout: 10000, // 10 seconds
});

/**
 * Make a generic HTTP GET request
 *
 * @param endpoint Endpoint to get
 */
export const get = async <T>(endpoint: string) => {
  const response = await instance.get<T>(endpoint);
  return response.data;
};

export const getProducts = async () => {
  return get<DataReq>("/products");
};
