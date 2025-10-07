import React from "react";
import bannerImgOne from "../assets/images/banner chair.png";
import CommonBanner from "./common/CommonBanner";
import bannerLight from "../assets/images/banner light.png";

const Banner = () => {
  return (
    <>
      <CommonBanner
        image={bannerImgOne}
        bannerLight={bannerLight}
        textone={"Best Furniture For Your Castle...."}
        textTwo={"New Furniture Collection Trends in 2020"}
        textThree={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
        }
      />
    </>
  );
};

export default Banner;
