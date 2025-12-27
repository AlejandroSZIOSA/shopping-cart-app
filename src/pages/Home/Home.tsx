import { useState, type FC } from "react";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { type Product } from "../../types/shared";
import { Header } from "../../components/Header/Header";

const initialProducts: Product[] = [
  { id: 1, title: "Product 1" },
  { id: 2, title: "Product 2" },
  { id: 3, title: "Product 3" },
];

export const Home: FC = () => {
  const [counter, setCounter] = useState(0);
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [shoppingCart, setShoppingCart] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setShoppingCart([...shoppingCart, product]);
  };

  return (
    <>
      <Header subText="List Products">
        <button>Counter: {shoppingCart.length}</button>
      </Header>
      <main>
        <ol>
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ol>
      </main>
    </>
  );
};
