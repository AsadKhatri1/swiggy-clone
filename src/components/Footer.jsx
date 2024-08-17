import React from "react";
import logo from "../../public/images/logo-r.png";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { GrLinkedin } from "react-icons/gr";
const Footer = () => {
  return (
    <div className="bg-zinc-900 text-white">
      <div className="max-w-[1200px] mx-auto mt-5 py-10">
        <div className="grid grid-cols-4">
          <div className="flex items-start justify-start">
            <img src={logo} alt="" className="w-[100px]" />
          </div>
          <div className="flex flex-col items-start  ">
            <h1 className="my-5 font-bold">LINKS</h1>
            <h3 className="my-2 cursor-pointer">BLOGS</h3>
            <h3 className="my-2 cursor-pointer">FAQs</h3>
          </div>
          <div className="flex flex-col items-start ">
            <h1 className="my-5 font-bold">CONTACT</h1>
            <h3 className="my-2 cursor-pointer">
              <FaPhone className="inline" /> +92 302 27937748
            </h3>

            <h3 className="my-2 cursor-pointer">
              <MdEmail className="inline w-6" /> info@foodonline.com
            </h3>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="my-5 font-bold">GET IN TOUCH</h1>
            <div className="flex gap-3">
              <FaFacebook className="inline text-2xl cursor-pointer " />
              <AiFillInstagram className="inline text-2xl cursor-pointer " />
              <GrLinkedin className="inline text-2xl cursor-pointer " />
            </div>
            <div className="flex mt-5">
              <input type="text" className="rounded" />
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
