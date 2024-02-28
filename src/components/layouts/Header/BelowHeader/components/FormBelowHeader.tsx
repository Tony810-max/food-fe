import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const ELEMENT_CATAGORY = [
    {
      id: 1,
      name: "all category",
      value: "allCategory",
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
    <form className=" flex">
      <Input
        type="text"
        placeholder="Search for items..."
        className="border border-[#64B496] w-full"
      />
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={ELEMENT_CATAGORY[0].name} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Category</SelectLabel>
            {ELEMENT_CATAGORY.map((item) => (
              <SelectItem key={item.id} value={item.value}>
                {item.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button type="submit" variant="destructive">
        <Search />
      </Button>
    </form>
  );
};

export default FormBelowHeader;
