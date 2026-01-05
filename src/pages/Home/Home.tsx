import { useEffect, useState, type FC } from "react";
import { type ProductCtx } from "../../types/shared";
import { Header } from "../../components/Header/Header";
import { useCartContext } from "../../components/hooks/useCartContext";
import { CartShowing } from "../../components/CartShowing/CartShowing";
import { List } from "../../components/List/List";

import * as ProductsAPI from "../../services/API";
import type { Product } from "../../services/API.types";

export const HomePage: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { cart_, addProduct_Fn } = useCartContext();
  const [openCart, setOpenCart] = useState(false);

  const getProducts = async () => {
    const dataRes = await ProductsAPI.getProducts();
    setProducts(dataRes.data);
  };

  useEffect(() => {
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
