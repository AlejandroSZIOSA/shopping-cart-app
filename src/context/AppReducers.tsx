import type { ProductCtx } from "../types/shared";

// Action Types
type ADD_PRODUCT = {
  type: "ADD_PRODUCT";
  payload: ProductCtx;
};
type REMOVE_PRODUCT = {
  type: "REMOVE_PRODUCT";
  payload: number;
};
type UPDATE_PRODUCT = {
  type: "UPDATE_PRODUCT";
  payload: {
    id: number;
    updatedProduct: ProductCtx;
  };
};
type Action = ADD_PRODUCT | REMOVE_PRODUCT | UPDATE_PRODUCT; // discriminant onion

//1-Context Reducers
export function cartReducer(
  state: ProductCtx[] | null,
  action: Action
): ProductCtx[] {
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
