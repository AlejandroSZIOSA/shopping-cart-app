import { type FC } from "react";
import { List } from "../List/List";
import { useCartContext } from "../hooks/useCartContext";
import { Message } from "../Message/Message";

interface CartShowingProps {
  onClose: () => void;
}

export const CartShowing: FC<CartShowingProps> = ({ onClose }) => {
  const { cart_ } = useCartContext();

  const handleRemoveFromCart = (id: number) => {
    console.log(id);
  };

  return (
    <div>
      {cart_?.length === 0 ? (
        <>
          <Message messageText="Empty Cart List" />
          <button onClick={onClose}>Back</button>
        </>
      ) : (
        <>
          <List
            list={cart_ || []}
            variant="show-cart"
            onRemove={handleRemoveFromCart}
          />
          <div>
            <button onClick={onClose}>Back</button>
            <button>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};
