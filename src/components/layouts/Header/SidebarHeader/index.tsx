import Link from 'next/link';
import React from 'react';
import CategoryNavBar from '../AboveHeader/components/CategoryNavBar';
import ROUTES from '@/types/routes';
import { X } from 'lucide-react';
import BelowSidebarHeader from './components/BelowSidebarHeader';
import Image from 'next/image';

interface SidebarHeaderProps {
  check: boolean;
  onSetCheck: (value: boolean) => void;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ onSetCheck, check }) => {
  return (
    <div className="absolute z-10 py-4 right-0 top-0 w-fit h-screen bg-slate-400 rounded-[0.313rem]">
      <div
        className="flex justify-end px-2 "
        onClick={() => onSetCheck(!check)}
      >
        <X color="black" />
      </div>

      <div className="flex flex-col items-center gap-6">
        <Link href={ROUTES.HOME} className="text-white font-semibold text-base">
          Home
        </Link>
        <CategoryNavBar />
        <Link
          href={ROUTES.SHOP}
          className="text-white capitalize font-semibold text-base"
        >
          Products
        </Link>
        <Link
          href={ROUTES.BLOG}
          className="text-white capitalize font-semibold text-base"
        >
          BLOG
        </Link>
      </div>
      <BelowSidebarHeader />
    </div>
  );
};

export default SidebarHeader;
