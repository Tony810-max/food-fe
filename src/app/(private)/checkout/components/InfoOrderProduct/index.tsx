import React from 'react';

import PagementMethodOrder from './components/PagementMethodOrder';
import PagementMethodImage from './components/PagementMethodImage';
import SummaryOrderProduct from './components/SummaryOrderProduct';

const InfoOrderProduct = () => {
  return (
    <div className="col-span-1 px-3 space-y-[1.875rem]">
      <SummaryOrderProduct />
      <PagementMethodOrder />
      <PagementMethodImage />
    </div>
  );
};

export default InfoOrderProduct;
