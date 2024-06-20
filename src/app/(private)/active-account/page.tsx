'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaActive } from '../profile/types/common';
import { API_URL } from '@/types/common';
import { toast } from 'react-toastify';
import axios from 'axios';
import Link from 'next/link';
import { useUser } from '@/hooks/useUser';

interface activeProps {
  code: string;
}

const ActiveAcoutPage = () => {
  const { handleGetCode, handleActiveUser } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaActive),
  });

  return (
    <div className="container py-10 flex flex-col items-center gap-5 ">
      <form
        onSubmit={handleSubmit(handleActiveUser)}
        className="border border-red-700 rounded-lg py-6 px-12 shadow-lg"
      >
        <div className="space-y-2">
          <label className="font-sans text-lg font-bold leading-normal capitalize">
            Check your email and enter the code below
          </label>
          <Input
            {...register('code')}
            className="font-sans text-base font-semibold leading-normal"
          />
          {errors.code?.message && (
            <p className="font-sans text-base text-red-600 capitalize">
              {errors.code?.message}
            </p>
          )}
          <p className="font-sans py-2 italic">
            If you do not receive the code, click
            <Button
              type="button"
              variant={'link'}
              className="font-sans text-base px-1 italic font-bold hover:opacity-80"
              onClick={handleGetCode}
            >
              here
            </Button>
          </p>
        </div>

        <Button
          type="submit"
          variant={'destructive'}
          className="font-sans w-full text-lg font-medium"
        >
          Save
        </Button>
      </form>
    </div>
  );
};

export default ActiveAcoutPage;
