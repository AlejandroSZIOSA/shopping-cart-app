import { useEffect, useState, type FC } from "react";
import { type ProductCtx } from "../../types/shared";
import { Header } from "../../components/Header/Header";
import { useCartContext } from "../../components/hooks/useCartContext";
import { CartShowing } from "../../components/CartShowing/CartShowing";
import { List } from "../../components/List/List";
import { Message } from "../../components/Message/Message";

import * as ProductsAPI from "../../services/API";
import type { Product } from "../../services/API.types";

import styles from "./Home.module.css";

export const HomePage: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { cart_, addProduct_Fn } = useCartContext();
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      const res = await ProductsAPI.getProducts();
      const { data } = res;
      //guard for data
      if (data) {
        setProducts(data);
      }
      setIsLoading(false);
    };
    getProducts();
  }, []);

  const handleAddToCart = (product: ProductCtx) => {
    product.qty = 1;
    product.item_total = product.price * product.qty;
    addProduct_Fn(product);
  };

  return (
    <>
      <Header subText={openCart ? "Your Cart" : "Product List"}>
        <button onClick={() => setOpenCart(!openCart)}>
          Cart: {cart_?.length ?? 0}
        </button>
      </Header>
      <main>
        {openCart ? (
          <CartShowing onClose={() => setOpenCart(false)} />
        ) : (
          <div className={styles.stockListContainer}>
            {isLoading ? (
              <Message messageText="Loading" />
            ) : (
              <List
                list={products}
                variant="show-stack-products"
                onAdd={handleAddToCart}
              />
            )}
          </div>
        )}
      </main>
    </>
  );
};
