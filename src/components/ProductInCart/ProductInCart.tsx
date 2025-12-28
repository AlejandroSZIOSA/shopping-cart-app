import { type FC } from "react";
import type { Product } from "../../types/shared";

interface ItemCartProps {
  product: Product;
  onRemove?: (id: number) => void; //props drilling back to home X2
}

export const ProductInCart: FC<ItemCartProps> = ({ product, onRemove }) => {
  return (
    <div>
      <p>{product.name}</p>
      <button> - </button>
      <button> + </button>
      <button onClick={() => onRemove?.(product.id)}> remove </button>
    </div>
  );
};
