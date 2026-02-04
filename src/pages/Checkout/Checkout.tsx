import { type FC, type FormEvent, type ChangeEvent, useState } from "react";
import { Header } from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../components/hooks/useCartContext";
import { UserForm } from "../../components/UserForm/UserForm";
import { Message } from "../../components/Message/Message";
import { NavButton } from "../../components/buttons/NavButton/NavButton";
import { GlobalBtn } from "../../components/buttons/GlobalBtn/GlobalBtn";

import styles from "./Checkout.module.css";

import type { FormValues, Errors } from "../../types/shared";
import { validate } from "../../utils/calculations";

import * as TodosAPI from "../../services/API";
import type {
  ProductOrderPayload,
  UserOrderPayload,
} from "../../services/API.types";

export const CheckoutPage: FC = () => {
  const navigate = useNavigate();
  const { cart_, clearCart_Fn } = useCartContext();

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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [orderNumber, setOrderNumber] = useState<number>(0);

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

    //guards for validation forms and empty cart
    if (
      Object.keys(validationErrors).length === 0 &&
      cart_ &&
      cart_.length > 0
    ) {
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
      order_items: cart_?.map((item) => ({
        product_id: item.id,
        name: item.name,
        qty: item.qty,
        item_price: item.price,
        item_total: item.item_total,
      })) as ProductOrderPayload[],
    };
    return newOrder;
  };

  const handleCreateOrder = async (newOrder: UserOrderPayload) => {
    setIsLoading(true);
    const res = await TodosAPI.createOrder(newOrder);
    const { status, message, data } = res;

    //Fail Validations
    if (status === "fail") {
      setIsLoading(false);
      setErrorMessage(message || "Failed to create order. Please try again.");

      //guards data message errors
      if (data) {
        const normalizedErrors = Object.fromEntries(
          Object.entries(data || {}).map(([key, value]) => [key, value[0]])
        );
        const errorsToMessage = Object.values(normalizedErrors).join("\n");
        alert(errorsToMessage);
      }
      return;
    }

    //Error
    if (status === "error") {
      setIsLoading(false);
      setErrorMessage("An error occurred. Please try again.");
      return;
    }

    //Success
    if (status === "success") {
      setIsLoading(false);
      setOrderNumber(typeof data?.id === "number" ? data.id : 0);
    }
  };

  return (
    <>
      <Header subText="Checkout">
        <NavButton
          srcImage="/src/assets/icons/home_24dp.svg"
          onClick={() => {
            if (orderNumber) {
              clearCart_Fn();
            }
            navigate("..");
          }}
        />
      </Header>
      <main>
        {isLoading ? (
          <Message messageText="Sending order..." variant="loading" />
        ) : errorMessage ? (
          <Message messageText={errorMessage} variant="error">
            <GlobalBtn
              style={{ marginBottom: "12px" }}
              onClick={() => setErrorMessage("")}
              variant="primary"
              color="black"
            >
              Back To Form
            </GlobalBtn>
          </Message>
        ) : orderNumber ? (
          <Message messageText="Order created successfully!" variant="success">
            <p>Order Number: {orderNumber}</p>
          </Message>
        ) : totalPrice > 0 ? (
          <div className={styles.checkoutContainer}>
            <h3 className={styles.userInfo}>User Info</h3>
            <UserForm
              onSubmit={handleSubmit}
              onChange={handleChange}
              values={values}
              errors={errors}
            />
            <p>
              <strong>Total Price: ${totalPrice.toFixed(2)}</strong>
            </p>
          </div>
        ) : (
          <Message messageText="Your cart is empty." variant="info" />
        )}
      </main>
    </>
  );
};
