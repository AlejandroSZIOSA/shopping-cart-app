//form validation logic
export type FormValues = {
  name: string;
  lastName: string;
  address: string;
  post: string;
  city: string;
  email: string;
  phone: string;
};

export type Errors = Partial<Record<keyof FormValues, string>>;

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
      if (values[field].length >= 2) {
        errors[field] = "Max 2 characters";
      }
      return errors; // Skip phone validation
    }

    if (values[field].length >= 2 || !values[field]) {
      errors[field] = "Max 20 characters";
    }

    if (field == "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(values[field])) {
        errors[field] = "Invalid email address";
      }
    }

    return errors;
  }, {} as Errors);
