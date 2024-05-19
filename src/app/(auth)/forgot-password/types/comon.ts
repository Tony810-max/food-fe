import * as yup from "yup";

export const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("Please enter a valid email format.")
      .required("Please enter your correct email."),
  })
  .required();
