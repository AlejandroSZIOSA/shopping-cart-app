import axios from "axios";

import { VITE_BASE_URL } from "../utils/constants";
import type {
  CreateOrderResponse,
  ProductDetailsResponse,
  ProductsResponse,
  UserOrderPayload,
} from "./API.types";

const USER = import.meta.env.VITE_API_KEY;

// Create a new axios instance
const instance = axios.create({
  baseURL: VITE_BASE_URL,
  headers: {
    Accept: "application/json",
  },
  timeout: 3000, // 3 seconds
});

// Make a generic HTTP GET request
export const get = async <T>(endpoint: string) => {
  const response = await instance.get<T>(endpoint);
  return response.data;
};

export const getProducts = async () => {
  return get<ProductsResponse>("/products");
};

export const getProductDetails = async (id: number) => {
  return get<ProductDetailsResponse>("/products/" + id);
};

// Make a generic HTTP POST request
export const post = async <Response, Payload>(
  endpoint: string,
  data: Payload
) => {
  const response = await instance.post<Response>(endpoint, data);
  return response.data;
};

export const createOrder = async (payload: UserOrderPayload) => {
  return post<CreateOrderResponse, UserOrderPayload>(
    `users/${USER}/orders`,
    payload
  );
};
