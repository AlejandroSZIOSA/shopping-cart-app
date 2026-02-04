import { useEffect, useState, type FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import parse from "html-react-parser";
import { BASE_IMAGE_URL } from "../../utils/constants";
import { Message } from "../../components/Message/Message";
import { NavButton } from "../../components/buttons/NavButton/NavButton";

import styles from "./Details.module.css";

import * as ProductsAPI from "../../services/API";
import type { Product } from "../../services/API.types";

export const DetailsPage: FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);

  const navigate = useNavigate();

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
        <NavButton
          srcImage="/src/assets/icons/arrow_back_24dp.svg"
          onClick={() => navigate(-1)}
        />
      </Header>
      <main>
        {isLoading ? (
          <Message messageText="Loading" variant="loading" />
        ) : product ? (
          <>
            <section className={styles.productDetailsSection}>
              <div className={styles.imageAndTitleContainer}>
                <h3 className={styles.productTitle}>{product.name}</h3>
                <img
                  src={BASE_IMAGE_URL + product.images.large}
                  alt={product.name}
                />
                <p className={styles.priceTagDesktop}>
                  <strong> Price:</strong> ${product.price}
                </p>
              </div>
              <div className={styles.titleAndDescriptionContainer}>
                <h3 className={styles.productTitleDesktop}>{product.name}</h3>
                <div className={styles.descriptionContainer}>
                  <p>
                    <strong>Description</strong>
                  </p>
                  <div>{parse(product.description as string)}</div>
                </div>
                <p className={styles.priceTag}>
                  <strong> Price:</strong> ${product.price}
                </p>
              </div>
            </section>
          </>
        ) : (
          <Message messageText="Something Went Wrong" variant="error" />
        )}
      </main>
    </>
  );
};
