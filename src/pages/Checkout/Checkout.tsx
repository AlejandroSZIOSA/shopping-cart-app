import { type FC, type FormEvent, type ChangeEvent, useState } from "react";
import { Header } from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../components/hooks/useCartContext";
import { UserForm } from "../../components/UserForm/UserForm";

import type { FormValues, Errors } from "../../types/shared";
import { validate } from "../../utils/calculations";

export const CheckoutPage: FC = () => {
  const [values, setValues] = useState<FormValues>({
    name: "",
    lastName: "",
    address: "",
    post: "",
    city: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const navigate = useNavigate();
  const { cart_ } = useCartContext();

  const totalPrice =
    cart_?.reduce((acc, product) => acc + (product.item_total ?? 0), 0) ?? 0;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Valid form", values);
    }
  };

  return (
    <>
      <Header subText="Checkout">
        <button onClick={() => navigate("..")}>Back</button>
      </Header>
      <main>
        <UserForm
          onSubmit={handleSubmit}
          onChange={handleChange}
          values={values}
          errors={errors}
        />
        <p>Total Price: {totalPrice}</p>
      </main>
    </>
  );
};
