import React, { useEffect, useState } from "react";
import CommonSingleProduct from "./common/CommonSingleProduct";
import axios from "axios";

const BeautyLatest = () => {
    const [allProducts, setAllProducts] = useState([]);
//   console.log(beautyProducts);

  let beautyProduct = allProducts.filter(
    (item) => item.category == "beauty"
);
// console.log(beautyProduct)

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setAllProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="mt-19 mb-10 flex flex-wrap items-center justify-center gap-x-9 gap-y-30">
        {beautyProduct.map((item) => (
          <CommonSingleProduct
          key={item.id}
            img={item.thumbnail}
            title={item.title}
            orgPrice={item.price}
            disPrice={Math.round(
              item.price - (item.price * item.discountPercentage) / 100
            )}
          />
        ))}
      </div>
    </>
  );
};

export default BeautyLatest;
