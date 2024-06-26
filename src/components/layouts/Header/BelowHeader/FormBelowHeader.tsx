'use client';
import React from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import ROUTES from '@/types/routes';
import { useRouter } from 'next/navigation';
import { ICategory } from '@/types/common';

type Inputs = {
  searchValue: string;
  categoryValue: string;
};

interface Props {
  categories: ICategory[];
}

const FormBelowHeader: React.FC<Props> = ({ categories }) => {
  const router = useRouter();
  const { register, handleSubmit, control } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const searchItem = data?.searchValue?.trim()?.toLocaleLowerCase();

    router?.replace(
      `${ROUTES?.SHOP}?search=${searchItem}&category=${data?.categoryValue}`,
    );
  };

  return (
    <form className="flex py-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        placeholder="Search for items..."
        {...register('searchValue')}
        className="border border-[#64B496] min-w-80 rounded-r-none focus:outline-transparent active:outline-transparent focus-visible:ring-transparent"
      />
      <Controller
        name="categoryValue"
        control={control}
        render={({ field }) => (
          <Select {...field} onValueChange={field.onChange}>
            <SelectTrigger className="w-full rounded-none border border-[#64B496] border-l-transparent focus:outline-transparent active:outline-transparent focus-visible:ring-transparent">
              <SelectValue placeholder="Select categories" />
            </SelectTrigger>
            <SelectContent
              ref={field.ref}
              className="focus:outline-transparent active:outline-transparent focus-visible:ring-transparent"
            >
              <SelectGroup>
                {categories?.map((item) => (
                  <SelectItem key={item.id} value={item?.title}>
                    {item?.title}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      />
      <Button type="submit" variant="destructive" className="rounded-l-none">
        <Search width={15} />
      </Button>
    </form>
  );
};

export default FormBelowHeader;
