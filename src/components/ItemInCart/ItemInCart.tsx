import { type FC } from "react";
import type { ProductCtx } from "../../types/shared";
import { useCartContext } from "../hooks/useCartContext";
import { GlobalBtn } from "../buttons/GlobalBtn/GlobalBtn";

import styles from "./ItemInCart.module.css";

interface ItemCartProps {
  product: ProductCtx;
  variant?: "aside-cart-item";
  onRemove: (id: number) => void; //props drilling back to home X2
}

export const ItemInCart: FC<ItemCartProps> = ({
  variant,
  product,
  onRemove,
}) => {
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
    <div
      className={
        variant === "aside-cart-item"
          ? `${styles.itemInCartContainer} ${styles.itemInCartContainerAside}`
          : styles.itemInCartContainer
      }
    >
      <p>{name}</p>
      {variant === "aside-cart-item" && (
        <span>
          <strong>${price}</strong>
        </span>
      )}
      <div
        className={
          variant === "aside-cart-item"
            ? `${styles.itemInCartInnerContainer} ${styles.itemInCartInnerContainerAside}`
            : styles.itemInCartInnerContainer
        }
      >
        {variant !== "aside-cart-item" && <span> ${price}</span>}
        <div className={styles.quantityControlsButtonsContainer}>
          <GlobalBtn onClick={onDecreaseQty} variant="secondary" color="black">
            -
          </GlobalBtn>
          <p style={{ padding: "0 4px" }}>{qty}</p>
          <GlobalBtn onClick={onIncreaseQty} variant="secondary" color="black">
            +
          </GlobalBtn>
        </div>

        <GlobalBtn onClick={() => onRemove(id)} variant="secondary" color="red">
          🗑
        </GlobalBtn>
      </div>
    </div>
  );
};
