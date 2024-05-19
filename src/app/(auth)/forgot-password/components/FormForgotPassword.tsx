"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { schema } from "../types/comon";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios, { AxiosError } from "axios";
import { API_URL } from "@/types/common";
import { toast } from "react-toastify";

interface dataProps {
  email: string;
}

const FormForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForgotPassword = async (data: dataProps) => {
    try {
      const response = await axios.post(
        `${API_URL}/api/v1/auth/forgot-password`,
        {
          email: data?.email,
        }
      );
      if (response) {
        toast.success(response?.data?.message);
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError?.response?.status === 404) {
        toast.error(
          "The email has not been registered, please sign up to continue."
        );
      }
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(handleForgotPassword)}>
      <Input placeholder="Enter email address..." {...register("email")} />
      {errors.email?.message && (
        <p className="font-sans text-base text-red-600 ">
          {errors.email?.message}
        </p>
      )}
      <Button
        type="submit"
        variant={"destructive"}
        className="font-sans text-lg w-full"
      >
        Confirm
      </Button>
    </form>
  );
};

export default FormForgotPassword;
