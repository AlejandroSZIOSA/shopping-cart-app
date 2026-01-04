import { createContext } from "react";
import { type ProductCtx } from "../types/shared";

export interface CartContextType {
  cart_: ProductCtx[] | null;
  addProduct_Fn: (p: ProductCtx) => void;
  removeProduct_Fn: (id: number) => void;
  updateProduct_Fn: (id: number, updatedProduct: ProductCtx) => void;
}

//2-Context
export const CartContext = createContext<CartContextType | null>(null);
