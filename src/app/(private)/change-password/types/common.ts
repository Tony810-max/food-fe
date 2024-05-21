import * as yup from "yup";

export const schemaChangePassword = yup
  .object()
  .shape({
    currentPassword: yup
      .string()
      .required("Please enter your current password"),
    newPassword: yup.string().min(8).required(),
    confirmPassword: yup.string().min(8).required(),
  })
  .required();

export interface changePasswordProps {
  confirmPassword: string;
  currentPassword: string;
  newPassword: string;
}
