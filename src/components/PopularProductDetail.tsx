import Heading from "@/components/Heading";
import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/types/common";
import React from "react";

interface ProductProps {
  data: undefined | IProduct[];
}

const PopularProductDetail: React.FC<ProductProps> = ({ data }) => {
  return (
    <div>
      <Heading
        title="Popular Products"
        des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et viverra maecenas accumsan lacus vel facilisis."
      />
      <div className="grid grid-cols-4 gap-x-6 py-8">
        {data &&
          data?.length > 0 &&
          data?.map((data, index) => (
            <ProductCard
              key={index}
              id={data?.id}
              category={data.category_title}
              rating={4}
              desc={data.description}
              image={data.images[0]}
              salePrice={data.price}
              originalPrice={""}
            />
          ))}
      </div>
    </div>
  );
};

export default PopularProductDetail;
