import { createContext } from "react";
import { type Product } from "../types/shared";

export interface CartContextType {
  cart_: Product[] | null;
  addProduct_Fn: (p: Product) => void;
  removeProduct_Fn: (id: number) => void;
  updateProduct_Fn: (id: number, updatedProduct: Product) => void;
}

//2-Context
export const CartContext = createContext<CartContextType | null>(null);
