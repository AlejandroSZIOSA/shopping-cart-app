import { createContext, type ReactNode, useReducer } from "react";
import type { Product } from "../types/shared";

interface CartContextType {
  cart_: Product[] | null;
  addProduct_Fn: (p: Product) => void;
  removeProduct_Fn: (id: number) => void;
  updateProduct_Fn: (id: number, updatedProduct: Product) => void;
}

//discriminant types
type ADD_PRODUCT = {
  type: "ADD_PRODUCT";
  payload: Product;
};

type REMOVE_PRODUCT = {
  type: "REMOVE_PRODUCT";
  payload: number;
};

type UPDATE_PRODUCT = {
  type: "UPDATE_PRODUCT";
  payload: {
    id: number;
    updatedProduct: Product;
  };
};
type Action = ADD_PRODUCT | REMOVE_PRODUCT | UPDATE_PRODUCT; // discriminant onion

const CART_INITIAL_STATE: Product[] = [];

//Reducers
function cartReducer(state: Product[] | null, action: Action): Product[] {
  switch (action.type) {
    case "ADD_PRODUCT":
      return state ? [...state, action.payload] : [action.payload];
    case "REMOVE_PRODUCT":
      return state ? state.filter((p) => p.id !== action.payload) : [];
    case "UPDATE_PRODUCT":
      return state
        ? state.map((p) =>
            p.id === action.payload.id
              ? { ...p, ...action.payload.updatedProduct }
              : p
          )
        : [];
    default:
      return state || [];
  }
}

export const CartContext = createContext<CartContextType | null>(null);

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
  };

  return <CartContext.Provider value={ctx}>{children}</CartContext.Provider>;
};
