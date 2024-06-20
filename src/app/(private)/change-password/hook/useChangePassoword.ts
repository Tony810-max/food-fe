'use client';
import {
  changePasswordProps,
  schemaChangePassword,
} from '@/app/(private)/change-password/types/common';
import { API_URL } from '@/types/common';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const useChangePassoword = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<changePasswordProps>({
    resolver: yupResolver(schemaChangePassword),
  });

  const newPasword = watch('newPassword');
  const confirmPassword = watch('confirmPassword');

  const checkNewPassword =
    newPasword && confirmPassword && newPasword !== confirmPassword
      ? 'new password is not confirmPassword'
      : '';
  const onSubmitChangePassword = async (data: changePasswordProps) => {
    if (newPasword && confirmPassword && newPasword !== confirmPassword) return;
    try {
      const accessToken = JSON.parse(localStorage.getItem('accessToken')!);
      const response = await axios.post(
        `${API_URL}/api/v1/user/change-password`,
        {
          currentPassword: data?.currentPassword,
          newPassword: data?.confirmPassword,
        },
        { headers: { Authorization: `Bearer ${accessToken}` } },
      );
      if (response) {
        toast.success('Change password was successful');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');

        setTimeout(() => {
          toast.success('Please log in to your account again.');
          router.replace('/login');
        }, 1500);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.message || 'An unexpected error occurred';
        toast.error(errorMessage);
      } else {
        toast.error('An unexpected error occurred');
      }
    }
  };

  return {
    onSubmitChangePassword,
    handleSubmit,
    register,
    checkNewPassword,
    errors,
  };
};
export default useChangePassoword;
