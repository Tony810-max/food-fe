import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-menubar';
import React from 'react';

interface IFormValue {
  title: string;
  value: string | number;
  className?: string;
}

const FormValueInfo: React.FC<IFormValue> = ({ title, value, className }) => {
  return (
    <div className="grid grid-cols-4 items-center gap-4">
      <Label className="col-span-2 font-sans text-base capitalize text-nowrap">
        {title}
      </Label>
      <Input
        defaultValue={value}
        className={`col-span-2 font-sans text-base font-semibold ${className}`}
        disabled
      />
    </div>
  );
};

export default FormValueInfo;
