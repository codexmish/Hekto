import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { GiTireIronCross } from "react-icons/gi";
import { GoPerson } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router";

const ResNav = () => {
  const [showResMenu, setShowResMenu] = useState(false);

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
      <nav className="topNav bg-purple h-11 lg:hidden">
        <div className="container">
          <div className="item flex items-center justify-between py-3 px-3 lg:px-0">
            <div className="left-item flex items-center gap-6 lg:gap-12">
              <div className="flex items-center gap-3 text-sm lg:text-base text-whiteText font-semibold font-josefin cursor-pointer">
                <MdOutlineEmail />
                examplw@gmail.com
              </div>
              <div className="flex items-center gap-3 text-sm lg:text-base text-whiteText font-semibold font-josefin cursor-pointer">
                <FiPhoneCall />
                (12345)67890
              </div>
            </div>
          </div>
        </div>

        <div className="mainNav py-2">
          <div className="container">
            <div className="mab w-full h-10 flex items-center justify-between px-3">
              <div className="logo">
                <Link
                  to={"/"}
                  className="text-[24px] text-[#0D0E43] font-bold font-josefin"
                >
                  Hekto
                </Link>
              </div>

              <div className="menu-icon text-[30px] text-[#0D0E43] font-bold">
                <CgMenuRight
                  className="cursor-pointer active:text-themePink"
                  onClick={() => setShowResMenu(!showResMenu)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ----------extended menu------ */}
        {showResMenu && (
          <div className="extended w-full h-screen bg-white absolute top-0 left-0 px-3 py-7 overflow-hidden">
            <div className="mab w-full h-10 flex items-center justify-between">
              <div className="logo">
                <Link
                  to={"/"}
                  className="text-[24px] text-[#0D0E43] font-bold font-josefin"
                >
                  Hekto
                </Link>
              </div>

              <div className="menu-icon text-[30px] text-[#0D0E43] font-bold">
                <GiTireIronCross
                  className="cursor-pointer active:text-themePink"
                  onClick={() => setShowResMenu(!showResMenu)}
                />
              </div>
            </div>

            <div className="mt-5 mb-5">
              <div className="menu-items flex flex-col items-center gap-4">
                {navMenu.map((item) => (
                  <Link
                    to={item.navLinks}
                    className="text-base text-[#0D0E43] font-normal font-lato hover:text-themePink"
                  >
                    {item.navContent}
                  </Link>
                ))}
              </div>
            </div>

            <div className="search w-full h-10 border border-[#E7E6EF] flex items-center justify-between pl-5">
              <input type="text" className="border-none outline-none" />
              <button className="h-10 w-10 bg-themePink flex items-center justify-center cursor-pointer">
                <CiSearch className="text-2xl" />
              </button>
            </div>

            <div className="right-item flex items-center justify-center gap-4 mt-5">
              <div className="flex items-center gap-1 text-base text-black font-semibold font-josefin cursor-pointer active:text-themePink">
                Login
                <GoPerson />
              </div>
              <div className="flex items-center gap-1 text-base text-black font-semibold font-josefin cursor-pointer active:text-themePink">
                Wishlist
                <CiHeart />
              </div>
              <div className="text-base text-black font-semibold font-josefin cursor-pointer active:text-themePink">
                <BsCart2 />
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default ResNav;
