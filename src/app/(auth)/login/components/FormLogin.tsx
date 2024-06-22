'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ROUTES from '@/types/routes';
import Link from 'next/link';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { LoginSubmitType, loginSchema } from '../types/validate';
import { toast } from 'react-toastify';
import axiosInstance from '@/utils/axiosConfig';

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSubmitType>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginSubmitType> = async (data) => {
    try {
      const response = await axiosInstance.post(`/api/v1/auth/sign-in`, data);
      if (response && typeof localStorage !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem(
          'accessToken',
          JSON.stringify(response?.data?.token?.accessToken),
        );

        toast.success('Login successfully!');
        setTimeout(() => {
          window.location.href = '/';
        }, 3000);
      }
    } catch (error) {
      toast.error('Password or email is incorrect');
    }
  };

  return (
    <form className="py-4 space-y-6 w-fit" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email" required>
          Email Address
        </Label>
        <Input
          {...register('email')}
          id="email"
          type="text"
          name="email"
          placeholder="Enter Your Email"
          className="w-full md:min-w-80"
        />
        {errors.email && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <div>
        <Label htmlFor="password" required>
          Password
        </Label>
        <Input
          {...register('password')}
          id="password"
          type="password"
          name="password"
          placeholder="Enter Your password"
          className="w-full md:min-w-80"
        />
        {errors.password && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Checkbox id="remember" name="remember" />
          <Label htmlFor="remember" className="text-gray-500">
            Remember Me
          </Label>
        </div>
        <Link
          href={ROUTES.FORGOTPASSWORD}
          className="hover:opacity-70 text-xs text-gray-500"
        >
          Forgot Password
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <Button type="submit" variant={'destructive'} className="px-5">
          Login
        </Button>
        <Link href={ROUTES.SIGNUP} className="hover:opacity-70 text-gray-500">
          Sign up?
        </Link>
      </div>
    </form>
  );
};

export default FormLogin;
