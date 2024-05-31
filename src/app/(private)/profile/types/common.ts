import * as yup from "yup";

export const schemaActive = yup
  .object()
  .shape({
    code: yup
      .string()
      .required("Please enter the code sent to your email into this field."),
  })
  .required();

export const schemaProfile = yup
  .object()
  .shape({
    firstName: yup.string(),
    lastName: yup.string(),
    address: yup.string(),
    email: yup.string(),
    phone: yup.string(),
  })
  .required();

export interface profileProps {
  email?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  address?: string;
}
