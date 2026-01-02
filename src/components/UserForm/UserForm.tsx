import React, { type FC } from "react";
import type { FormValues, Errors } from "../../types/shared";

interface FormProps {
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  values: FormValues;
  errors: Errors;
}

export const UserForm: FC<FormProps> = ({
  onSubmit,
  onChange,
  values,
  errors,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <label>Name</label>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={values.name}
        onChange={onChange}
      />
      {errors.name && <p>{errors.name}</p>}
      <br></br>
      <label>Last Name</label>
      <input
        type="text"
        placeholder="last Name"
        name="lastName"
        value={values.lastName}
        onChange={onChange}
      />
      {errors.lastName && <p>{errors.lastName}</p>}
      <br></br>
      <label>Address</label>
      <input
        type="text"
        placeholder="Address"
        name="address"
        value={values.address}
        onChange={onChange}
      />
      {errors.address && <p>{errors.address}</p>}
      <br></br>
      <label>Post</label>
      <input
        type="text"
        placeholder="Post"
        name="post"
        value={values.post}
        onChange={onChange}
      />
      {errors.post && <p>{errors.post}</p>}
      <br></br>
      <label>City</label>
      <input
        type="text"
        placeholder="City"
        name="city"
        value={values.city}
        onChange={onChange}
      />
      {errors.city && <p>{errors.city}</p>}
      <br></br>
      <label>Email</label>
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={values.email}
        onChange={onChange}
      />
      {errors.email && <p>{errors.email}</p>}
      <br></br>
      <label>Phone</label>
      <input
        placeholder="Phone"
        name="phone"
        value={values.phone}
        onChange={onChange}
      />
      {errors.phone && <p>{errors.phone}</p>}
      <br></br>
      <button type="submit">Submit Order</button>
    </form>
  );
};
