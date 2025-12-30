import { useState, type FC } from "react";
import { type Product } from "../../types/shared";
import { Header } from "../../components/Header/Header";
import { useCartContext } from "../../components/hooks/useCartContext";
import { CartShowing } from "../../components/CartShowing/CartShowing";
import { List } from "../../components/List/List";
import { VITE_BASE_URL } from "../../utils/constants";

const initialProducts: Product[] = [
  { id: 1, name: "Product 1", price: 10, qty: 0, item_total: 10 },
  { id: 2, name: "Product 2", price: 20, qty: 0, item_total: 20 },
  { id: 3, name: "Product 3", price: 30, qty: 0, item_total: 30 },
];

const API_KEY = import.meta.env.VITE_API_KEY;

export const HomePage: FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const { cart_, addProduct_Fn } = useCartContext();

  const [openCart, setOpenCart] = useState(false);

  console.log(API_KEY);
  console.log(VITE_BASE_URL);

  const handleAddToCart = (product: Product) => {
    product.qty = 1;
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
