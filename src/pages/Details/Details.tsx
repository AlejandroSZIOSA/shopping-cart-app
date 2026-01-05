import { useEffect, useState, type FC } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import parse from "html-react-parser";

import * as ProductsAPI from "../../services/API";
import type { Product } from "../../services/API.types";

export const DetailsPage: FC = () => {
  const [product, setProduct] = useState<Product | null>(null);

  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);

  useEffect(() => {
    const getProductDetails = async (id: number) => {
      const res = await ProductsAPI.getProductDetails(id);
      setProduct(res.data);
    };

    getProductDetails(numericId);
  }, [numericId]);

  return (
    <>
      <Header subText="Details">
        <Link to="/"> Go Back</Link>
      </Header>
      <main>
        {product && (
          <>
            <p>name:{product.name}</p>
            <p>price: {product.price}</p>
            <div>{parse(product.description as string)}</div>
          </>
        )}
      </main>
    </>
  );
};
