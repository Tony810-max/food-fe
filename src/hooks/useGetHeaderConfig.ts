import { useMemo } from "react";

export const useGetHeaderConfig = () => {
  const headerConfig = useMemo(() => {
    if (typeof localStorage !== "undefined" && localStorage) {
      const token = localStorage.getItem("access-token")
        ? JSON.parse(localStorage?.getItem("access-token")!)
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
