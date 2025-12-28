export interface Product {
  id: number;
  name: string;
  price?: number;
  description?: string;
  images?: string[];
  qty?: number;
  totalPrice?: number;
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
