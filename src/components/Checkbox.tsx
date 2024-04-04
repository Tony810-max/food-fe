import React from "react";

interface checkboxProps {
  id: string;
  title: string;
  value: string;
}

const Checkbox: React.FC<checkboxProps> = ({
  id,
  title,
  value,
}) => {
  return (
    <div className="space-x-[0.625rem]">
      <input
        type="radio"
        value={value}
        id={id}
        name="addressOption"
        className="rounded-full"
      />
      <label htmlFor={id}>{title}</label>
    </div>
  );
};

export default Checkbox;
