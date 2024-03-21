import Heading from "@/components/Heading";
import ProductCard from "@/components/ProductCard";
import useDetailProduct from "@/hooks/useDetailProduct";
import useProduct from "@/hooks/useProduct";
import { IProduct } from "@/types/common";
// import { Product } from "@/types/common";
import React, { useEffect, useState } from "react";

const PopularProductDetail = () => {
  const { dataProducts } = useDetailProduct();
  const { products } = useProduct(); //all product
  const [dataFilterProduct, setDataFilterProduct] = useState<IProduct[]>();
  // console.log("Prodct: ", products);
  // console.log("dataProducts: ", dataProducts);
  useEffect(() => {
    if (dataProducts?.category?.id) {
      const filterProduct = products?.filter(
        (product) => product.category_id === dataProducts?.category?.id
      );
      setDataFilterProduct(filterProduct);
      console.log(filterProduct);
    }
  }, [products, dataProducts]);
  return (
    <div>
      <Heading
        title="Popular Products"
        des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et viverra maecenas accumsan lacus vel facilisis."
      />
      <div className="grid grid-cols-4 gap-x-6">
        {dataFilterProduct?.map((data, index) => (
          <ProductCard
            key={index}
            id={""}
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
