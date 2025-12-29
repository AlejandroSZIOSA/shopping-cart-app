import { useState, type FC } from "react";
import { type Product } from "../../types/shared";
import { Header } from "../../components/Header/Header";
import { useCartContext } from "../../components/hooks/useCartContext";
import { CartShowing } from "../../components/CartShowing/CartShowing";
import { List } from "../../components/List/List";

const initialProducts: Product[] = [
  { id: 1, name: "Product 1", item_price: 10, qty: 1, item_total: 10 },
  { id: 2, name: "Product 2", item_price: 20, qty: 1, item_total: 20 },
  { id: 3, name: "Product 3", item_price: 30, qty: 1, item_total: 30 },
];

export const HomePage: FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const { cart_, addProduct_Fn } = useCartContext();

  const [openCart, setOpenCart] = useState(false);

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
