import { type FC } from "react";

interface NavBarProps {
  variant?: "home" | "order";
}

export const NavBar: FC<NavBarProps> = ({ variant }) => {
  return <nav>NavBar</nav>;
};
