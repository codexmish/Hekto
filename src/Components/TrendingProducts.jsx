import React, { useEffect, useState } from "react";
import { CommonSectionHead } from "./common/CommonSectionHead";
import CommonFeaturedProduct from "./common/CommonFeaturedProduct";
import axios from "axios";

const TrendingProducts = () => {
  const [featuredProduct, setFeatureProduct] = useState();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setFeatureProduct(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section className="py-15 lg:py-[129px]">
        <div className="container">
          <CommonSectionHead head={"Featured Products"} />

          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-between px-3 lg:px-0">
            {featuredProduct?.slice(6, 10).map((item) => (
              <div key={item.id} className="mt-5 lg:mt-0">
                <CommonFeaturedProduct
                  img={item.thumbnail}
                  title={item.title}
                  code={item.meta.barcode}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingProducts;
