import type { FormValues, Errors } from "../types/shared";

//validation functions for user form
const fields: (keyof FormValues)[] = [
  "name",
  "lastName",
  "address",
  "post",
  "city",
  "email",
  "phone",
];

export const validate = (values: FormValues): Errors =>
  fields.reduce((errors, field) => {
    if (field === "phone") {
      if (values[field].length >= 255) {
        errors[field] = "Max 255 characters";
      }
      return errors; // Skip phone validation
    }

    if (field === "post") {
      const postRegex = /^\d{6}$/;
      if (!postRegex.test(values[field])) {
        errors[field] = "Post code must be 6 digits";
      }
      return errors;
    }

    if (values[field].length >= 255 || !values[field]) {
      errors[field] = "Max 255 characters";
    }

    if (field == "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(values[field])) {
        errors[field] = "Invalid email address";
      }
    }

    return errors;
  }, {} as Errors);
