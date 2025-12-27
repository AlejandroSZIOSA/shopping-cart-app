import { type FC } from "react";
import type { Product } from "../../types/shared";
import { ItemCart } from "../ItemCart/ItemCart";

interface CartProps {
  cart: Product[];
}

export const Cart: FC<CartProps> = ({ cart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <ItemCart item={item} />
          </li>
        ))}
      </ul>
      <button>Checkout</button>
      <button>Cancel</button>
    </div>
  );
};
