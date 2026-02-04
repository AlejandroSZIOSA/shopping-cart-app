import { type FC } from "react";
import type { ProductCtx } from "../../types/shared";
import { ProductCard } from "../ProductCard/ProductCard";
import { ItemInCart } from "../ItemInCart/ItemInCart";
import { Message } from "../Message/Message";
import type { Product } from "../../services/API.types";

import styles from "./List.module.css";

interface ListProps {
  list: Product[] | ProductCtx[];
  variant: "show-stack-products" | "show-cart-items" | "show-aside-cart-items";
  onAdd?: (product: ProductCtx) => void;
  onRemove?: (id: number) => void; //props drilling back to home X2
}

//Props drilling back to home
export const List: FC<ListProps> = ({ list, onAdd, onRemove, variant }) => {
  return (
    <>
      {!list || list.length === 0 ? (
        <Message messageText="Empty List" variant="info" />
      ) : (
        <ol
          className={
            variant === "show-stack-products"
              ? styles.olProducts
              : styles.olCartItems
          }
        >
          {list.map((item) => (
            <li key={item.id}>
              {variant === "show-stack-products" ? (
                // If onAdd is null or undefined, it uses the fallback.
                <ProductCard
                  product={item as Product}
                  onAdd={onAdd ?? (() => {})}
                />
              ) : variant === "show-cart-items" ? (
                <ItemInCart
                  product={item as ProductCtx}
                  onRemove={onRemove ?? (() => {})}
                />
              ) : (
                <ItemInCart
                  variant="aside-cart-item"
                  product={item as ProductCtx}
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
