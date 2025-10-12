import React from "react";
import { CommonSectionHead } from "./common/CommonSectionHead";
import delivery from "../assets/images/free-delivery 1.png";
import CommonOffer from "./common/CommonOffer";
import cash from '../assets/images/cashback 1.png'
import quality from '../assets/images/premium-quality 1.png'
import group from '../assets/images/Group.png'


const Offers = () => {
  return (
    <>
      <div className="container px-3">
        <div className="mt-15 mb-35">
          <CommonSectionHead head={"What Shopex Offer!"} />

          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-3 lg:gap-0 mt-10">
            <CommonOffer
              img={delivery}
              head={"24/7 Support"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
              }
            />
            <CommonOffer
              img={cash}
              head={"24/7 Support"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
              }
            />
            <CommonOffer
              img={quality}
              head={"24/7 Support"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
              }
            />
            <CommonOffer
              img={group}
              head={"24/7 Support"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Offers;
