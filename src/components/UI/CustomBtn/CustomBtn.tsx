import { type FC, type ReactNode } from "react";

import styles from "./CustomBtn.module.css";

interface CustomBtnProps {
  variant: "primary" | "secondary";
  color: "blue" | "black";
  children: ReactNode;
  onClick: () => void;
  isDisabled?: boolean;
}

export const CustomBtn: FC<CustomBtnProps> = ({
  variant,
  color,
  onClick,
  children,
  isDisabled,
}) => {
  let classNameVariant = "";
  if (variant === "primary") {
    classNameVariant = `${styles.primaryButton} ${
      color === "blue" ? styles.blue : ""
    } ${color === "black" ? styles.black : ""}`;
  }
  return (
    <button
      className={classNameVariant}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
