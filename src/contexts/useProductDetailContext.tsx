import { API_URL, IProductDetail } from '@/types/common';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React from 'react';

interface IProductDetailContext {
  dataDetailProducts?: IProductDetail | null;
  isLoading: boolean;
}

export const DetailProductContext = React.createContext<IProductDetailContext>({
  dataDetailProducts: null,
  isLoading: false,
});

export const ProductDetailProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [dataDetailProducts, setDataDetailProducts] =
    React.useState<IProductDetail>();
  const params = useParams();
  const idProduct = Number(params.id);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const fetchDataDetailProduct = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const reponse = await axios.get(
        `${API_URL}/api/v1/products/${idProduct}`,
      );
      if (reponse) {
        reponse;
        setDataDetailProducts(reponse.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [idProduct]);

  React.useEffect(() => {
    fetchDataDetailProduct();
  }, [fetchDataDetailProduct]);

  const contextDetailProduct = React.useMemo(() => {
    return {
      dataDetailProducts,
      isLoading,
    };
  }, [dataDetailProducts, isLoading]);
  return (
    <DetailProductContext.Provider value={contextDetailProduct}>
      {children}
    </DetailProductContext.Provider>
  );
};
