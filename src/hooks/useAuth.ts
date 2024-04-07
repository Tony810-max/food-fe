import { useMemo } from "react";

export const useAuth = () => {
  const user: any = useMemo(() => {
    if (typeof localStorage !== "undefined") {
      const user = localStorage.getItem("user")
        ? JSON.parse(localStorage?.getItem("user")!)
        : null;
      const accessToken = localStorage.getItem("access-token")
        ? JSON.parse(localStorage.getItem("access-token")!)
        : null;

      if (user && accessToken) return user;

      return null;
    }
  }, []);

  const handleLogOut = () => {
    if (localStorage && window) {
      localStorage?.removeItem("user");
      localStorage?.removeItem("access-token");
      window?.location?.reload();
    }
  };
  return {
    user,
    handleLogOut,
  };
};
