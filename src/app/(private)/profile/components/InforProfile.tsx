"use client";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

interface infoProfileProps {
  variable: string;
  title: string;
  value: string;
  className?: string;
  status?: boolean;
  register?: UseFormRegister<any>;
  error?: FieldError | undefined;
}

const InforProfile: React.FC<infoProfileProps> = ({
  className,
  title,
  value,
  status,
  register,
  variable,
  error,
}) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); 
  };
  return (
    <div className={`space-y-3 ${className}`}>
      <label className="font-sans text-lg font-bold leading-normal capitalize">
        {title}
      </label>
      <Input
        type={title.toLowerCase() === "password" ? "password" : ""}
        {...(register ? register(variable) : {})}
        value={inputValue}
        disabled={!status}
        className="font-sans text-base font-semibold leading-normal"
        onChange={handleInputChange}
      />
      {error && <p className="font-sans text-base text-red-500 capitalize italic">{error.message}</p>}
    </div>
  );
};

export default InforProfile;
