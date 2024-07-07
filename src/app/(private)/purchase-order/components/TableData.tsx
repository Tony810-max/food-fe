import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import StatusOrder from '../components/StatusOrder';
import { Ban, CheckCircle, Loader, Truck } from 'lucide-react';
import { IOrder } from '@/types/common';

import DetailRecipient from './DetailRecipient';
import { cn } from '@/lib/utils';
import OrderInformation from './OrderInformation';
interface ITableData {
  dataOrderUSer?: IOrder;
}

const TableData: React.FC<ITableData> = ({ dataOrderUSer }) => {
  const renderStatus = (status: string) => {
    switch (status) {
      case 'processing':
        return (
          <StatusOrder
            Icon={Loader}
            value="processing"
            variant="secondary"
            className="bg-slate-500 text-white"
          />
        );
      case 'shipped':
        return (
          <StatusOrder
            Icon={Truck}
            value="shipped"
            variant="secondary"
            className="bg-[#fef08a]"
          />
        );
      case 'delivered':
        return (
          <StatusOrder
            Icon={CheckCircle}
            value="shipped"
            variant="secondary"
            className="bg-[#bbf7d0]"
          />
        );
      case 'cancelled':
        return (
          <StatusOrder
            Icon={Ban}
            value="cancelled"
            variant="destructive"
            className=""
          />
        );
    }
  };
  console.log(dataOrderUSer);
  return (
    <Table>
      <TableCaption>A list of your recent order.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-center">Invoice</TableHead>
          <TableHead className="text-center w-fit">Status</TableHead>
          <TableHead className="font-sans text-base font-bold text-center">
            Method
          </TableHead>
          <TableHead className="font-sans text-base font-bold text-center">
            Recipient Information
          </TableHead>
          <TableHead className="font-sans text-base font-bold text-center">
            Order information
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataOrderUSer?.data?.map((order) => (
          <TableRow
            key={order?.id}
            className={cn({ 'bg-slate-300 ': order?.id % 2 === 0 })}
          >
            <TableCell className="text-center">{order?.id}</TableCell>
            <TableCell className="text-center">
              {renderStatus(order?.status)}
            </TableCell>
            <TableCell className="font-sans text-base capitalize font-semibold text-center">
              {order?.type}
            </TableCell>
            <TableCell className="text-center">
              <DetailRecipient dataUser={order?.shippingAddress} />
            </TableCell>
            <TableCell className="text-center">
              <OrderInformation dataOrderInfo={order?.products} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableData;
