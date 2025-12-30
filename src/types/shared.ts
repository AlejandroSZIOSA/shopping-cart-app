export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  images?: string[];
  qty: number;
  item_total: number;
}
export interface ProductOrder {
  product_id: number;
  name: string;
  item_price: number;
  item_total: number;
}

export interface UserOrder {
  customer_first_name: string;
  customer_last_name: string;
  customer_address: string;
  customer_postcode: string;
  customer_city: string;
  customer_email: string;
  customer_phone: string;
  order_total: number;
  order_items: ProductOrder[];
}
