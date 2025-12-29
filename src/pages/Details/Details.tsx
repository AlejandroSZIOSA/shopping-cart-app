import { type FC } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";

export const DetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  /* console.log(id); */
  return (
    <>
      <Header subText="Details">
        <Link to="/"> Go Back</Link>
      </Header>
      <main>
        <h2>Details for product ID: {id}</h2>
      </main>
    </>
  );
};
