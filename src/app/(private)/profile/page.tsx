"use client";
import { Input } from "@/components/ui/input";
import React from "react";
import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/useUser";

const ProfilePage: React.FC = () => {
  const { createDate, dataProfile, updateDate } = useUser();
  return (
    <form className="container  py-[6.25rem] space-y-3">
      <div className="grid grid-cols-2 gap-x-4 gap-y-3">
        <span className="col-span-2 font-sans text-xl font-bold leading-normal uppercase">
          my profile
        </span>
        <div className="space-y-3">
          <label className="font-sans text-lg font-bold leading-normal capitalize">
            first name
          </label>
          <Input
            value={dataProfile?.firstName}
            disabled
            className="font-sans text-base font-semibold leading-normal"
          />
        </div>
        <div className="space-y-3">
          <label className="font-sans text-lg font-bold leading-normal capitalize">
            last name
          </label>
          <Input
            value={dataProfile?.lastName}
            disabled
            className="font-sans text-base font-semibold leading-normal"
          />
        </div>
        <div className="space-y-3 col-span-2">
          <label className="font-sans text-lg font-bold leading-normal capitalize">
            address
          </label>
          <Input
            value={dataProfile?.address}
            disabled
            className="font-sans text-base font-semibold leading-normal"
          />
        </div>
        <div className="space-y-3">
          <label className="font-sans text-lg font-bold leading-normal capitalize">
            email
          </label>
          <Input
            value={dataProfile?.email}
            disabled
            className="font-sans text-base font-semibold leading-normal"
          />
        </div>
        <div className="space-y-3">
          <label className="font-sans text-lg font-bold leading-normal capitalize">
            phone
          </label>
          <Input
            value={dataProfile?.phoneNumber}
            disabled
            className="font-sans text-base font-semibold leading-normal"
          />
        </div>

        <div className="space-y-3">
          <label className="font-sans text-lg font-bold leading-normal capitalize">
            Create Date
          </label>
          <Input
            value={createDate}
            disabled
            className="font-sans text-base font-semibold leading-normal"
          />
        </div>
        <div className="space-y-3">
          <label className="font-sans text-lg font-bold leading-normal capitalize">
            Update date
          </label>
          <Input
            value={updateDate}
            disabled
            className="font-sans text-base font-semibold leading-normal"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          variant={"destructive"}
          className="font-sans text-lg leading-normal"
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default ProfilePage;
