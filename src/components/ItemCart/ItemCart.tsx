import { type FC } from "react";
import type { Product } from "../../types/shared";

interface ItemCartProps {
  item: Product;
}

export const ItemCart: FC<ItemCartProps> = ({ item }) => {
  return (
    <div>
      <p>{item.title}</p>
      <button> - </button>
      <button> + </button>
      <button> remove </button>
    </div>
  );
};
