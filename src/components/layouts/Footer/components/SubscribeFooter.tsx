import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import React from "react";
import SocialSubcribe from "../../../Social";
import Image from "next/image";

const SubscribeFooter = () => {
  return (
    <div className="pt-7 flex flex-col gap-2">
      <span className="font-sans text-lg leading-snug text-[#000000] font-bold">
        Subscribe Our Newsletter
      </span>
      <div className="space-y-6">
        <form className="flex items-center w-full max-w-md bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
          <Input
            className="flex-1 bg-transparent"
            id="email"
            placeholder="Email"
            type="email"
          />
          <Button className="px-3 py-2 bg-gray-300 dark:bg-gray-700">
            <Send className="text-gray-500 dark:text-gray-400" />
          </Button>
        </form>
        <SocialSubcribe />
        <div className="relative w-[26rem] h-[4.625rem]">
          <Image
            src={"/images/imageSub.webp"}
            alt="image"
            fill
            sizes="(min-width: 768px) 100vw, (min-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscribeFooter;
