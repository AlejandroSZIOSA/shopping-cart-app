import { type ReactNode, useReducer } from "react";
import { CartContext } from "./CartContext";
import { type CartContextType } from "./CartContext";
import type { ProductCtx } from "../types/shared";
import { cartReducer } from "./AppReducers";

const CART_INITIAL_STATE: ProductCtx[] = [];

//3-Context Provider
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartState, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  const ctx: CartContextType = {
    cart_: cartState,
    addProduct_Fn(v) {
      dispatch({ type: "ADD_PRODUCT", payload: v });
    },
    removeProduct_Fn(id) {
      dispatch({ type: "REMOVE_PRODUCT", payload: id });
    },
    updateProduct_Fn(id, updatedProduct) {
      dispatch({
        type: "UPDATE_PRODUCT",
        payload: { id, updatedProduct },
      });
    },
    clearCart_Fn() {
      dispatch({ type: "CLEAR_CART" });
    },
  };

  return <CartContext.Provider value={ctx}>{children}</CartContext.Provider>;
};
