'use client';
import React from 'react';

interface checkboxProps {
  id?: string;
  title?: string;
  value: string;
  onSetValueCheckbox?: (value: string) => void;
  valueCheckbox?: string;
  check: boolean;
}

const Checkbox: React.FC<checkboxProps> = ({
  id,
  title,
  value,
  onSetValueCheckbox,
  check,
}) => {
  return (
    <div className="space-x-[0.625rem]">
      <input
        type="radio"
        value={value}
        id={id}
        name="paymentMethod"
        className="rounded-full"
        onChange={() => {
          if (value !== undefined && onSetValueCheckbox) {
            onSetValueCheckbox(value);
          }
        }}
        defaultChecked={check}
      />
      <label htmlFor={id}>{title}</label>
    </div>
  );
};

export default Checkbox;
