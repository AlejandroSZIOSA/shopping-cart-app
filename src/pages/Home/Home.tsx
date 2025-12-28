import { useState, type FC } from "react";
import { type Product } from "../../types/shared";
import { Header } from "../../components/Header/Header";
import { useCartContext } from "../../components/hooks/useCartContext";
import { CartShowing } from "../../components/CartShowing/CartShowing";
import { List } from "../../components/List/List";

const initialProducts: Product[] = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
];

export const Home: FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const { cart_, addProduct_Fn } = useCartContext();

  const [openCart, setOpenCart] = useState(false);

  const handleAddToCart = (product: Product) => {
    addProduct_Fn(product);
  };

  /* console.log(cart_); */
  return (
    <>
      <Header subText={openCart ? "Your Cart" : "Product List"}>
        <button onClick={() => setOpenCart(!openCart)}>
          Cart: {cart_?.length}
        </button>
      </Header>
      <main>
        {openCart ? (
          <CartShowing onClose={() => setOpenCart(false)} />
        ) : (
          <div>
            <List
              list={products}
              variant="show-stack"
              onAdd={handleAddToCart}
            />
          </div>
        )}
      </main>
    </>
  );
};
