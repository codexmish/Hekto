import React from "react";
import { BsCart2 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <nav>
        {/* ------------------top nav part--------- */}
        <div className="topNav bg-purple h-11">
          <div className="container">
            <div className="item flex items-center justify-between py-3">
              <div className="left-item flex items-center gap-12">
                <div className="flex items-center gap-3 text-base text-whiteText font-semibold font-josefin">
                  <MdOutlineEmail />
                  examplw@gmail.com
                </div>
                <div className="flex items-center gap-3 text-base text-whiteText font-semibold font-josefin">
                  <FiPhoneCall />
                  (12345)67890
                </div>
              </div>
              <div className="right-item flex items-center gap-4">
                <div className="flex items-center gap-1 text-base text-whiteText font-semibold font-josefin">
                  Login
                  <GoPerson />
                </div>
                <div className="flex items-center gap-1 text-base text-whiteText font-semibold font-josefin">
                  Wishlist
                  <CiHeart />
                </div>
                <div className="text-base text-whiteText font-semibold font-josefin">
                  <BsCart2 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
