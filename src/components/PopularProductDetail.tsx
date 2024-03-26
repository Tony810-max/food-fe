import Heading from "@/components/Heading";
import ProductCard from "@/components/ProductCard";
import useDetailProduct from "@/hooks/useDetailProduct";
import useProduct from "@/hooks/useProduct";
import { IProduct, Product } from "@/types/common";
import React, { useEffect, useState } from "react";

// interface ProductProps {
//   data: Product | undefined;
// }

const PopularProductDetail = () => {
  const { dataProducts } = useDetailProduct();
  const { products } = useProduct();
  const [dataFilterProduct, setDataFilterProduct] = useState<IProduct[]>();
  useEffect(() => {
    if (dataProducts?.category?.id) {
      const filterProduct = products?.filter(
        (product) => product.category_id === dataProducts?.category?.id
      );
      setDataFilterProduct(filterProduct);
    }
  }, [products, dataProducts]);

  return (
    <div>
      <Heading
        title="Popular Products"
        des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et viverra maecenas accumsan lacus vel facilisis."
      />
      <div className="grid grid-cols-4 gap-x-6 py-8">
        {dataFilterProduct?.map((data, index) => (
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
