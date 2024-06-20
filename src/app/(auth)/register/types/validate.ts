import { REGEX_PHONE_NUMBER } from '@/types/common';
import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  firstName: yup.string().required('This field is required'),
  lastName: yup.string().required('This field is required'),
  phone: yup
    .string()
    .required('This field is required')
    .matches(REGEX_PHONE_NUMBER, 'Phone number must be a valid phone number'),
  // address: yup.string().required("This field is required"),
  email: yup.string().email().required('This field is required'),
  password: yup
    .string()
    .min(8, 'Password must be equal or great than 8 character(s)')
    .required('This field is required'),
  confirmPassword: yup.string().required('This field is required'),
});

export type registerSchemaType = {
  firstName: string;
  lastName: string;
  phone: string;
  // address: string;
  email: string;
  password: string;
  confirmPassword: string;
};
