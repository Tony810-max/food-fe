import React from 'react';

import SearchSideRight from './SearchSideRight';
import CategorySideRight from './CategorySideRight';
import RecentPostSideRight from './RecentPostSideRight';
import LatestSideRight from './LatestSideRight';
import PopularSideRight from './PopularSideRight';

const SideRightBLog = () => {
  return (
    <div className="col-span-1 h-fit py-6 px-7 border rounded-[0.313rem]">
      <SearchSideRight />
      <CategorySideRight />
      <RecentPostSideRight />
      <LatestSideRight />
      <PopularSideRight />
    </div>
  );
};

export default SideRightBLog;
