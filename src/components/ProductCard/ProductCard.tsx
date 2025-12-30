import { type FC } from "react";
import { type Product } from "../../types/shared";
import { Link } from "react-router-dom";
import { useCartContext } from "../hooks/useCartContext";

interface CardProps {
  product: Product;
  onAdd: (product: Product) => void;
}

export const ProductCard: FC<CardProps> = ({ product, onAdd }) => {
  const { id, name, price } = product;
  const { cart_ } = useCartContext();

  // Check if the item is already in the cart
  const itemInCart = cart_?.find((item) => item.id === id);

  return (
    <div>
      <p>{name}</p>
      <p>price = {price}</p>
      <Link to={`/details/${product.id}`}>Details</Link>
      <button
        disabled={itemInCart ? true : false}
        onClick={() => onAdd(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};
