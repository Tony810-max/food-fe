import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { registerSchema, registerSchemaType } from "../types/validate";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ROUTES from "@/types/routes";
import { toast } from "react-toastify";
import axios from "axios";
import { API_URL } from "@/types/common";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      password: "",
      phone: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<registerSchemaType> = async (data) => {
    try {
      const formData = {
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNumber: data.phone,
        address: data.address,
      };
      const response = await axios.post(
        `${API_URL}/api/v1/auth/sign-up`,
        formData
      );
      if (response) {
        toast.success("Register successfully!");
        setTimeout(() => {
          router.replace(ROUTES.SIGNIN);
        }, 3000);
      }
    } catch (error) {
      toast.error("Something is wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-x-6 gap-y-7">
        <div className="flex flex-col gap-2">
          <Label required htmlFor="firstName" className="capitalize text-base">
            First Name
          </Label>
          <Input
            {...register("firstName")}
            type="text"
            id="firstName"
            placeholder="Enter your first name"
            className="w-full"
          />
          {errors?.firstName?.message && (
            <p className="text-red-500 leading-normal font-medium">
              {errors?.firstName?.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label required htmlFor="lastName" className="capitalize text-base">
            Last Name
          </Label>
          <Input
            {...register("lastName")}
            type="text"
            id="lastName"
            placeholder="Enter your last name"
            className="w-full"
          />
          {errors?.lastName?.message && (
            <p className="text-red-500 leading-normal font-medium">
              {errors?.lastName?.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label required htmlFor="email" className="capitalize text-base">
            Email
          </Label>
          <Input
            {...register("email")}
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full"
          />
          {errors?.email?.message && (
            <p className="text-red-500 leading-normal font-medium">
              {errors?.email?.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label required htmlFor="phone" className="capitalize text-base">
            Phone Number
          </Label>
          <Input
            {...register("phone")}
            type="text"
            id="phone"
            placeholder="Enter your phone number"
            className="w-full"
          />
          {errors?.phone?.message && (
            <p className="text-red-500 leading-normal font-medium">
              {errors?.phone?.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 col-span-2">
          <Label required htmlFor="address" className="capitalize text-base">
            Address
          </Label>
          <Input
            {...register("address")}
            type="text"
            id="address"
            placeholder="Enter your address"
            className="w-full"
          />
          {errors?.address?.message && (
            <p className="text-red-500 leading-normal font-medium">
              {errors?.address?.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 col-span-2">
          <Label required htmlFor="password" className="capitalize text-base">
            Password
          </Label>
          <Input
            {...register("password")}
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full"
          />
          {errors?.password?.message && (
            <p className="text-red-500 leading-normal font-medium">
              {errors?.password?.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 col-span-2">
          <Label
            required
            htmlFor="confirmPassword"
            className="capitalize text-base"
          >
            Confirm Password
          </Label>
          <Input
            {...register("confirmPassword")}
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            className="w-full"
          />
          {errors?.confirmPassword?.message && (
            <p className="text-red-500 leading-normal font-medium">
              {errors?.confirmPassword?.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center py-6">
        <Button
          type="submit"
          variant={"default"}
          className="bg-[#F53E32] text-white text-lg"
        >
          Sign up
        </Button>
        <Link href={ROUTES.SIGNIN} className="text-slate-500 hover:opacity-70">
          Have an account
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
