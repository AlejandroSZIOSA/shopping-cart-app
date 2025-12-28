import { type FC } from "react";
import type { Product } from "../../types/shared";
import { ProductCard } from "../ProductCard/ProductCard";
import { ProductInCart } from "../ProductInCart/ProductInCart";

//TODO: fix empty list

interface ListProps {
  list?: Product[];
  onAdd?: (product: Product) => void;
  onRemove?: (id: number) => void; //props drilling back to home X2
  variant: "show-stack" | "show-cart";
}

//Props drilling back to home
export const List: FC<ListProps> = ({ list, onAdd, onRemove, variant }) => {
  return (
    <ol>
      {list?.map((item) => (
        <li key={item.id}>
          {variant === "show-stack" ? (
            <ProductCard product={item} onAdd={onAdd} />
          ) : (
            <ProductInCart product={item} onRemove={onRemove} />
          )}
        </li>
      ))}
    </ol>
  );
};
