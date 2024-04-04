import { API_URL, IProfile } from "@/types/common";
import { useCallback, useEffect, useState } from "react";
import { format } from "date-fns";
import { useGetHeaderConfig } from "./useGetHeaderConfig";
import axios from "axios";

export const useUser = () => {
  const [dataProfile, setDataProfile] = useState<IProfile>({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    createdAt: "",
    updatedAt: "",
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
      console.log(error);
    }
  }, [headerConfig]);

  useEffect(() => {
    fetchDataProfile();
  }, [fetchDataProfile]);
  return {
    dataProfile,
    createDate,
    updateDate,
  };
};
