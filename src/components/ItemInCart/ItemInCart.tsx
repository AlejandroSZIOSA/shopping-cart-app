import { type FC } from "react";
import type { ProductCtx } from "../../types/shared";
import { useCartContext } from "../hooks/useCartContext";

import styles from "./ItemInCart.module.css";

interface ItemCartProps {
  product: ProductCtx;
  onRemove: (id: number) => void; //props drilling back to home X2
}

export const ItemInCart: FC<ItemCartProps> = ({ product, onRemove }) => {
  const { id, name, price, qty } = product;
  const { updateProduct_Fn } = useCartContext();

  const onIncreaseQty = () => {
    const newQty = (qty ?? 0) + 1;
    const newProduct = {
      ...product,
      qty: newQty,
      item_total: (price ?? 0) * newQty,
    };
    updateProduct_Fn(id, newProduct);
  };

  const onDecreaseQty = () => {
    if ((product.qty ?? 0) > 1) {
      const newQty = (qty ?? 0) - 1;
      const newProduct = {
        ...product,
        qty: newQty,
        item_total: (price ?? 0) * newQty,
      };
      updateProduct_Fn(id, newProduct);
    } else {
      onRemove(id);
    }
  };

  return (
    <div className={styles.itemInCartContainer}>
      <div className={styles.itemInCartInnerContainer}>
        <p>{name}</p>
        <div>
          <button onClick={onDecreaseQty}> - </button>
          <p>{qty}</p>
          <button onClick={onIncreaseQty}> + </button>
        </div>
      </div>
      <button onClick={() => onRemove(id)}> remove </button>
    </div>
  );
};
