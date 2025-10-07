import React from "react";
import { Link } from "react-router";

const CommonBanner = ({ image, bannerLight, textone, textTwo, textThree }) => {
  return (
    <>
      <div className="bg-[#F1F0FF]">
        <div className="container relative">
          <div className="light absolute top-0 left-[-135px]">
            <img src={bannerLight} alt="light" />
          </div>
          <div className="row flex items-center justify-end pl-[200px]">
            <div className="text-con flex flex-col gap-7">
              <div className="text flex flex-col gap-3">
                <p className="text-base text-themePink font-bold font-lato">
                  {textone}
                </p>
                <h1 className="text-[53px] text-[#000] font-bold font-josefin max-w-[644px]">
                  {textTwo}
                </h1>
                <p className="text-base text-[#8A8FB9] font-bold font-lato max-w-[560px]">
                  {textThree}
                </p>
              </div>
              <div>
                <Link className="w-[163px] h-[50px] bg-themePink text-base text-white font-bold font-josefin flex justify-center items-center">
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="img-con py-10">
              <img src={image} alt="bannerImage" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonBanner;
