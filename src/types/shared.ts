//Context Type definitions used across the app
export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  images?: string[];
  qty: number;
  item_total: number;
}
