import * as yup from "yup";

export const schema = yup
  .object()
  .shape({
    code: yup
      .string()
      .required("Please enter the code sent to your email into this field."),
  })
  .required();
