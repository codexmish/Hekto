import React from "react";

const CommonFeaturedProduct = ({ img, title, code, price }) => {
  return (
    <>
      <div className="w-[270px] h-[361px] bg-white flex flex-col items-center rounded-2xl overflow-hidden shadow-[1px_-1px_11px_0px_#b8bcc1]">
        <div className="img w-full h-[236px] bg-[#F6F7FB] flex items-center justify-center p-5">
          <img src={img} alt="img" />
        </div>

        <div className="pro-con flex flex-col items-center">
          <h2 className="text-themePink text-[18px] font-bold font-lato mt-[15px] mb-7">
            {title}
          </h2>
          <p className="text-navyBlue text-sm font-normal font-lato mb-2">
            CODE- 
            {code}
          </p>
          <p className="text-navyBlue text-sm font-normal font-lato pb-4">{price}</p>
        </div>
      </div>
    </>
  );
};

export default CommonFeaturedProduct;
