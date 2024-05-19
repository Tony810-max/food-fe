"use client";
import { Input } from "@/components/ui/input";
import React from "react";
import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/useUser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./components/common";
import InforProfile from "./components/InforProfile";

const ProfilePage: React.FC = () => {
  const {
    createDate,
    dataProfile,
    updateDate,
    checkStatus,
    handleGetCode,
    handleActiveUser,
  } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form
      className="container py-[6.25rem] space-y-3"
      onSubmit={handleSubmit(handleActiveUser)}
    >
      <div className="sm:grid grid-cols-2 gap-x-2 gap-y-3 space-y-4 sm:space-y-0">
        <span className="col-span-2 font-sans text-xl font-bold leading-normal uppercase">
          my profile
        </span>
        <InforProfile title="first name" value={dataProfile?.firstName} />
        <InforProfile title="last name" value={dataProfile?.lastName} />
        <InforProfile
          title="address"
          value={dataProfile?.address}
          className="col-span-2"
        />
        <InforProfile title="email" value={dataProfile?.email} />
        <InforProfile title="phone" value={dataProfile?.phoneNumber} />
        <InforProfile title="Create Date" value={createDate} />
        <InforProfile title="Update date" value={updateDate} />

        {dataProfile?.isActice ||
          (checkStatus && (
            <Button
              type="button"
              variant={"destructive"}
              className="font-sans text-lg font-medium capitalize"
              onClick={handleGetCode}
            >
              Active account
            </Button>
          ))}
        {!dataProfile?.isActice && !checkStatus && (
          <div className="space-y-3">
            <div className="space-y-3">
              <label className="font-sans text-lg font-bold leading-normal capitalize">
                status
              </label>
              <Input
                {...register("code")}
                className="font-sans text-base font-semibold leading-normal"
              />
              {errors.code?.message && (
                <p className="font-sans text-base text-red-600 capitalize">
                  {errors.code?.message}
                </p>
              )}
              <p>Please enter the code sent to your Email.</p>
            </div>

            <Button
              type="submit"
              variant={"destructive"}
              className="font-sans text-lg font-medium"
              onClick={handleActiveUser}
            >
              Save
            </Button>
          </div>
        )}
        {dataProfile?.isActice && (
          <div className="space-y-3">
            <label className="font-sans text-lg font-bold leading-normal capitalize">
              status
            </label>
            <Input
              value="Actived"
              disabled
              className="font-sans text-white text-lg font-bold leading-normal bg-[#fd3f3f] uppercase"
            />
          </div>
        )}
      </div>
    </form>
  );
};

export default ProfilePage;
