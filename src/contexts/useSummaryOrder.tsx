import useCartProduct from '@/hooks/useCartProduct';
import { CartProduct } from '@/types/common';
import React from 'react';

interface cartContext {
  summaryValue: number;
  dataCartProduct: CartProduct | null | undefined;
}

export const CartContext = React.createContext<cartContext>({
  summaryValue: 0,
  dataCartProduct: null,
});
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const { dataCartProduct, summaryValue } = useCartProduct();
  const context = React.useMemo(() => {
    return { dataCartProduct, summaryValue };
  }, [dataCartProduct, summaryValue]);
  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};
