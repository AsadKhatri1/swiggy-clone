import React, { useState } from "react";
import logo from "../../public/images/logo.png";
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineDiscount } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const showSideMenu = () => {
    setToggle(true);
  };
  const hideSideMenu = () => {
    setToggle(false);
  };
  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duratrion-700"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="h-full bg-white w-[500px] absolute duration-500"
          style={{ left: toggle ? "0%" : "-100%" }}
        ></div>
      </div>

      <header className="p-3 shadow-xl sticky top-0 z-[999] bg-white">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[100px]">
            <img src={logo} alt="y" className="w-100 h-[55px]" />
          </div>
          <div>
            {" "}
            <span className="font-bold border-b-[3px] border-black ">
              Karachi{" "}
            </span>
            , Sindh, Pakistan{" "}
            <RxCaretDown
              onClick={showSideMenu}
              className="inline text-[#fc8019] font-bold cursor-pointer"
            />
          </div>
          <nav className="ml-auto">
            <ul className="flex list-none gap-6 text-[18px] font-semibold cursor-pointer">
              <li className="flex items-center gap-2 hover:text-[#fc8019]">
                <IoIosSearch /> Search
              </li>
              <li className="flex items-center gap-2 hover:text-[#fc8019] ">
                <MdOutlineDiscount />
                Offers
                <sup className="text-[#fc8019]">new</sup>
              </li>
              <li className="flex items-center gap-2 hover:text-[#fc8019]">
                <IoIosHelpCircleOutline />
                Help
              </li>
              <li className="flex items-center gap-2 hover:text-[#fc8019]">
                <FaRegUser />
                Sign in
              </li>
              <li className="flex items-center gap-2 hover:text-[#fc8019]">
                <CiShoppingCart />
                Cart
                <sup className="text-[#fc8019]">(2)</sup>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
