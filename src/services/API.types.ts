import type { ProductCtx } from "../types/shared";

export interface Product extends Pick<ProductCtx, "id" | "name" | "price"> {
  description?: string;
  images: { thumbnail: string; large: string };
}

// types for requests payloads
export interface ProductOrderPayload {
  product_id: number;
  name: string;
  qty: number;
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

//response types
type ResponseData<T> = {
  status: string;
  message?: string;
  data?: T;
};

type ErrorMessage = {
  [key: string]: string[];
};

type SuccessData = {
  id: number;
  user_id: number;
  order_date: string;
  customer_first_name: string;
  customer_last_name: string;
  customer_address: string;
  customer_postcode: string;
  customer_city: string;
  customer_email: string;
  customer_phone: string;
  order_total: number;
  created_at: string;
  updated_at: string;
  order_items: ProductOrderPayload[];
};

export type ProductsResponse = ResponseData<Product[]>;
export type ProductDetailsResponse = ResponseData<Product>;
export type CreateOrderResponse = ResponseData<ErrorMessage | SuccessData>;
