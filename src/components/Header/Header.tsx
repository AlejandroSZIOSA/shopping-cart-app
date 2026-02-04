import type { ReactNode, FC } from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  children: ReactNode;
  subText: string;
}

export const Header: FC<HeaderProps> = ({ subText, children }) => {
  return (
    <header>
      <div className={styles.navigateCartContainer}>
        <h1>Shopping App</h1>
        {children}
      </div>
      <h2 className={styles.subText}>{subText}</h2>
    </header>
  );
};
