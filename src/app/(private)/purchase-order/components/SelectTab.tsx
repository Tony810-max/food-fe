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
import { DATA_TAB } from '../types/constant';

interface ISelect {
  onSetTabCurr: React.Dispatch<React.SetStateAction<string>>;
}

const SelectTab: React.FC<ISelect> = ({ onSetTabCurr }) => {
  return (
    <Select
      defaultValue={DATA_TAB[0]}
      onValueChange={(value) => onSetTabCurr(value)}
    >
      <SelectTrigger className="w-[180px] capitalize">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent className="flex justify-center">
        <SelectGroup>
          <SelectLabel className='font-sans text-sm'>Status</SelectLabel>
          {DATA_TAB?.map((tab) => (
            <SelectItem key={tab} value={tab}>
              {tab}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectTab;
