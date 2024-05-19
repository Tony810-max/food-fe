import { Input } from "@/components/ui/input";
import React from "react";

interface infoProfileProps {
  title: string;
  value: string;
  className?: string;
}

const InforProfile: React.FC<infoProfileProps> = ({
  className,
  title,
  value,
}) => {
  return (
    <div className={`space-y-3 ${className}`}>
      <label className="font-sans text-lg font-bold leading-normal capitalize">
        {title}
      </label>
      <Input
        value={value}
        disabled
        className="font-sans text-base font-semibold leading-normal"
      />
    </div>
  );
};

export default InforProfile;
