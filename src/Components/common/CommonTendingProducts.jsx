import React from "react";

const CommonTendingProducts = (img) => {
  return (
    <>
      <div className="w-[270px] h-[350px] p-3">
        <div className="w-[247px] h-[244px] bg-gray-200 flex items-center justify-center">
          <div className="img">
            <img src={img} alt="product" />
          </div>
        </div>

        <div className="content">
            <h2 className="text-base text-navyBlue font-bold font-lato">Cantilever chair</h2>
        </div>
      </div>
    </>
  );
};

export default CommonTendingProducts;
