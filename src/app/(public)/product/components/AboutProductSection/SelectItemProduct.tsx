import React from 'react';
import { HeadingProps } from './HeadingAboutProduct';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DATA_HEADING } from '../../types/constant';

const SelectItemProduct: React.FC<HeadingProps> = ({ onSetValueLabel }) => {
  return (
    <Select onValueChange={(value) => onSetValueLabel(value)}>
      <SelectTrigger className="w-[180px] capitalize font-semibold sm:hidden">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          {DATA_HEADING?.map((data) => (
            <SelectItem value={data?.value} key={data?.id}>
              {data?.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectItemProduct;
