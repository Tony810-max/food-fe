import ROUTES from '@/types/routes';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const HeaderChangePassword = () => {
  return (
    <Link href={ROUTES.HOME} className="block px-2 py-3">
      <ChevronLeft size={32} color="#f42f2c" />
    </Link>
  );
};

export default HeaderChangePassword;
