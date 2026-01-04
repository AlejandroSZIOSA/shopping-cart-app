import { useEffect, useState, type FC } from "react";
import { type ProductCtx } from "../../types/shared";
import { Header } from "../../components/Header/Header";
import { useCartContext } from "../../components/hooks/useCartContext";
import { CartShowing } from "../../components/CartShowing/CartShowing";
import { List } from "../../components/List/List";

import * as ProductsAPI from "../../services/API";

import type { Product } from "../../services/API.types";

const API_KEY = import.meta.env.VITE_API_KEY;

/* type ProductsPayload = Pick<Product, "id" | "name" | "price">[]; */

export const HomePage: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { cart_, addProduct_Fn } = useCartContext();

  const [openCart, setOpenCart] = useState(false);

  const getProducts = async () => {
    // reset initial state
    /*  setIsLoading(true); */

    const dataRes = await ProductsAPI.getProducts();
    /* setIsLoading(false); */

    /*     console.log(data.data);
     */ setProducts(dataRes.data as Product[]);
  };

  useEffect(() => {
    getProducts();
  }, []);

  /* console.log(API_KEY);
  console.log(VITE_BASE_URL); */

  const handleAddToCart = (product: ProductCtx) => {
    product.qty = 1;
    product.item_total = product.price * product.qty;
    addProduct_Fn(product);
  };

  /* console.log(cart_); */
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
          <div>
            <List
              list={products}
              variant="show-stack-items"
              onAdd={handleAddToCart}
            />
          </div>
        )}
      </main>
    </>
  );
};
