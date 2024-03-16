import { useMemo, useState } from "react";

const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false);

  const user = useMemo(() => {
    const user = localStorage.getItem("user");
    const accessToken = localStorage.getItem("access-token");

    if (user && accessToken) return user;

    return null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin, setIsLogin]);

  return {
    user: user ? JSON.parse(user) : null,
    isLogin: isLogin,
    setIsLogin: setIsLogin,
  };
};

export default useAuth;
