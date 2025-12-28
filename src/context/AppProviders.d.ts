import { Product } from "../types/shared";

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
