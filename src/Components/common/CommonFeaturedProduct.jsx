import React from "react";
import { BsCart2 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";

const CommonFeaturedProduct = ({ img, title, code, price }) => {
  return (
    <>
      <div className="w-[270px] h-[361px] bg-white flex flex-col items-center rounded-2xl overflow-hidden shadow-[1px_-1px_11px_0px_#b8bcc1] group">
        <div className="img w-full h-[236px] bg-[#F6F7FB] flex items-center justify-center p-5 relative group overflow-hidden">
          <img src={img} alt="img" />
          <div className="icons absolute -left-20 group-hover:left-3 top-3 flex gap-4 transform duration-300">
            <div className="w-[30px] h-[30px] rounded-full hover:bg-[#eeeffb] flex items-center justify-center text-navyBlue text-xl">
              <BsCart2 />
            </div>
            <div className="w-[30px] h-[30px] rounded-full hover:bg-[#eeeffb] flex items-center justify-center text-blue-600 text-2xl">
              <CiHeart />
            </div>
          </div>
          <div className="w-[94px] h-[29px] flex justify-center items-center rounded-[5px] text-xs text-white font-medium font-josefin bg-[#08D15F] absolute left-[35%] -bottom-10 group-hover:bottom-3">
            View Details
          </div>
        </div>

        <div className="pro-con w-full flex flex-col items-center bg-white group-hover:bg-navyBlue duration-500">
          <h2 className="text-themePink group-hover:text-white text-[18px] font-bold font-lato mt-[15px] mb-7">
            {title}
          </h2>
          <p className="text-navyBlue group-hover:text-white text-sm font-normal font-lato mb-2">
            CODE-
            {code}
          </p>
          <p className="text-navyBlue group-hover:text-white text-sm font-normal font-lato pb-4">
            ${price}
          </p>
        </div>
      </div>
    </>
  );
};

export default CommonFeaturedProduct;
