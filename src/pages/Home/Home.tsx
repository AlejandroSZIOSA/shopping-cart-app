import { useEffect, useState, type FC } from "react";
import { type ProductCtx } from "../../types/shared";
import { Header } from "../../components/Header/Header";
import { useCartContext } from "../../components/hooks/useCartContext";
import { Cart } from "../../components/Cart/Cart";
import { List } from "../../components/List/List";
import { Message } from "../../components/Message/Message";
import { NavButton } from "../../components/buttons/NavButton/NavButton";
import { CartAside } from "../../components/CartAside/CartAside";

import useMediaQuery from "../../components/hooks/useMediaQuery";

import styles from "./Home.module.css";

import * as ProductsAPI from "../../services/API";
import type { Product } from "../../services/API.types";

export const HomePage: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { cart_, addProduct_Fn } = useCartContext();
  const [openCart, setOpenCart] = useState(false);

  const isMobile = useMediaQuery("(max-width: 1024px)");

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
      <Header subText={openCart ? "Your Cart" : "Home"}>
        {isMobile && (
          <NavButton
            srcImage="/src/assets/icons/shopping_cart_24dp_blue.svg"
            onClick={() => setOpenCart(!openCart)}
          >
            <span>{cart_?.length ?? 0}</span>
          </NavButton>
        )}
      </Header>
      <main>
        {openCart ? (
          <Cart onClose={() => setOpenCart(false)} />
        ) : (
          <div className={styles.stockListContainer}>
            {isLoading ? (
              <Message messageText="Loading" variant="loading" />
            ) : (
              <div className={styles.stockListContainer}>
                <List
                  list={products}
                  variant="show-stack-products"
                  onAdd={handleAddToCart}
                />
                {!isMobile && <CartAside />}
              </div>
            )}
          </div>
        )}
      </main>
    </>
  );
};
