import React from "react";
import Banner from "../Components/Banner";
import Featuredproduct from "../Components/Featuredproduct";
import LatestProducts from "../Components/LatestProducts";
import Offers from "../Components/Offers";
import BottomBanner from "../Components/BottomBanner";
import TrendingProducts from "../Components/TrendingProducts";

const Home = () => {
  return (
    <>
      <div>
        <Banner />
        <Featuredproduct />
        <LatestProducts />
        <Offers />
        <BottomBanner />
        <TrendingProducts />
      </div>
    </>
  );
};

export default Home;
