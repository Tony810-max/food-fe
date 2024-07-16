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
import { Ban, CheckCircle, Loader, Trash2, Truck } from 'lucide-react';
import { API_URL, IOrder } from '@/types/common';

import DetailRecipient from './DetailRecipient';
import { cn } from '@/lib/utils';
import OrderInformation from './OrderInformation';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';
interface ITableData {
  dataOrderUSer?: IOrder;
  fetchOrderUser: () => void;
  checkTab: boolean;
}

const TableData: React.FC<ITableData> = ({
  dataOrderUSer,
  fetchOrderUser,
  checkTab,
}) => {
  const searchParam = useSearchParams();
  const page = searchParam.get('page');
  const limit = 4;

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

  const handleCancelOrder = async (orderId: number) => {
    try {
      const accessToken = JSON.parse(localStorage.getItem('accessToken')!);
      const response = await axios.put(
        `${API_URL}/api/v1/orders/cancel/${orderId}`,
        {},
        { headers: { Authorization: `Bearer ${accessToken}` } },
      );
      if (response) {
        toast.success('Order cancelled successfully');
        fetchOrderUser();
      }
    } catch (error) {
      console.error(error);
    }
  };

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
          {checkTab && (
            <TableHead className="font-sans text-base font-bold text-center">
              Cancel Order
            </TableHead>
          )}
        </TableRow>
      </TableHeader>
      <TableBody className="min-h-80">
        {dataOrderUSer?.data?.map((order, index) => (
          <TableRow
            key={order?.id}
            className={cn({ 'bg-slate-300 ': order?.id % 2 === 0 })}
          >
            <TableCell className="text-center">
              {index + 1 + (Number(page) - 1) * limit}
            </TableCell>
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
            {checkTab && (
              <TableCell className="flex justify-center ">
                <Trash2
                  color="red"
                  className="hover:cursor-pointer "
                  onClick={() => handleCancelOrder(order?.id)}
                />
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableData;
