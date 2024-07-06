import { REGEX_PHONE_NUMBER } from '@/types/common';
import * as yup from 'yup';
export const checkoutSchema = yup
  .object()
  .shape({
    name: yup.string().required(),
    address: yup.string().required(),
    country: yup.string().required(),
    state: yup.string().required(),
    city: yup.string().required(),
    postCode: yup.string().required(),
    phoneNumber: yup
      .string()
      .required('This field is required')
      .matches(REGEX_PHONE_NUMBER, 'Phone number must be a valid phone number'),
  })
  .required();
