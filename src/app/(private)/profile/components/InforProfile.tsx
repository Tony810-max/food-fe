'use client';
import { Input } from '@/components/ui/input';
import React, { useEffect, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface infoProfileProps {
  variable: string;
  title: string;
  value: string;
  className?: string;
  status?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>;
}

const InforProfile: React.FC<infoProfileProps> = ({
  className,
  title,
  value,
  status,
  register,
  variable,
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
        {...(register ? register(variable) : {})}
        value={inputValue}
        disabled={!status}
        className="font-sans text-base font-semibold leading-normal"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InforProfile;
