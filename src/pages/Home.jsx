import React from "react";
import Banner from "../Components/Banner";
import Featuredproduct from "../Components/Featuredproduct";
import LatestProducts from "../Components/LatestProducts";
import Offers from "../Components/Offers";

const Home = () => {
  return (
    <>
      <div>
        <Banner />
        <Featuredproduct />
        <LatestProducts />
        <Offers/>
      </div>
    </>
  );
};

export default Home;
