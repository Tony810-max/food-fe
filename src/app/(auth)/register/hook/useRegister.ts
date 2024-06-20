import { SubmitHandler } from 'react-hook-form';
import { registerSchemaType } from '../types/validate';
import { API_URL } from '@/types/common';
import { toast } from 'react-toastify';
import ROUTES from '@/types/routes';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const useRegister = (watch: any) => {
  const router = useRouter();
  const confirmPassword = watch('confirmPassword');
  const password = watch('password');

  const checkPassword =
    confirmPassword !== password
      ? 'The confirmed password does not match the original password.'
      : '';
  const onSubmit: SubmitHandler<registerSchemaType> = async (data) => {
    if (checkPassword) return;

    try {
      const formData = {
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNumber: data.phone,
        // address: data.address,
      };
      const response = await axios.post(
        `${API_URL}/api/v1/auth/sign-up`,
        formData,
      );
      if (response) {
        toast.success('Register successfully!');
        setTimeout(() => {
          router.replace(ROUTES.SIGNIN);
        }, 3000);
      }
    } catch (error) {
      toast.error('Something is wrong');
    }
  };
  return {
    onSubmit,
    confirmPassword,
    password,
    checkPassword,
  };
};
export default useRegister;
