import type { ProductCtx } from "../types/shared";

export interface Product extends Pick<ProductCtx, "id" | "name" | "price"> {
  description?: string;
  images?: string[];
}

export interface Data {
  status: string;
  data: Product[] | Product;
}

// New types for orders
export interface ProductOrderPayload {
  product_id: number;
  name: string;
  item_price: number;
  item_total: number;
}

export interface UserOrderPayload {
  customer_first_name: string;
  customer_last_name: string;
  customer_address: string;
  customer_postcode: string;
  customer_city: string;
  customer_email: string;
  customer_phone: string;
  order_total: number;
  order_items: ProductOrderPayload[];
}

/* export type CreateTodoPayload = Omit<Product, "id">;
export type UpdateTodoPayload = Partial<CreateTodoPayload>; */

export type ResponseData<T> = {
  status: string;
  message: string;
  data: T;
};

export type productsResponse = ResponseData<Product[]>;
