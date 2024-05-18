"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/useUser";
import axios from "axios";
import { API_URL } from "@/types/common";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    code: yup
      .string()
      .required("Please enter the code sent to your email into this field."),
  })
  .required();

const ProfilePage: React.FC = () => {
  const { createDate, dataProfile, updateDate } = useUser();
  console.log(dataProfile);
  const [checkStatus, setCheckStatus] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleGetCode = async () => {
    try {
      const accessToken = JSON.parse(localStorage.getItem("accessToken")!);
      const responseGetCode = await axios.post(
        `${API_URL}/api/v1/user/generate-verify-code`,
        {},
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );

      if (responseGetCode) {
        setCheckStatus(false);
        toast.success(responseGetCode?.data?.message);
        console.log(responseGetCode);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleActiveUser = async (data: any) => {
    try {
      const accessToken = JSON.parse(localStorage.getItem("accessToken")!);
      const response = await axios.post(
        `${API_URL}/api/v1/user/activate-user`,
        {
          verifyCode: data?.code,
        },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      if (response) {
        toast.success(response?.data?.message);
      }
    } catch (error) {
      toast.error("Incorrect code, please check and enter again.");
    }
  };

  return (
    <form
      className="container py-[6.25rem] space-y-3"
      onSubmit={handleSubmit(handleActiveUser)}
    >
      <div className="sm:grid grid-cols-2 gap-x-2 gap-y-3 space-y-4 sm:space-y-0">
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
