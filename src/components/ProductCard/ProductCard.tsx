import { type FC } from "react";
import { type ProductCtx } from "../../types/shared";
import { Link } from "react-router-dom";
import { useCartContext } from "../hooks/useCartContext";
import type { Product } from "../../services/API.types";
import { BASE_IMAGE_URL } from "../../utils/constants";

import styles from "./ProductCard.module.css";
import { CustomBtn } from "../UI/CustomBtn/CustomBtn";

interface CardProps {
  product: Product;
  onAdd: (product: ProductCtx) => void;
}

export const ProductCard: FC<CardProps> = ({ product, onAdd }) => {
  const { id, name, price, images } = product;
  const { thumbnail } = images;

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

  /*   console.log(thumbnail); */
  return (
    <div className={styles.cardContainer}>
      <img src={BASE_IMAGE_URL + thumbnail} alt={name} />
      <p>
        <strong>{name}</strong>
      </p>
      <div className={styles.cardInnerContainer}>
        <Link to={`/details/${id}`}>Details</Link>
        <p>price = {price} KR</p>
        <div>
          <CustomBtn
            variant="primary"
            color="blue"
            isDisabled={itemInCart ? true : false}
            onClick={() => onAdd(newProductInCart)}
          >
            Add to Cart
          </CustomBtn>
        </div>
      </div>
    </div>
  );
};
