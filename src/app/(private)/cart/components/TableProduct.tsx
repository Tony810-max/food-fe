import React from "react";
import ItemProductCart from "./ItemProductCart";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ROUTES from "@/types/routes";
import { CartProduct } from "@/types/common";

interface ItemProductProps {
  dataCartProduct: CartProduct[];
  fetchCartProduct: () => void;
}

const TableProduct: React.FC<ItemProductProps> = ({
  dataCartProduct,
  fetchCartProduct,
}) => {
  return (
    <div className="space-y-8">
      <table className="w-full">
        <tbody className="w-full">
          <tr className="bg-[#e9e9e9]">
            <th className=" rounded-tl-lg">Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th className=" rounded-tr-lg">Action</th>
          </tr>

          {dataCartProduct?.map((product) => (
            <ItemProductCart
              key={product.id}
              fetchCartProduct={fetchCartProduct}
              data={product}
            />
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between">
        <Link
          href={ROUTES.SHOP}
          className="font-sans text-base leading-snug text-[#444444] font-normal underline hover:opacity-70"
        >
          Continue Shopping{" "}
        </Link>
        <Link href={ROUTES.CHECKOUT}>
          <Button variant={"destructive"}>Checkout</Button>
        </Link>
      </div>
    </div>
  );
};

export default TableProduct;
