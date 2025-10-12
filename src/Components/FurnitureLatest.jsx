import React, { useEffect, useState } from "react";
import CommonSingleProduct from "./common/CommonSingleProduct";
import axios from "axios";

const FurnitureLatest = () => {
  const [allProducts, setAllProducts] = useState([]);

  let furnitureProduct = allProducts.filter(
    (item) => item.category == "furniture"
  );

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setAllProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="mt-10 lg:mt-19 mb-10 flex flex-wrap items-center justify-center mx-4 gap-x-9 gap-y-12 lg:gap-y-30">
        {furnitureProduct.map((item) => (
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

export default FurnitureLatest;
