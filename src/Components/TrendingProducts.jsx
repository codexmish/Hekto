import React, { useEffect, useState } from "react";
import { CommonSectionHead } from "./common/CommonSectionHead";
import CommonTendingProducts from "./common/CommonTendingProducts";
import axios from "axios";

const TrendingProducts = () => {




    const [trendongProduct, setTrendingProduct] = useState();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setTrendingProduct(res.data.products))
      .catch((err) => console.log(err));
  }, []);







  return (
    <>
      <section className="mt-[132px] mb-[136px]">
        <CommonSectionHead head={"Trending Products"} />

        <div className="container">

          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-between px-3 lg:px-0">
            {trendongProduct?.slice(3, 7).map((item) => (
              <div key={item.id} className="mt-5 lg:mt-0">
                <CommonTendingProducts img={item.thumbnail}/>
                {/* <CommonFeaturedProduct
                  img={item.thumbnail}
                  title={item.title}
                  code={item.meta.barcode}
                  price={item.price}
                /> */}

              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingProducts;
