import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const ELEMENT_CATAGORY = [
  {
    id: 1,
    name: "All Categories",
    value: "all",
  },
  {
    id: 2,
    name: "Fresh Meat",
    value: "freshMeat",
  },
  {
    id: 3,
    name: "vetgetable",
    value: "vetgetable",
  },
];

const FormBelowHeader = () => {
  return (
    <form className="flex py-4">
      <Input
        type="text"
        placeholder="Search for items..."
        className="border border-[#64B496] min-w-80 rounded-r-none focus:outline-transparent active:outline-transparent focus-visible:ring-transparent"
      />
      <Select>
        <SelectTrigger className="rounded-none border border-[#64B496] border-l-transparent focus:outline-transparent active:outline-transparent focus-visible:ring-transparent">
          <SelectValue placeholder={ELEMENT_CATAGORY[0].name} />
        </SelectTrigger>
        <SelectContent className="focus:outline-transparent active:outline-transparent focus-visible:ring-transparent">
          <SelectGroup>
            {ELEMENT_CATAGORY.map((item, index) => (
              <SelectItem key={index} value={item.value}>
                {item.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button
        type="button"
        variant="destructive"
        className="rounded-l-none w-20 aspect-square"
      >
        <Search width={40} height={40} size={40} />
      </Button>
    </form>
  );
};

export default FormBelowHeader;
