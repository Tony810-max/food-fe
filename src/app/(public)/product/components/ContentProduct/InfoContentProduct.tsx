import { DetailProductContext } from '@/contexts/useProductDetailContext';
import React from 'react';

const InfoContentProduct = () => {
  const context = React.useContext(DetailProductContext);
  const data = context.dataDetailProducts;
  return (
    <table>
      <tbody className="flex flex-col gap-[0.6rem]">
        <tr>
          <th className="min-w-24 text-left">Name food </th>
          <td>:</td>
          <td className="px-[0.6rem]">{data?.title}</td>
        </tr>
        <tr>
          <th className="min-w-24 text-left">Stock</th>
          <td>:</td>
          <td className="px-[0.6rem]">{data?.stock}</td>
        </tr>

        <tr>
          <th className="min-w-24 text-left">Item</th>
          <td>:</td>
          <td className="px-[0.6rem]">{data?.category?.title}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default InfoContentProduct;
