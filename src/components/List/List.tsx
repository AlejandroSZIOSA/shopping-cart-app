import { type FC } from "react";
import type { Product } from "../../types/shared";
import { ProductCard } from "../ProductCard/ProductCard";
import { ProductInCart } from "../ProductInCart/ProductInCart";
import { Message } from "../Message/Message";
import type { ProductPayload } from "../../services/API.types";

//TODO: fix empty list

interface ListProps {
  list: ProductPayload[] | Product[];
  onAdd?: (product: Product) => void;
  onRemove?: (id: number) => void; //props drilling back to home X2
  variant: "show-stack-items" | "show-cart-items";
}

//Props drilling back to home
export const List: FC<ListProps> = ({ list, onAdd, onRemove, variant }) => {
  return (
    <>
      {!list || list.length === 0 ? (
        <Message messageText="Empty List" />
      ) : (
        <ol>
          {list?.map((item) => (
            <li key={item.id}>
              {variant === "show-stack-items" ? (
                // If onAdd is null or undefined, it uses the fallback.
                <ProductCard
                  product={item as ProductPayload}
                  onAdd={onAdd ?? (() => {})}
                />
              ) : (
                <ProductInCart
                  product={item as Product}
                  onRemove={onRemove ?? (() => {})}
                />
              )}
            </li>
          ))}
        </ol>
      )}
    </>
  );
};
