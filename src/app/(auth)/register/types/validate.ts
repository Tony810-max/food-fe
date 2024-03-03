import { REGEX_PHONE_NUMBER } from "@/types/common";
import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstName: yup.string().required("This field is required"),
  lastName: yup.string().required("This field is required"),
  phone: yup
    .string()
    .required("This field is required")
    .matches(REGEX_PHONE_NUMBER, "Phone number must be a valid phone number"),
  address: yup.string().required("This field is required"),
  email: yup.string().email().required("This field is required"),
  password: yup.string().required("This field is required"),
  confirmPassword: yup
    .string()
    .required("This field is required")
    .when("password", (password, field) =>
      password
        ? field
            .required()
            .oneOf([yup.ref("password")], "Confirm password is not match")
        : field
    )
    .nonNullable(),
});

export type registerSchemaType = {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  email: string;
  password: string;
  confirmPassword: string;
};
