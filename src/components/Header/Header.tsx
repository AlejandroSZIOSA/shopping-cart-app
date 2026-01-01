import { type ReactNode, type FC } from "react";

interface HeaderProps {
  children: ReactNode;
  subText: string;
}

export const Header: FC<HeaderProps> = ({ subText, children }) => {
  return (
    <header>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "space-evenly",
          padding: "10px",
        }}
      >
        <h1>Shopping Cart App</h1>
        {children}
      </div>
      <h3>{subText}</h3>
    </header>
  );
};
