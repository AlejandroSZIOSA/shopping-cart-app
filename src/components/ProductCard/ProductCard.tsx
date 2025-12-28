import { type FC } from "react";
import { type Product } from "../../types/shared";
import { Link } from "react-router-dom";

interface CardProps {
  product: Product;
  onAdd?: (product: Product) => void;
}

export const ProductCard: FC<CardProps> = ({ product, onAdd }) => {
  const { name } = product;

  return (
    <div>
      <h2>p{name}</h2>
      <Link to={`/details/${product.id}`}>Details</Link>
      <button onClick={() => onAdd?.(product)}>Add to Cart</button>
    </div>
  );
};
