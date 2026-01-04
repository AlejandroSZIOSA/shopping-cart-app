import { type FC, type FormEvent, type ChangeEvent, useState } from "react";
import { Header } from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../components/hooks/useCartContext";
import { UserForm } from "../../components/UserForm/UserForm";

import type { FormValues, Errors } from "../../types/shared";
import { validate } from "../../utils/calculations";

import * as TodosAPI from "../../services/API";
import type { UserOrderPayload } from "../../services/API.types";

export const CheckoutPage: FC = () => {
  const navigate = useNavigate();
  const { cart_ } = useCartContext();

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
      handleCreateOrder(createOrderData(values));
    }
  };

  const createOrderData = (orderUserValues: FormValues): UserOrderPayload => {
    const newOrder: UserOrderPayload = {
      customer_first_name: orderUserValues.name,
      customer_last_name: orderUserValues.lastName,
      customer_address: orderUserValues.address,
      customer_postcode: orderUserValues.post,
      customer_city: orderUserValues.city,
      customer_email: orderUserValues.email,
      customer_phone: orderUserValues.phone,
      order_total: totalPrice,
      order_items:
        cart_?.map((item) => ({
          product_id: item.id,
          name: item.name,
          item_price: item.price,
          item_total: item.item_total ?? 0,
        })) || [],
    };
    return newOrder;
  };

  const handleCreateOrder = async (newOrder: UserOrderPayload) => {
    await TodosAPI.createOrder(newOrder);
    console.log("Order created successfully:", newOrder);
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
