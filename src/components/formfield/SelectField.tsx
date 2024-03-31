import React, { useState } from "react";
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface IData {
  label: string;
  value: string;
}

interface SelectProps<T extends FieldValues = FieldValues>
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  data: IData[];
  placeholder?: string;
  label?: string;
  control: Control<T>;
  name: FieldPath<T>;
}

const SelectField: React.FC<SelectProps> = ({
  data,
  placeholder,
  label,
  control,
  name,
  ...props
}) => {
  return (
    <Controller
      name="city"
      control={control}
      render={({ field }) => (
        <Select
          onValueChange={field.onChange}
          {...field}
          disabled={props.disabled}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{label}</SelectLabel>
              {data?.map((data, index) => (
                <SelectItem key={index} value={data.value}>
                  {data.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    />
  );
};

export default SelectField;
