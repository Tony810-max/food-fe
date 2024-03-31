"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useCallback, useEffect, useState } from "react";
import CheckBoxBillingProduct from "../../../../../components/Checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { API_URL } from "@/types/common";
import axios from "axios";
import { useGetHeaderConfig } from "@/hooks/useGetHeaderConfig";
import { useProvinces } from "@/hooks/useProvinces";
import { useDebouncedValue } from "@mantine/hooks";
import useCartProduct from "@/hooks/useCartProduct";
import { useAddress } from "@/hooks/useAddress";
import { toast } from "react-toastify";

type Inputs = {
  address: string;
  name: string;
  postCode: string;
  exampleRequired: string;
  country: string;
  state: string;
  city: string;
  phoneNumber: string;
};

const BillingDetailsProduct = () => {
  const { headerConfig } = useGetHeaderConfig();
  const { dataCartProduct } = useCartProduct();
  const { provinces } = useProvinces();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm<Inputs>({
    mode: "onChange",
  });
  const [address] = watch(["address"]);
  const { addressSearch, setIsChooseAddress, isChooseAddress } =
    useAddress(address);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      if (!headerConfig) {
        return;
      }
      let cart: { id: any; product_unit_price: any; quantity: any }[] = [];
      if (dataCartProduct) {
        cart = dataCartProduct.map((item: any) => {
          return {
            id: item?.product?.id,
            product_unit_price: item?.product?.price,
            quantity: item.quantity,
          };
        });
      }
      const formData = {
        shippingAddress: {
          phoneNumber: data.phoneNumber,
          address: data.address,
          city: data.city,
          name: data.name,
          postCode: data.postCode,
          country: data.country,
          state: data.state,
        },
        orderedProducts: cart,
      };
      const response = await axios.post(
        `${API_URL}/api/v1/orders`,
        formData,
        headerConfig
      );
      if (response) {
        toast.success("Ban da dat hang thanh cong, hang dang duoc giao den ban")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="col-span-2 space-y-[1.875rem]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className=" border border-[#e9e9e9] p-6 rounded-[0.313rem]">
        <span className="text-xl leading-tight font-sans font-semibold">
          Billing Details
        </span>
        <div className="py-6">
          <span className="text-base leading-none text-[#2b2b2d] font-sans">
            Checkout Options
          </span>
          <div className="flex gap-[3.074rem] py-3">
            <CheckBoxBillingProduct
              id={"existingAddress"}
              title={"I want to use an existing address"}
            />
            <CheckBoxBillingProduct
              id={"newAddress"}
              title={"I want to use a new address"}
            />
          </div>
          <div className="w-full grid grid-cols-2 gap-[1.875rem] pt-[1.938rem]">
            <div className="col-span-2">
              <label>Full name*</label>
              <Input {...register("name", { required: true })} />
              {errors.name && (
                <span className="text-red-500 italic">
                  This field is required
                </span>
              )}
            </div>
            <div className="col-span-2">
              <label>Address*</label>
              <div className="relative">
                <Input {...register("address", { required: true })} />
                {errors.address && (
                  <span className="text-red-500 italic">
                    This field is required
                  </span>
                )}
                {addressSearch?.length > 0 && !isChooseAddress && !!address && (
                  <div className="absolute w-full flex flex-col bg-white border border-slate-400 rounded-md p-2 mt-2">
                    {addressSearch?.map((address: any) => (
                      <button
                        onClick={() => {
                          setValue("address", address.description);
                          setIsChooseAddress(true);
                        }}
                        key={address.place_id}
                        className="text-left hover:bg-slate-500"
                      >
                        {address.description}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="col-span-2">
              <label>City*</label>
              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} {...field}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="City" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>City</SelectLabel>
                        {provinces?.map((data) => (
                          <SelectItem key={data._id} value={data.name}>
                            {data.name_with_type}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div>
              <label>Country*</label>
              <Input {...register("country", { required: true })} />
              {errors.country && (
                <span className="text-red-500 italic">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label>Region State*</label>
              <Input {...register("state", { required: true })} />
              {errors.state && (
                <span className="text-red-500 italic">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label>Phone number*</label>
              <Input {...register("phoneNumber", { required: true })} />
              {errors.phoneNumber && (
                <span className="text-red-500 italic">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label>Post Code</label>
              <Input {...register("postCode", { required: true })} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button type="submit" variant={"destructive"}>
          Place Order
        </Button>
      </div>
    </form>
  );
};

export default BillingDetailsProduct;
