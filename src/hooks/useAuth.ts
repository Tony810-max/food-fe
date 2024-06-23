import { useMemo } from 'react';

export const useAuth = () => {
  const user = useMemo(() => {
    if (typeof localStorage !== 'undefined') {
      const user = localStorage.getItem('user')
        ? JSON.parse(localStorage?.getItem('user') ?? "")
        : null;
      const accessToken = localStorage.getItem('accessToken')
        ? JSON.parse(localStorage.getItem('accessToken')!)
        : null;

      if (user && accessToken) return user;

      return null;
    }
  }, []);

  const handleLogOut = () => {
    if (localStorage && window) {
      localStorage?.removeItem('user');
      localStorage?.removeItem('accessToken');
      window?.location?.reload();
    }
  };

  return {
    user,
    handleLogOut,
  };
};
