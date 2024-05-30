import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { registerSchema } from "../types/validate";
import Link from "next/link";
import ROUTES from "@/types/routes";
import { Button } from "@/components/ui/button";
import useRegister from "../hook/useRegister";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      // address: "",
      password: "",
      phone: "",
    },
    resolver: yupResolver(registerSchema),
  });
  const { onSubmit, checkPassword, password } = useRegister(watch);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
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
        {/* <div className="flex flex-col gap-2 col-span-2">
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
        </div> */}
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
          {password && checkPassword !== "" && (
            <p className="text-red-500 leading-normal font-medium">
              {checkPassword}
            </p>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center py-6">
        <Button
          variant={"default"}
          type="submit"
          className="bg-[#F53E32] text-white text-lg"
        >
          Sign up
        </Button>
        <Link
          href={ROUTES.SIGNIN}
          className="text-slate-500 hover:opacity-70 underline"
        >
          Have an account
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
