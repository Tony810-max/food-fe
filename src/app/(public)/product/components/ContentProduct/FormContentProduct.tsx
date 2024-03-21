import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const FormContentProduct = () => {
  const [value, setValue] = useState<number>(1);
  const handleMinus = (value: number) => {
    if (value > 1) {
      setValue(value - 1);
    }
  };
  return (
    <form className="flex gap-4">
      <div className="flex items-center gap-2">
        <input
          className="border w-10 h-10 text-center"
          min={1}
          value={value}
          disabled
        />
        <div className="flex flex-col justify-center gap-1">
          <Plus
            size={18}
            className="border rounded cursor-pointer hover:opacity-70"
            onClick={() => setValue(value + 1)}
          />
          <Minus
            size={18}
            className="border rounded cursor-pointer hover:opacity-70"
            onClick={() => handleMinus(value)}
          />
        </div>
      </div>
      <Button variant={"destructive"} type="submit">
        Add to cart
      </Button>
    </form>
  );
};

export default FormContentProduct;
