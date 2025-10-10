import React, { useEffect, useState } from "react";
import { CommonSectionHead } from "./common/CommonSectionHead";
import CommonFeaturedProduct from "./common/CommonFeaturedProduct";
import axios from "axios";

const Featuredproduct = () => {

  const [featuredProduct, setFeatureProduct] = useState()
  // console.log(featuredProduct)


  useEffect(()=>{
    axios.get("https://dummyjson.com/products")
    .then((res)=>setFeatureProduct(res.data.products))
    .catch((err)=>console.log(err))
  },[])



  return (
    <>
      <section className="py-[129px]">
        <div className="container">
          <CommonSectionHead head={"Featured Products"} />

          <div className="mt-8 flex flex-wrap items-center justify-between">

            {
              featuredProduct?.slice(6,10).map((item, key)=>(
                <CommonFeaturedProduct
                  key={key}
                  img={item.thumbnail}
                  title={item.title}
                  code={item.sku}
                  price={item.price}
                />
              ))
            }
          </div>


        </div>
      </section>
    </>
  );
};

export default Featuredproduct;
