import { type FC } from "react";
import { List } from "../List/List";
import { useCartContext } from "../hooks/useCartContext";
import { useNavigate } from "react-router-dom";
import { Message } from "../Message/Message";

import styles from "./CartShowing.module.css";
import { CustomBtn } from "../UI/CustomBtn/CustomBtn";

interface CartShowingProps {
  onClose: () => void;
}

export const CartShowing: FC<CartShowingProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const { cart_, removeProduct_Fn } = useCartContext();

  const handleRemoveFromCart = (id: number) => {
    removeProduct_Fn(id);
  };

  //get total price of items in cart
  const totalPrice =
    cart_?.reduce((acc, product) => acc + (product.item_total ?? 0), 0) ?? 0;

  return (
    <div className={styles.cartRootContainer}>
      {cart_ === undefined || cart_?.length === 0 ? (
        <>
          <Message messageText="Empty Cart">
            <CustomBtn variant="primary" color="blue" onClick={onClose}>
              Back
            </CustomBtn>
          </Message>
        </>
      ) : (
        <>
          <List
            list={cart_ || []}
            variant="show-cart-items"
            onRemove={handleRemoveFromCart}
          />

          <section className={styles.summarySection}>
            <p>total Suma {totalPrice}</p>
            <div className={styles.buttonsContainer}>
              <CustomBtn variant="primary" color="blue" onClick={onClose}>
                Back
              </CustomBtn>
              <CustomBtn
                variant="primary"
                color="black"
                onClick={() => {
                  navigate("/checkout");
                }}
              >
                Checkout
              </CustomBtn>
            </div>
          </section>
        </>
      )}
    </div>
  );
};
