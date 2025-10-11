import React from "react";
import { BsCart2 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";

const CommonSingleProduct = ({img, title, orgPrice, disPrice}) => {
  return (
    <>
      <div className="w-[360px] h-[306px] flex flex-col items-center justify-between shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.1)] relative group overflow-hidden">
        <div className="w-full h-[268px] overflow-hidden bg-gray-50 group-hover:bg-white flex justify-center items-center">
          <img className="w-[250px]" src={img} alt="thumbnail" />
        </div>
        <div className="w-full h-fit flex items-center justify-between px-2">
          <div className="h2 w-[156px]">
            <h2 className="text-base text-navyBlue font-normal font-josefin">
              {title}
            </h2>
            <div className="border-t-2 border-t-[#EEEFFB]"></div>
          </div>
          <div className="flex items-center gap-2">
            <h2 className="text-base text-navyBlue font-normal font-josefin">
              ${disPrice}
            </h2>
            <h2 className="text-xs text-themePink font-normal font-josefin line-through">
              ${orgPrice}
            </h2>
          </div>
        </div>

        <div className="icons absolute -left-10 group-hover:left-2 top-[40%] flex flex-col gap-4 transform duration-300">
          <div className="w-[30px] h-[30px] rounded-full hover:bg-[#eeeffb] flex items-center justify-center text-navyBlue text-xl">
            <BsCart2 />
          </div>
          <div className="w-[30px] h-[30px] rounded-full hover:bg-[#eeeffb] flex items-center justify-center text-navyBlue text-2xl">
            <CiHeart />
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonSingleProduct;
