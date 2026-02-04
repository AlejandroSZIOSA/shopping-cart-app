import { type FC } from "react";
import { List } from "../List/List";
import { useCartContext } from "../hooks/useCartContext";
import { Message } from "../Message/Message";
import { GlobalBtn } from "../buttons/GlobalBtn/GlobalBtn";
import { SubTotalSection } from "../SubTotalSection/SubTotalSection";

import styles from "./Cart.module.css";

interface CartProps {
  onClose: () => void;
}

export const Cart: FC<CartProps> = ({ onClose }) => {
  const { cart_, removeProduct_Fn } = useCartContext();

  const handleRemoveFromCart = (id: number) => {
    removeProduct_Fn(id);
  };

  //get total price of items in cart
  const totalPrice =
    cart_?.reduce((acc, product) => acc + (product.item_total ?? 0), 0) ?? 0;

  return (
    <div className={styles.cartRootContainer}>
      {cart_ === null || cart_?.length === 0 ? (
        <Message messageText="Empty Cart" variant="info">
          <GlobalBtn variant="primary" color="blue" onClick={onClose}>
            Back
          </GlobalBtn>
        </Message>
      ) : (
        <>
          <List
            list={cart_ || []}
            variant="show-cart-items"
            onRemove={handleRemoveFromCart}
          />

          <SubTotalSection
            variant="regular-cart-subtotal"
            onClose={onClose}
            totalPrice={totalPrice}
          />
        </>
      )}
    </div>
  );
};
