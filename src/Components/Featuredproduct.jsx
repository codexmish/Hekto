import React from "react";
import { CommonSectionHead } from "./common/CommonSectionHead";
import CommonFeaturedProduct from "./common/CommonFeaturedProduct";

const Featuredproduct = () => {
  return (
    <>
      <section className="py-[129px]">
        <div className="container">
          <CommonSectionHead head={"Featured Products"} />

          <div className="mt-8">
            <CommonFeaturedProduct
              title={"Cantilever chair"}
              code={"Code - Y523201"}
              price={"$42.00"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Featuredproduct;
