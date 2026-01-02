//Context Type definitions used across the app
export interface Product {
  id: number;
  name: string;
  price: number;
  qty: number;
  item_total: number;
}

//form validation types
export type FormValues = {
  name: string;
  lastName: string;
  address: string;
  post: string;
  city: string;
  email: string;
  phone: string;
};

export type Errors = Partial<Record<keyof FormValues, string>>;
