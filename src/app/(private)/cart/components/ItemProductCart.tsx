import { Input } from "@/components/ui/input";
import { CartProduct } from "@/types/common";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useCartActions } from "../hooks/useCartActions";

interface ProductCartProps {
  data: CartProduct;
  fetchCartProduct: () => void;
}

const ItemProductCart: React.FC<ProductCartProps> = ({
  data,
  fetchCartProduct,
}) => {
  const {
    handleDecreaseProduct,
    handleDeleteCartProduct,
    handleIncreaseProduct,
  } = useCartActions(fetchCartProduct);

  return (
    <tr className="bg-[#f7f7f8] h-full" key={data.id}>
      <td className="py-6">
        <div className="flex items-center gap-5">
          <div className="relative w-[3.75rem] h-[3.75rem]">
            {data?.product?.images?.length > 0 && (
              <Image
                src={data?.product?.images[0]}
                alt="imageProductCart"
                fill
                sizes="(min-width: 768px) 100vw, (min-width: 1200px) 50vw, 33vw"
              />
            )}
          </div>
          <span className="font-sans text-[#444444] leading-normal font-bold">
            {data?.product?.title}
          </span>
        </div>
      </td>
      <td className="py-6 text-center">${data?.product?.price}</td>
      <td className="h-full flex items-center justify-center py-6 rounded-lg border">
        <Plus
          onClick={() => handleIncreaseProduct(data?.id, data?.quantity)}
          className="cursor-pointer hover:opacity-65 "
        />
        <Input disabled type="text" value={data?.quantity} className="w-20" />
        <Minus
          onClick={() => handleDecreaseProduct(data?.id, data?.quantity)}
          className="cursor-pointer hover:opacity-65 "
        />
      </td>
      <td>$ {Number(data?.product?.price) * Number(data?.quantity)}</td>
      <td className="py-6 text-center">
        <button
          className="text-center"
          onClick={() => handleDeleteCartProduct(data?.product?.id)}
        >
          <Trash2 />
        </button>
      </td>
    </tr>
  );
};

export default ItemProductCart;
