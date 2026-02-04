import React, { type FC } from "react";
import type { FormValues, Errors } from "../../types/shared";

import styles from "./UserForm.module.css";

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
    <form className={styles.userForm} onSubmit={onSubmit}>
      <div className={styles.innerFormContainer}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            value={values.name}
            onChange={onChange}
          />
        </div>
        {errors.name && <p className={styles.errorValidation}>{errors.name}</p>}
      </div>

      <div className={styles.innerFormContainer}>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={onChange}
          />
        </div>
        {errors.lastName && (
          <p className={styles.errorValidation}>{errors.lastName}</p>
        )}
      </div>

      <div className={styles.innerFormContainer}>
        <div>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            placeholder="Address"
            name="address"
            value={values.address}
            onChange={onChange}
          />
        </div>
        {errors.address && (
          <p className={styles.errorValidation}>{errors.address}</p>
        )}
      </div>

      <div className={styles.innerFormContainer}>
        <div>
          <label htmlFor="post">Post</label>
          <input
            id="post"
            type="text"
            placeholder="Post"
            name="post"
            value={values.post}
            onChange={onChange}
          />
        </div>
        {errors.post && <p className={styles.errorValidation}>{errors.post}</p>}
      </div>

      <div className={styles.innerFormContainer}>
        <div>
          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            placeholder="City"
            name="city"
            value={values.city}
            onChange={onChange}
          />
        </div>
        {errors.city && <p className={styles.errorValidation}>{errors.city}</p>}
      </div>

      <div className={styles.innerFormContainer}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={onChange}
          />
        </div>
        {errors.email && (
          <p className={styles.errorValidation}>{errors.email}</p>
        )}
      </div>

      <div className={styles.innerFormContainer}>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="text"
            placeholder="Phone"
            name="phone"
            value={values.phone}
            onChange={onChange}
          />
        </div>
        {errors.phone && (
          <p className={styles.errorValidation}>{errors.phone}</p>
        )}
      </div>

      <div className={styles.submitBtnContainer}>
        <button type="submit">Submit Order</button>
      </div>
    </form>
  );
};
