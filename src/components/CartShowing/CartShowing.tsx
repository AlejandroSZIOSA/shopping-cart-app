import { type FC } from "react";
import { List } from "../List/List";
import { useCartContext } from "../hooks/useCartContext";
import { useNavigate } from "react-router-dom";
import { Message } from "../Message/Message";

interface CartShowingProps {
  onClose: () => void;
}

export const CartShowing: FC<CartShowingProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const { cart_, removeProduct_Fn } = useCartContext();

  const handleRemoveFromCart = (id: number) => {
    removeProduct_Fn(id);
  };

  const totalPrice =
    cart_?.reduce((acc, product) => acc + (product.item_total ?? 0), 0) ?? 0;

  return (
    <div>
      {cart_ === undefined || cart_?.length === 0 ? (
        <>
          <Message messageText="Empty Cart">
            <button onClick={onClose}>Back</button>
          </Message>
        </>
      ) : (
        <>
          <List
            list={cart_ || []}
            variant="show-cart-items"
            onRemove={handleRemoveFromCart}
          />

          <section>
            <p>total Suma {totalPrice}</p>
          </section>

          <div>
            <button onClick={onClose}>Back</button>
            <button
              onClick={() => {
                navigate("/checkout");
              }}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};
