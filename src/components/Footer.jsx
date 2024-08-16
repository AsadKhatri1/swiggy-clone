import React from "react";
import logo from "../../public/images/logo-r.png";
const Footer = () => {
  return (
    <div className="bg-zinc-900 text-white">
      <div className="max-w-[1200px] mx-auto mt-5 py-10">
        <div className="grid grid-cols-4">
          <div className="flex items-center justify-center">
            <img src={logo} alt="" className="w-[100px]" />
          </div>
          <div className="flex flex-col items-center justify-center font-semibold">
            <h3 className="my-2">BLOGS</h3>
            <h3 className="my-2">FAQs</h3>
          </div>
          <div className="flex items-center justify-center">1</div>
          <div className="flex items-center justify-center">1</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
