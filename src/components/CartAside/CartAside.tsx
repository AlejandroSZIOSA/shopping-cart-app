import { type FC } from "react";
import { List } from "../List/List";
import { useCartContext } from "../hooks/useCartContext";
import { SubTotalSection } from "../SubTotalSection/SubTotalSection";
import { Message } from "../Message/Message";

import styles from "./CartAside.module.css";

export const CartAside: FC = () => {
  const { cart_, removeProduct_Fn } = useCartContext();

  const handleRemoveFromCart = (id: number) => {
    removeProduct_Fn(id);
  };

  //get total price of items in cart
  const totalPrice =
    cart_?.reduce((acc, product) => acc + (product.item_total ?? 0), 0) ?? 0;

  return (
    <div className={styles.cartAsideContainer}>
      <p style={{ marginTop: "1rem", fontSize: "larger" }}>
        <strong>Your Cart</strong>
      </p>
      {cart_ === null || cart_?.length === 0 ? (
        <Message messageText="Empty Cart" variant="info"></Message>
      ) : (
        <>
          <List
            list={cart_ || []}
            variant="show-aside-cart-items"
            onRemove={handleRemoveFromCart}
          />
          <SubTotalSection
            variant="aside-cart-subtotal"
            totalPrice={totalPrice}
          />
        </>
      )}
    </div>
  );
};
