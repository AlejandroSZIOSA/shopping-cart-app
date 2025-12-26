import { type FC } from "react";
import { NavBar } from "../../components/NavBar/NavBar";

export const Home: FC = () => {
  return (
    <>
      <header>
        <h1>Home</h1>
        <NavBar variant="home" />
      </header>

      <main>
        <p>main content</p>
      </main>
    </>
  );
};
