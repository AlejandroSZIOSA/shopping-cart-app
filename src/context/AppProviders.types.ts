import { type Product } from "../types/shared";

export interface CartContextType {
  cart_: Product[] | null;
  addProduct_Fn: (p: Product) => void;
  removeProduct_Fn: (id: number) => void;
  updateProduct_Fn: (id: number, updatedProduct: Product) => void;
}

// Action Types
export type ADD_PRODUCT = {
  type: "ADD_PRODUCT";
  payload: Product;
};

export type REMOVE_PRODUCT = {
  type: "REMOVE_PRODUCT";
  payload: number;
};

export type UPDATE_PRODUCT = {
  type: "UPDATE_PRODUCT";
  payload: {
    id: number;
    updatedProduct: Product;
  };
};
