import { type FC } from "react";
import styles from "./SubTotalSection.module.css";
import { GlobalBtn } from "../buttons/GlobalBtn/GlobalBtn";
import { useNavigate } from "react-router-dom";

interface SubTotalSectionProps {
  variant: "regular-cart-subtotal" | "aside-cart-subtotal";
  totalPrice: number;
  onClose?: () => void;
}
export const SubTotalSection: FC<SubTotalSectionProps> = ({
  variant,
  totalPrice,
  onClose = () => {},
}) => {
  const navigate = useNavigate();

  return (
    <section className={styles.summarySection}>
      <p>
        <strong>Total Summa: ${totalPrice.toFixed(2)}</strong>
      </p>
      <div className={styles.summaryButtonsContainer}>
        {variant !== "aside-cart-subtotal" && (
          <GlobalBtn variant="primary" color="blue" onClick={onClose}>
            Back
          </GlobalBtn>
        )}
        <GlobalBtn
          variant="primary"
          color="black"
          onClick={() => {
            navigate("/checkout");
          }}
        >
          Checkout
        </GlobalBtn>
      </div>
    </section>
  );
};
