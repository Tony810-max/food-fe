import { Product } from '@/types/common';
import React from 'react';

interface ContentProps {
  data: Product | undefined;
}

const InfoContentProduct: React.FC<ContentProps> = ({ data }) => {
  return (
    <table>
      <tbody className="flex flex-col gap-[0.6rem]">
        <tr>
          <th className="min-w-24 text-left">Brand </th>
          <td>:</td>
          <td className="px-[0.6rem]">{data?.title}</td>
        </tr>
        <tr>
          <th className="min-w-24 text-left">Flavour</th>
          <td>:</td>
          <td className="px-[0.6rem]">Super Saver Pack</td>
        </tr>
        <tr>
          <th className="min-w-24 text-left">Diet Type</th>
          <td>:</td>
          <td className="px-[0.6rem]">{data?.id}</td>
        </tr>
        <tr>
          <th className="min-w-24 text-left">Weight</th>
          <td>:</td>
          <td className="px-[0.6rem]">200 Grams</td>
        </tr>
        <tr>
          <th className="min-w-24 text-left">Speciality</th>
          <td>:</td>
          <td className="px-[0.6rem]">Gluten Free, Sugar Free</td>
        </tr>
        <tr>
          <th className="min-w-24 text-left">Info</th>
          <td>:</td>
          <td className="px-[0.6rem]">Gluten Free, Sugar Free</td>
        </tr>
        <tr>
          <th className="min-w-24 text-left">Item</th>
          <td>:</td>
          <td className="px-[0.6rem]">{data?.category?.id}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default InfoContentProduct;
