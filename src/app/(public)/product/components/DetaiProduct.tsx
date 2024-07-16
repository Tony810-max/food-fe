'use client';
import React from 'react';

import ImageProduct from './ImageProduct';
import ContentProduct from './ContentProduct';
import AboutProduct from './AboutProductSection';

const DetaiProduct = () => {
  return (
    <div className="col-span-5 grid grid-cols-2 gap-x-3 gap-y-10 min-h-screen">
      <ImageProduct />
      <ContentProduct />
      <AboutProduct />
    </div>
  );
};

export default DetaiProduct;
