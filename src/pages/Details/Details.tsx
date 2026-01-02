import { useEffect, useState, type FC } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import parse from "html-react-parser";

import * as ProductsAPI from "../../services/API";
import type { ProductPayload } from "../../services/API.types";

export const DetailsPage: FC = () => {
  const [product, setProduct] = useState<ProductPayload | null>(null);

  const { id } = useParams<{ id: string }>();
  let numericId = Number(id);

  const getProductDetails = async (id: number) => {
    const res = await ProductsAPI.getProduct(id);
    setProduct(res.data as ProductPayload);
  };

  useEffect(() => {
    // console.log(numericId);
    getProductDetails(numericId);
  }, []);

  console.log(product);
  return (
    <>
      <Header subText="Details">
        <Link to="/"> Go Back</Link>
      </Header>
      <main>
        {product && (
          <>
            <p>name:{product.name}</p>
            <p>name:{product.price}</p>
            <div>{parse(product.description as string)}</div>
          </>
        )}
      </main>
    </>
  );
};
