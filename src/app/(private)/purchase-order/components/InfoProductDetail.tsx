import React from 'react';
import { IOrderInfo } from './OrderInformation';
import FormValueInfo from './FormValueInfo';
import Link from 'next/link';

const InfoProductDetail: React.FC<IOrderInfo> = ({ dataOrderInfo }) => {
  dataOrderInfo;
  const arrPriceProduct = dataOrderInfo?.map((order) => {
    return Number(order?.product_quantity) * Number(order?.product_unit_price);
  });

  const totalPrice = arrPriceProduct?.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
  );

  return (
    <div className="space-y-2">
      <FormValueInfo title={'Total product'} value={dataOrderInfo?.length} />
      <FormValueInfo title={'total price'} value={totalPrice} />
      {/* <FormValueInfo title={'total price'} value={totalPrice} /> */}
      <div>
        {dataOrderInfo?.map((dataOrder) => (
          <div key={dataOrder?.id} className="flex items-center gap-2">
            <FormValueInfo
              title={'Name product'}
              value={dataOrder?.product?.title}
            />
            <Link
              href={`/product/${dataOrder?.product?.id}`}
              target="_blank"
              className="font-sans text-base text-nowrap hover:opacity-70 hover:underline"
            >
              View Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoProductDetail;
