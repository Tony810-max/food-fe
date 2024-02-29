"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ROUTES from "@/types/routes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DATA_INPUT_FORM = [
  {
    id: 1,
    name: "first name",
    value: "firstName",
    type: "text",
    placeHolder: "Enter your first name",
    className: "",
  },
  {
    id: 2,
    name: "last name",
    value: "lastName",
    type: "text",
    placeHolder: "Enter your last name",
    className: "",
  },
  {
    id: 3,
    name: "email",
    value: "email",
    type: "email",
    placeHolder: "Enter your email",
    className: "",
  },
  {
    id: 4,
    name: "phone number",
    value: "phone",
    type: "text",
    placeHolder: "Enter your phone number",
    className: "",
  },
  {
    id: 5,
    name: "address",
    value: "address",
    type: "text",
    placeHolder: "Enter your address",
    className: "col-span-2",
  },
  {
    id: 6,
    name: "password",
    value: "password",
    type: "password",
    placeHolder: "Enter your password",
    className: "col-span-2",
  },
  {
    id: 7,
    name: "confirm password",
    value: "confirmPassword",
    type: "password",
    placeHolder: "Confirm Password",
    className: "col-span-2",
  },
];

const SignUpPage: React.FC = () => {
  return (
    <div className="py-24">
      <div className="container w-fit flex flex-col items-center px-8 border border-[#E9E9E9] justify-start rounded">
        <div className="relative w-[10rem] h-[5.5rem]">
          <Image src={"/images/logo.webp"} alt="logo" fill />
        </div>
        <form>
          <div className="grid grid-cols-2 gap-x-6 gap-y-7">
            {DATA_INPUT_FORM.map((item) => (
              <div
                className={`flex flex-col gap-2 ${item.className}`}
                key={item.id}
              >
                <Label htmlFor={item.value} className="capitalize text-base">
                  {item.name}*
                </Label>
                <Input
                  type={item.type}
                  id={item.value}
                  placeholder={item.placeHolder}
                  className="w-fulls"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center py-6">
            <Button
              variant={"default"}
              className="bg-[#F53E32] text-white text-lg"
            >
              Sign up
            </Button>
            <Link
              href={ROUTES.SignIn}
              className="text-slate-500 hover:opacity-70"
            >
              Have you account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
