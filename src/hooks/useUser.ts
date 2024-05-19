import { API_URL, IProfile } from "@/types/common";
import { useCallback, useEffect, useState } from "react";
import { format } from "date-fns";
import { useGetHeaderConfig } from "./useGetHeaderConfig";
import axios from "axios";
import { toast } from "react-toastify";

export const useUser = () => {
  const [checkStatus, setCheckStatus] = useState(true);

  const [dataProfile, setDataProfile] = useState<IProfile>({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    createdAt: "",
    updatedAt: "",
    gender: "",
    dateOfBirth: "",
    deletedAt: "",
    isActice: false,
    roles: [],
  });
  const { headerConfig } = useGetHeaderConfig();
  const createDate = dataProfile?.updatedAt
    ? format(new Date(dataProfile.createdAt), "dd-MM-yyyy hh:mm:ss")
    : "";
  const updateDate = dataProfile?.updatedAt
    ? format(new Date(dataProfile.updatedAt), "dd-MM-yyyy hh:mm:ss")
    : "";

  const fetchDataProfile = useCallback(async () => {
    try {
      if (!headerConfig) {
        return;
      }
      const response = await axios.get(
        `${API_URL}/api/v1/user/me`,
        headerConfig
      );
      if (response) {
        setDataProfile(response.data);
      }
    } catch (error) {
      toast.error("Account is expired");
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
    }
  }, [headerConfig]);

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

  useEffect(() => {
    fetchDataProfile();
  }, [fetchDataProfile]);
  return {
    dataProfile,
    createDate,
    checkStatus,
    updateDate,
    handleGetCode,
    handleActiveUser,
  };
};
