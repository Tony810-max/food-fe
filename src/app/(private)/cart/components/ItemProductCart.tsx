import { Input } from '@/components/ui/input';
import { IItemCart } from '@/types/common';
import { Minus, Plus, Trash2 } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { useCartActions } from '../hooks/useCartActions';

interface ProductCartProps {
  data: IItemCart;
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
      <td className="py-4">
        <div className="flex items-center gap-5">
          <div className="relative w-14 h-14">
            <Image
              src={data?.product?.images[0]}
              alt="imageProductCart"
              fill
              sizes="(min-width: 768px) 100vw, (min-width: 1200px) 50vw, 33vw"
            />
          </div>
          <span className="font-sans text-[#444444] text-sm sm:text-base leading-normal font-bold">
            {data?.product?.title}
          </span>
        </div>
      </td>
      <td className="py-4 text-center text-sm">{data?.product?.price}</td>
      <td className="h-full flex items-center justify-center py-4 rounded-lg border">
        <Input
          disabled
          type="text"
          value={data?.quantity}
          className="w-20 text-center"
        />
        <div className="space-y-2">
          <Plus
            size={18}
            onClick={() => handleIncreaseProduct(data?.id, data?.quantity)}
            className="cursor-pointer hover:opacity-65 "
          />
          <Minus
            size={18}
            onClick={() => handleDecreaseProduct(data?.id, data?.quantity)}
            className="cursor-pointer hover:opacity-65 "
          />
        </div>
      </td>
      <td className='font-sans text-center text-sm sm:text-base'>
        {(Number(data?.product?.price) - Number(data?.product?.discount)) *
          Number(data?.quantity)}
      </td>
      <td className="py-4 text-center">
        <button
          className="text-center hover:opacity-70"
          onClick={() => handleDeleteCartProduct(data?.id)}
        >
          <Trash2 color="red" />
        </button>
      </td>
    </tr>
  );
};

export default ItemProductCart;
