// /* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React, { Suspense, useEffect, useMemo } from 'react';
import HeaderAuth from '../../components/layouts/Auth/HeaderAuth';
import { useRouter } from 'next/navigation';
import ROUTES from '@/types/routes';

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user: any = useMemo(() => {
    if (typeof localStorage !== 'undefined') {
      const user = localStorage.getItem('user');
      const accessToken = localStorage.getItem('accessToken');
      if (user && accessToken) return user;
      return null;
    }
  }, []);

  useEffect(() => {
    if (!user) {
      router.push(ROUTES.HOME);
    }
  }, [router, user]);
  return (
    <>
      <Suspense>
        <HeaderAuth />
        {children}
        
      </Suspense>
    </>
  );
};

export default layout;
