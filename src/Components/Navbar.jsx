import React from "react";
import { BsCart2 } from "react-icons/bs";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router";

const Navbar = () => {
  const navMenu = [
    {
      navContent: "Home",
      navLinks: "/",
    },
    {
      navContent: "Pages",
      navLinks: "/",
    },
    {
      navContent: "Products",
      navLinks: "/",
    },
    {
      navContent: "Blog",
      navLinks: "/",
    },
    {
      navContent: "Shop",
      navLinks: "/",
    },
    {
      navContent: "Contact",
      navLinks: "/",
    },
  ];

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

        <div className="mainNav py-5">
          <div className="container">
            <div className="item-row flex items-center justify-between">
              <div className="logo">
                <Link
                  to={"/"}
                  className="text-[34px] text-[#0D0E43] font-bold font-josefin"
                >
                  Hekto
                </Link>
              </div>
              <div className="menu-items flex items-center gap-9">
                {navMenu.map((item) => (
                  <Link
                    to={item.navLinks}
                    className="text-base text-[#0D0E43] font-normal font-lato hover:text-themePink"
                  >
                    {item.navContent}
                  </Link>
                ))}
              </div>
              <div className="search w-[317px] h-10 border border-[#E7E6EF] flex items-center justify-between pl-5">
                <input type="text" className="border-none outline-none" />
                <button className="h-10 w-10 bg-themePink flex items-center justify-center cursor-pointer">
                  <CiSearch className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
