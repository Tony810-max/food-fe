import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

interface ProductProps {
  name: string;
  totalProduct: number;
  value?: string;
  onSetCurCategory?: (value: string) => void;
}

const CheckboxProduct: React.FC<ProductProps> = ({
  name,
  totalProduct,
  value,
  onSetCurCategory,
}) => {
  const handleChange = () => {
    if (value !== undefined && onSetCurCategory) {
      onSetCurCategory(value);
    }
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-[0.6rem]">
        <input
          type="radio"
          name="category"
          value={value}
          onChange={handleChange}
        />
        <span className="font-sans text-sm leading-normal text-[#7a7a7a] font-normal">
          {name}
        </span>
      </div>
      <span className="font-sans text-xs leading-normal text-[#7a7a7a] font-normal">
        [{totalProduct}]
      </span>
    </div>
  );
};

export default CheckboxProduct;
