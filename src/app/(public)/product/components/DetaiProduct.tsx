import React from "react";

import ImageProduct from "./ImageProduct";
import ContentProduct from "./ContentProduct";
import AboutProduct from "./AboutProduct";

const DetaiProduct = () => {
  return (
    <div className="col-span-4 grid grid-cols-2 gap-x-3 min-h-screen">
      <ImageProduct />
      <ContentProduct />
      <AboutProduct />
    </div>
  );
};

export default DetaiProduct;
