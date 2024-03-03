import AuthLogo from "@/components/AuthLogo";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ROUTES from "@/types/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignInPage: React.FC = () => {
  return (
    <div className="container px-8 border border-[#E9E9E9] rounded mt-[6.3rem] ">
      <AuthLogo />
      <form className="py-4 flex flex-col gap-7 w-full">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email Address*</Label>
          <Input
            id="email"
            type="text"
            name="email"
            placeholder="Enter Your Email"
            className="w-full"
          />
        </div>
        <div>
          <Label htmlFor="password">Password*</Label>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Enter Your password"
            className="w-full"
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Checkbox id="remember" name="remember" />
            <Label htmlFor="remember">Remember Me</Label>
          </div>
          <Link href={ROUTES.ForgotPassword} className="hover:opacity-70">
            Forgot Password
          </Link>
        </div>
        <div className="flex justify-between items-center">
          <Button variant={"destructive"}>Login</Button>
          <Link href={ROUTES.SignUp} className="hover:opacity-70">
            Sign up?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
