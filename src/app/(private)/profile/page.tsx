"use client";
import React from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/useUser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InforProfile from "./components/InforProfile";
import { schemaActive, schemaProfile } from "./types/common";

const ProfilePage: React.FC = () => {
  const {
    createDate,
    dataProfile,
    updateDate,
    checkStatus,
    handleGetCode,
    handleActiveUser,
    handleUpdateProfile,
    editProfile,
    setEditProfile,
  } = useUser();

  const {
    register: registerActive,
    handleSubmit: handleSubmitActive,
    formState: { errors: errActive },
  } = useForm({
    resolver: yupResolver(schemaActive),
  });

  const {
    register: registerProfile,
    handleSubmit: handleSubmitProfile,
  } = useForm({
    resolver: yupResolver(schemaProfile),
  });

  return (
    <form
      className="container py-[6.25rem] space-y-3"
      onSubmit={handleSubmitProfile(handleUpdateProfile)}
    >
      <div className="sm:grid grid-cols-2 gap-x-2 gap-y-3 space-y-4 sm:space-y-0">
        <span className="col-span-2 font-sans text-xl font-bold leading-normal uppercase">
          my profile
        </span>
        <InforProfile
          variable="firstName"
          title="first name"
          register={registerProfile}
          value={dataProfile?.firstName}
          status={editProfile}
        />
        <InforProfile
          variable="lastName"
          title="last name"
          register={registerProfile}
          value={dataProfile?.lastName}
          status={editProfile}
        />

        <InforProfile
          title="address"
          register={registerProfile}
          variable="address"
          value={dataProfile?.address}
          status={editProfile}
        />
        <InforProfile
          title="email"
          variable="email"
          register={registerProfile}
          value={dataProfile?.email}
          status={editProfile}
        />
        <InforProfile
          variable="phone"
          title="phone"
          register={registerProfile}
          value={dataProfile?.phoneNumber}
          status={editProfile}
        />
        <InforProfile variable="" title="Create Date" value={createDate} />
        <InforProfile variable="" title="Update date" value={updateDate} />

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
          <form
            className="space-y-3"
            onSubmit={handleSubmitActive(handleActiveUser)}
          >
            <div className="space-y-3">
              <label className="font-sans text-lg font-bold leading-normal capitalize">
                status
              </label>
              <Input
                {...registerActive("code")}
                className="font-sans text-base font-semibold leading-normal"
              />
              {errActive.code?.message && (
                <p className="font-sans text-base text-red-600 capitalize">
                  {errActive.code?.message}
                </p>
              )}
              <p>Please enter the code sent to your Email.</p>
            </div>

            <Button
              type="submit"
              variant={"destructive"}
              className="font-sans text-lg font-medium"
            >
              Save
            </Button>
          </form>
        )}
        {dataProfile?.isActice && (
          <div className="space-y-3">
            <label className="font-sans text-lg font-bold leading-normal capitalize">
              status
            </label>
            <Input
              value="Account is actived"
              disabled
              className="font-sans text-white text-lg font-bold leading-normal bg-[#fd3f3f] uppercase"
            />
          </div>
        )}
      </div>
      <div className="flex justify-end">
        {editProfile && (
          <Button
            type="submit"
            variant={"destructive"}
            className="font-sans text-lg font-bold capitalize"
          >
            Save
          </Button>
        )}
        {!editProfile && (
          <Button
            type="button"
            variant={"destructive"}
            className="font-sans text-lg font-bold capitalize"
            onClick={() => setEditProfile(true)}
          >
            Edit profile
          </Button>
        )}
      </div>
    </form>
  );
};

export default ProfilePage;
