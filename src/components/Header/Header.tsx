import { type ReactNode, type FC } from "react";

interface HeaderProps {
  children: ReactNode;
  subText: string;
}

export const Header: FC<HeaderProps> = ({ subText, children }) => {
  return (
    <header>
      <div>
        <h1>Shopping Cart App</h1>
        {children}
      </div>
      <h2>{subText}</h2>
    </header>
  );
};
