import type { FC, ReactNode, CSSProperties } from "react";
import styles from "./GlobalBtn.module.css";

interface GlobalBtnProps {
  variant: "primary" | "secondary";
  color?: "blue" | "black" | "red" | "orange";
  style?: CSSProperties;
  children: ReactNode;
  onClick: () => void;
  isDisabled?: boolean;
}

export const GlobalBtn: FC<GlobalBtnProps> = ({
  variant,
  color,
  onClick,
  children,
  isDisabled,
  style,
}) => {
  let classNameVariant = "";
  if (variant === "primary") {
    classNameVariant = `${styles.primaryButton} ${color ? styles[color] : ""}`;
  }

  if (variant === "secondary") {
    classNameVariant = `${styles.secondaryButton} 
    ${color ? styles[color] : ""}`;
  }

  return (
    <button
      className={classNameVariant}
      disabled={isDisabled}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};
