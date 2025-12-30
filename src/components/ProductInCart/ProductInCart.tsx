import { type FC } from "react";
import type { Product } from "../../types/shared";
import { useCartContext } from "../hooks/useCartContext";

interface ItemCartProps {
  product: Product;
  onRemove: (id: number) => void; //props drilling back to home X2
}

export const ProductInCart: FC<ItemCartProps> = ({ product, onRemove }) => {
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
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <p>{name}</p>
      <button onClick={onDecreaseQty}> - </button>
      <p>{qty}</p>
      <button onClick={onIncreaseQty}> + </button>
      <button onClick={() => onRemove(id)}> remove </button>
    </div>
  );
};
