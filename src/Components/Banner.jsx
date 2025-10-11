import React from "react";
import bannerImgOne from "../assets/images/banner chair.png";
import CommonBanner from "./common/CommonBanner";
import bannerLight from "../assets/images/banner light.png";
import bannerImgTwo from "../assets/images/sofa.png";
import bannerImgThree from "../assets/images/Sofa-for-Living.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    // speed: 2000,
    autoplaySpeed: 6000,
  };

  return (
    <>
      <section className="banner pt-10 lg:pt-0">
        <Slider {...settings}>
          <div>
            <CommonBanner
              image={bannerImgOne}
              bannerLight={bannerLight}
              textone={"Best Furniture For Your Castle...."}
              textTwo={"New Furniture Collection Trends in 2020"}
              textThree={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
              }
            />
          </div>

          <div>
            <CommonBanner
              image={bannerImgTwo}
              bannerLight={bannerLight}
              textone={"Best Furniture For Your Castle...."}
              textTwo={"New Furniture Collection Trends in 2020"}
              textThree={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
              }
            />
          </div>

          <div>
            <CommonBanner
              image={bannerImgThree}
              bannerLight={bannerLight}
              textone={"Best Furniture For Your Castle...."}
              textTwo={"New Furniture Collection Trends in 2020"}
              textThree={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
              }
            />
          </div>
        </Slider>
      </section>
    </>
  );
};

export default Banner;
