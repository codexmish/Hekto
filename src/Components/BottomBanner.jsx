import React from "react";
import sofa from "../assets/images/sofa copy.png";

const BottomBanner = () => {
  return (
    <>
    <section className="bg-[#F1F0FF] py-4">
      <div className="container flex flex-wrap items-center justify-center px-3 lg:px-0">
        <div className="img">
          <img src={sofa} alt="sofa" />
        </div>

        <div className="text-con lg:w-[507px]">
          <h2 className="text-xl lg:text-4xl text-navyBlue font-bold font-josefin">
            Unique Features Of leatest & Trending Poducts
          </h2>
          <div className="small-text flex flex-col gap-3 mt-7 mb-9">
            <div className="text-1 flex items-center gap-3">
              <div className="w-2 lg:w-3 h-2 lg:h-3 rounded-full bg-themePink"></div>
              <p className="text-sm lg:text-base text-[#ACABC3] font-medium font-lato">
                All frames constructed with hardwood solids and laminates
              </p>
            </div>

            <div className="text-1 flex items-center gap-3">
              <div className="w-2 lg:w-3 h-2 lg:h-3 rounded-full bg-[#2B2BF5]"></div>
              <p className="text-sm lg:text-base text-[#ACABC3] font-medium font-lato">
                Reinforced with double wood dowels, glue, screw - nails corner
                blocks and machine nails
              </p>
            </div>

            <div className="text-1 flex items-center gap-3">
              <div className="w-2 lg:w-3 h-2 lg:h-3 rounded-full bg-[#2BF5CC]"></div>
              <p className="text-sm lg:text-base text-[#ACABC3] font-medium font-lato">
                Arms, backs and seats are structurally reinforced
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div>
              <button className="text-sm lg:text-base text-white font-normal font-josefin w-30 lg:w-[157px] h-9 lg:h-11 flex items-center justify-center bg-themePink">
                Add To Cart
              </button>
            </div>

            <div className="">
              <h3 className="text-xs lg:text-sm text-navyBlue font-medium font-josefin">
                B&B Italian Sofa{" "}
              </h3>
              <h3 className="text-xs lg:text-sm text-black font-normal font-lato">
                $32.00
              </h3>
            </div>
          </div>
        </div>
      </div>

    </section>
    </>
  );
};

export default BottomBanner;
