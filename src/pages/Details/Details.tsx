import { useEffect, useState, type FC } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import parse from "html-react-parser";

import * as ProductsAPI from "../../services/API";
import type { Product } from "../../services/API.types";
import { Message } from "../../components/Message/Message";

export const DetailsPage: FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);

  useEffect(() => {
    const getProductDetails = async (id: number) => {
      setIsLoading(true);
      const res = await ProductsAPI.getProductDetails(id);
      const { data } = res;
      //guard for data
      if (data) {
        setProduct(data);
      }
      setIsLoading(false);
    };

    getProductDetails(numericId);
  }, [numericId]);

  return (
    <>
      <Header subText="Details">
        <Link to="/"> Go Back</Link>
      </Header>
      <main>
        {isLoading ? (
          <Message messageText="Loading" />
        ) : product ? (
          <>
            <p>name:{product.name}</p>
            <p>price: {product.price}</p>
            <div>{parse(product.description as string)}</div>
          </>
        ) : (
          <Message messageText="Something Went Wrong" />
        )}
      </main>
    </>
  );
};
