/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Input } from '@/components/ui/input';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
  UseFormReset,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import { useProvinces } from '@/hooks/useProvinces';
import { useAddress } from '@/hooks/useAddress';

interface IBillingProps {
  register: UseFormRegister<any>;
  watch: UseFormWatch<any>;
  control: Control<any>;
  errors: FieldErrors<any>;
  setValue: UseFormSetValue<any>;
  reset: UseFormReset<any>;
}

const BillingDetailsProduct: React.FC<IBillingProps> = ({
  register,
  watch,
  errors,
  setValue,
  control,
  // reset,
}) => {
  const addressInput = watch('address');
  const { addressSearch, isChooseAddress, setIsChooseAddress } =
    useAddress(addressInput);
  const { provinces } = useProvinces();

  return (
    <div className="col-span-2 space-y-[1.875rem]">
      <div className=" border border-[#e9e9e9] p-6 rounded-[0.313rem]">
        <span className="text-xl leading-tight font-sans font-semibold">
          Billing Details
        </span>
        <div className="py-2">
          <div className="w-full grid grid-cols-2 gap-[1.875rem] pt-[1.938rem]">
            <div className="col-span-2 space-y-2">
              <label>Full name*</label>
              <Input {...register('name', { required: true })} />
              {errors.name && (
                <span className="text-red-500 italic">
                  This field is required
                </span>
              )}
            </div>
            <div className="col-span-2 space-y-2">
              <label>Address*</label>

              <div className="relative">
                <Input {...register('address', { required: true })} />
                {/* {valueCheckbox === 'existingAddress' ? (
                  <Input value={dataProfile?.address} />
                ) : (
                  <Input
                    {...(register('address', { required: true }), reset)}
                  />
                )} */}
                {errors.address && (
                  <span className="text-red-500 italic">
                    This field is required
                  </span>
                )}
                {addressSearch?.length > 0 && !isChooseAddress && (
                  <div className="absolute w-full flex flex-col bg-white border border-slate-400 rounded-md p-2 mt-2">
                    {addressSearch?.map((address: any) => (
                      <button
                        onClick={() => {
                          setValue('address', address.description);
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
            <div className="col-span-2 space-y-2">
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
            <div className="space-y-2">
              <label>Country*</label>
              <Input {...register('country', { required: true })} />
              {errors.country && (
                <span className="text-red-500 italic">
                  This field is required
                </span>
              )}
            </div>
            <div className="space-y-2">
              <label>Region State*</label>
              <Input {...register('state', { required: true })} />
              {errors.state && (
                <span className="text-red-500 italic">
                  This field is required
                </span>
              )}
            </div>
            <div className="space-y-2">
              <label>Phone number*</label>
              <Input {...register('phoneNumber', { required: true })} />
              {errors.phoneNumber && (
                <span className="text-red-500 italic">
                  This field is required
                </span>
              )}
            </div>
            <div className="space-y-2">
              <label>Post Code</label>
              <Input {...register('postCode', { required: true })} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingDetailsProduct;
