import { type FC, useRef, type FormEvent } from "react";
import { Header } from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../components/hooks/useCartContext";

export const CheckoutPage: FC = () => {
  const refNameInput = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const { cart_ } = useCartContext();

  const totalPrice =
    cart_?.reduce((acc, product) => acc + (product.item_total ?? 0), 0) ?? 0;

  function validateForm(event: FormEvent) {
    event.preventDefault();
    console.log(refNameInput.current?.value);

    /* if (refNameInput.current?.value.length > 255) {
      setError("First name is too long");
    } */
  }
  return (
    <>
      <Header subText="Checkout">
        <button onClick={() => navigate("..")}>Back</button>
      </Header>
      <main>
        <form onSubmit={validateForm}>
          <label>Name</label>
          <input ref={refNameInput} type="text" placeholder="Name" />
          <br></br>
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" />
          <br></br>
          <label>Address</label>
          <input type="text" placeholder="Address" />
          <br></br>
          <label>Post</label>
          <input type="text" placeholder="Post" />
          <br></br>
          <label>City</label>
          <input type="text" placeholder="City" />
          <br></br>
          <label>Email</label>
          <input type="email" placeholder="Email" />
          <br></br>
          <label>Phone</label>
          <input type="tel" placeholder="Phone" />
          <br></br>
          <p>Total Price: {totalPrice}</p>
          <button type="submit">Submit Order</button>
        </form>
      </main>
    </>
  );
};
