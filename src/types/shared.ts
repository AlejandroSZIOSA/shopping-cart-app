export interface Product {
  id: number;
  name: string;
  item_price: number;
  description?: string;
  images?: string[];
  qty: number;
  item_total: number;
}

export interface Order {
  name: string;
  lastname: string;
  address: string;
  postalcode: string;
  city: string;
  email: string;
  phone: string;
  orderTotalPrice: number;
  orderItems: Product[];
}
