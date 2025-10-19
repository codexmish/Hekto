import React from "react";

const CommonTendingProducts = ({img, head, discountPrice, price}) => {
  return (
    <>
      <div className="w-[270px] h-[350px] p-3 bg-gray-50">
        <div className="w-[247px] h-[244px] bg-gray-200 flex items-center justify-center">
          <div className="img">
            <img src={img} alt="product" />
          </div>
        </div>

        <div className="content mt-4">
            <h2 className="text-base text-navyBlue font-bold font-lato">{head}</h2>
            <div className="price flex items-center gap-3 mt-2">
                <p className="text-sm text-navyBlue font-normal font-josefin">${discountPrice} </p>
                <p className="text-xs text-gray-300 font-normal font-josefin line-through">${price} </p>
            </div>
        </div>
      </div>
    </>
  );
};

export default CommonTendingProducts;
