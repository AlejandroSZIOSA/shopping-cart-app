import type { FC, ReactNode } from "react";
import styles from "./NavButton.module.css";

interface NavButtonProps {
  // Define any props if needed
  onClick?: () => void;
  children?: ReactNode;
  srcImage: string;
}

export const NavButton: FC<NavButtonProps> = ({
  onClick,
  children,
  srcImage,
}) => {
  return (
    <button onClick={onClick} className={styles.navButton}>
      <img src={srcImage} />
      {children}
    </button>
  );
};
