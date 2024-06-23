import { Button } from '@/components/ui/button';
import { useGetHeaderConfig } from '@/hooks/useGetHeaderConfig';
import { API_URL } from '@/types/common';
import axios from 'axios';
import { Minus, Plus } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const FormContentProduct = () => {
  const [value, setValue] = useState<number>(1);
  const { headerConfig } = useGetHeaderConfig();
  const params = useParams();
  const router = useRouter();

  const handleMinus = (value: number) => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const handleAddToCart = async () => {
    try {
      if (!headerConfig) {
        toast.error('You need to login to access!!!');
        localStorage.setItem('preHref', window.location.href);
        return setTimeout(() => {
          router?.push('/login');
        }, 2000);
      }
      const reponse = await axios.post(
        `${API_URL}/api/v1/cart/add/${params.id}`,
        {
          quantity: value,
        },
        headerConfig,
      );
      if (reponse) {
        toast.success('Add to cart successfully!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex gap-4">
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
      <Button variant={'destructive'} type="button" onClick={handleAddToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default FormContentProduct;
