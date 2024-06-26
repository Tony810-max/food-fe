import * as yup from 'yup';

export const loginSchema = yup
  .object()
  .shape({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

export type LoginSubmitType = {
  email: string;
  password: string;
};
