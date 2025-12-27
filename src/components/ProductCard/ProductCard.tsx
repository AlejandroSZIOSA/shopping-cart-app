import { type FC } from "react";
import { type Product } from "../../types/shared";
import { Link } from "react-router-dom";

interface CardProps {
  product: Product;
}

export const ProductCard: FC<CardProps> = ({ product }) => {
  const { title } = product;

  return (
    <div>
      <h2>p{title}</h2>
      <Link to={`/details/${product.id}`}>Details</Link>
      <button>Add to Cart</button>
    </div>
  );
};
