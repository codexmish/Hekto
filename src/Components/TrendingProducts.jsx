import React from "react";
import { CommonSectionHead } from "./common/CommonSectionHead";
import CommonTendingProducts from "./common/CommonTendingProducts";

const TrendingProducts = () => {
  return (
    <>
      <section className="mt-[132px] mb-[136px]">
        <CommonSectionHead head={"Trending Products"} />

        <div className="container">
          <div>
            <CommonTendingProducts/>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingProducts;
