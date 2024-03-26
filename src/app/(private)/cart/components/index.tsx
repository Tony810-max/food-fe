"use client";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const CartProduct = () => {
  const [countProduct, setCountProduct] = useState<number | string>(1);

  const handleIncreaseProduct = () => {
    setCountProduct(Number(countProduct) + 1);
  };

  const handleDecreaseProduct = () => {
    if (Number(countProduct) > 1) setCountProduct(Number(countProduct) - 1);
  };

  const price = 12;
  return (
    <div>
      <table className="w-full">
        <tbody className="w-full">
          <tr className="bg-[#e9e9e9]">
            <th className=" rounded-tl-lg">Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th className=" rounded-tr-lg">Action</th>
          </tr>
          <tr className="bg-[#f7f7f8] h-full">
            <td className="py-6">
              <div className="flex items-center gap-5">
                <div className="relative w-[3.75rem] h-[3.75rem]">
                  <Image
                    src={"/images/imageProductCart.webp"}
                    alt="imageProductCart"
                    fill
                    sizes="(min-width: 768px) 100vw, (min-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <span className="font-sans text-[#444444] leading-normal font-bold">
                  Organic Lemon
                </span>
              </div>
            </td>
            <td className="py-6 text-center">${price}</td>
            <td className="h-full flex items-center justify-center py-6 rounded-lg border">
              <Plus
                onClick={handleIncreaseProduct}
                className="cursor-pointer hover:opacity-65 "
              />
              <Input
                type="number"
                value={countProduct}
                className=" w-fit"
                onChange={(e) => setCountProduct(e.target.value)}
              />
              <Minus
                onClick={handleDecreaseProduct}
                className="cursor-pointer hover:opacity-65 "
              />
            </td>
            <td>$ {price * Number(countProduct)}</td>
            <td className="py-6 text-center">
              <Trash2 className="text-center" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartProduct;
