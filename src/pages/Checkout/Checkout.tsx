import { type FC, type FormEvent, type ChangeEvent, useState } from "react";
import { Header } from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../components/hooks/useCartContext";

import type { FormValues, Errors } from "../../utils/calculations";
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
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
          <br></br>
          <label>Last Name</label>
          <input
            type="text"
            placeholder="last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p>{errors.lastName}</p>}
          <br></br>
          <label>Address</label>
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={values.address}
            onChange={handleChange}
          />
          {errors.address && <p>{errors.address}</p>}
          <br></br>
          <label>Post</label>
          <input
            type="text"
            placeholder="Post"
            name="post"
            value={values.post}
            onChange={handleChange}
          />
          {errors.post && <p>{errors.post}</p>}
          <br></br>
          <label>City</label>
          <input
            type="text"
            placeholder="City"
            name="city"
            value={values.city}
            onChange={handleChange}
          />
          {errors.city && <p>{errors.city}</p>}
          <br></br>
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
          <br></br>
          <label>Phone</label>
          <input
            placeholder="Phone"
            name="phone"
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && <p>{errors.phone}</p>}
          <br></br>
          <p>Total Price: {totalPrice}</p>
          <button type="submit">Submit Order</button>
        </form>
        <div></div>
      </main>
    </>
  );
};
