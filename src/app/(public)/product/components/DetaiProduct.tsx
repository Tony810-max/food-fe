'use client';
import React from 'react';

import ImageProduct from './ImageProduct';
import ContentProduct from './ContentProduct';
import AboutProduct from './AboutProductSection';

const DetaiProduct = () => {
  return (
    <div className=" sm:grid grid-cols-2 space-y-4  min-h-screen">
      <ImageProduct />
      <ContentProduct />
      <AboutProduct />
    </div>
  );
};

export default DetaiProduct;
