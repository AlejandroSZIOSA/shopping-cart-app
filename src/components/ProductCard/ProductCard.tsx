import { type FC } from "react";
import { type ProductCtx } from "../../types/shared";
import { Link } from "react-router-dom";
import { useCartContext } from "../hooks/useCartContext";
import type { Product } from "../../services/API.types";

interface CardProps {
  product: Product;
  onAdd: (product: ProductCtx) => void;
}

export const ProductCard: FC<CardProps> = ({ product, onAdd }) => {
  const { id, name, price } = product;
  const { cart_ } = useCartContext();

  // Check if the item is already in the cart
  const itemInCart = cart_?.find((item) => item.id === id);

  //create a new product object to add to cart
  const newProductInCart: ProductCtx = {
    id: product.id,
    name: product.name,
    price: product.price,
    qty: 1,
    item_total: product.price,
  };

  return (
    <div>
      <p>{name}</p>
      <p>price = {price}</p>
      <Link to={`/details/${id}`}>Details</Link>
      <button
        disabled={itemInCart ? true : false}
        onClick={() => onAdd(newProductInCart)}
      >
        Add to Cart
      </button>
    </div>
  );
};
