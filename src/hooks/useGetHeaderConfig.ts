import { useMemo } from "react";

export const useGetHeaderConfig = () => {
  const headerConfig = useMemo(() => {
    if (typeof localStorage !== "undefined" && localStorage) {
      const token = localStorage.getItem("accessToken")
        ? JSON.parse(localStorage?.getItem("accessToken")!)
        : null;
      if (!token) return null;

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return config;
    }
  }, []);

  return { headerConfig };
};
