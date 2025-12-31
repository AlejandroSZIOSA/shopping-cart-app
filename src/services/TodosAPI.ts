/**
 * All communication with the backend REST-API (`json-server`)
 */

import axios from "axios";
import type {
  CreateTodoPayload,
  Todo,
  UpdateTodoPayload,
} from "./TodosAPI.types";

import { VITE_BASE_URL as BASE_URL } from "../utils/constants";

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

/**
 * Make a generic HTTP POST request
 *
 * @param endpoint Endpoint to POST to
 * @param data Payload to POST
 */
export const post = async <Response, Payload>(
  endpoint: string,
  data: Payload
) => {
  const response = await instance.post<Response>(endpoint, data);
  return response.data;
};

/**
 * Get todos from API using axios 🤘🏻
 */
export const getTodos = async () => {
  return get<Todo[]>("/todos"); // "http://localhost:3000/todos"
};

/**
 * Get a single todo from the API
 *
 * @param id
 */
export const getTodo = async (id: number) => {
  return get<Todo>("/todos/" + id); // "http://localhost:3000/todos/42"
};

/**
 * Create a todo in the API using axios 😎
 *
 * @param payload
 */
export const createTodo = async (payload: CreateTodoPayload) => {
  return post<Todo, CreateTodoPayload>("/todos", payload);
};

/**
 * Update a todo in the API
 *
 * @param id
 * @param payload
 */
export const updateTodo = async (id: number, payload: UpdateTodoPayload) => {
  const response = await instance.patch<Todo>("/todos/" + id, payload);
  return response.data;
};

/**
 * Delete a todo from the API
 *
 * @param id
 */
export const deleteTodo = async (id: number) => {
  await instance.delete("/todos/" + id);
  return true;
};
